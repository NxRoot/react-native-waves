import React, { useEffect } from "react"
import { View, StyleSheet } from "react-native"
import Svg, { Path } from "react-native-svg"
import { Dimensions } from "react-native"
import Animated, { useAnimatedProps, useSharedValue } from "react-native-reanimated"

const WIDTH = Dimensions.get("window").width
const HEIGHT = Dimensions.get("window").height

export interface WaveProps {
  placement?: string
  speed?: number
  maxPoints?: number
  width?: number
  height?: number
  delta?: number
  color?: string
  gap?: number
}

/**
 *
 * @param {{ placement?: 'top' | 'bottom', speed?: number, maxPoints?: number, width?: number, height?: number, delta?: number, color?: string, gap?: number }} placement view position
 * @param {number} speed animation speed
 * @param {number} maxPoints number of wave points
 * @param {number} width wave width
 * @param {number} height wave height
 * @param {number} delta wave delta
 * @param {string} color wave color
 * @param {number} gap wave gap - used to adjust gap between waves with equal placement
 * @returns JSX.Element
 */
export default function Wave({
  placement = "bottom",
  speed = 7.5,
  maxPoints = 2,
  width = WIDTH,
  height = HEIGHT / 4,
  delta = 60,
  color = "#005c99",
  gap,
}: WaveProps) {

  const styles = StyleSheet.create({
    top: {
      position: "absolute",
      width: WIDTH,
      bottom: 50,
      transform: [{ rotateX: "180deg" }, { rotateY: "180deg" }],
    },
    bottom: {
      position: "absolute",
      width: WIDTH,
      bottom: -55,
    },
  })

  const AnimatedPath = Animated.createAnimatedComponent(Path)

  let d = useSharedValue(buildPath(calculateWavePoints(0)))
  const animatedProps = useAnimatedProps(() => ({ d: d.value }), [d.value])

  let handle: number
  let lastUpdate: number
  let totalTime = 0

  function calculateWavePoints(factor: number) {
    const points = []

    for (var i = 0; i <= maxPoints; i++) {
      const x = (i / maxPoints) * width
      const sinSeed = (factor + (i + (i % maxPoints))) * speed
      const sinHeight = Math.sin(sinSeed / 100) * delta
      const yPos = Math.sin(sinSeed / 100) * sinHeight + height
      points.push({ x: x, y: yPos })
    }

    return points
  }

  function buildPath(points: { x: number, y: number }[]) {
    let SVGString = "M " + [points[0].x, points[0].y].join(" ")

    const cp0 = {
      x: (points[1].x - points[0].x) / 2,
      y: points[1].y - points[0].y + points[0].y + (points[1].y - points[0].y),
    }

    SVGString += " C " + [cp0.x, cp0.y, cp0.x, cp0.y, points[1].x, points[1].y].join(" ")

    let prevCp = cp0

    for (var i = 1; i < points.length - 1; i++) {
      const cp1 = {
        x: points[i].x - prevCp.x + points[i].x,
        y: points[i].y - prevCp.y + points[i].y,
      }

      SVGString += " C " + [cp1.x, cp1.y, cp1.x, cp1.y, points[i + 1].x, points[i + 1].y].join(" ")
      prevCp = cp1
    }

    SVGString += " L " + WIDTH + " " + HEIGHT
    SVGString += " L 0 " + HEIGHT + " Z"
    return SVGString
  }

  function tick() {
    const now = window.Date.now()

    if (lastUpdate) {
      const elapsed = (now - lastUpdate) / 1000
      lastUpdate = now
      totalTime += elapsed
      d.value = buildPath(calculateWavePoints(totalTime * Math.PI))
    } else {
      lastUpdate = now
    }
    handle = window.requestAnimationFrame(tick)
  }

  useEffect(() => {
    tick()
    return () => window.cancelAnimationFrame(handle)
  }, [])

  return (
    <View style={placement === "top" ? styles.top : styles.bottom}>
      <Svg viewBox={`0 0 ${width} ${height}`} width={WIDTH} height={HEIGHT}>
        <AnimatedPath animatedProps={animatedProps} fill={color} translateY={gap} />
      </Svg>
    </View>
  )
}


