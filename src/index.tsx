import React, { useEffect } from "react"
import { View, StyleSheet } from "react-native"
import Svg, { Path } from "react-native-svg"
import { Dimensions } from "react-native"
import Animated, { cancelAnimation, useAnimatedProps, useSharedValue, withRepeat, withTiming } from "react-native-reanimated"
import { WavePath } from "./worklets"

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
  flip?: boolean
}

/**
 *
 * @link https://www.npmjs.com/package/react-native-waves/
 * @param {string} placement view position
 * @param {number} speed animation speed
 * @param {number} maxPoints number of wave points
 * @param {number} width wave width
 * @param {number} height wave height
 * @param {number} delta wave delta
 * @param {string} color wave color
 * @param {number} gap wave gap - used to adjust gap between waves with equal placement
 * @param {number} flip flip view
 * @returns JSX.Element
 */
function Wave({
  placement = "bottom",
  speed = 7.5,
  maxPoints = 2,
  width = WIDTH,
  height = HEIGHT / 4,
  delta = 60,
  color = "#005c99",
  gap,
  flip
}: WaveProps) {

  const styles = StyleSheet.create({
    top: {
      position: "absolute",
      width: WIDTH,
      bottom: 50,
      transform: [{ rotateX: "180deg" }, { rotateY: flip ? "0deg" :"180deg" }],
    },
    bottom: {
      position: "absolute",
      width: WIDTH,
      bottom: -55,
      transform: [{ rotateY: flip ? "0deg" :"180deg" }],
    },
  })

  const tick = useSharedValue(0)
  const loop = useSharedValue(0)
  const path = useSharedValue("")

  const AnimatedPath = Animated.createAnimatedComponent(Path)
  const animatedProps = useAnimatedProps(() => ({ d: path.value }), [path.value])

  useEffect(() => {
    loop.value = withRepeat(withTiming(0, { duration: 0 }, () => {
      path.value = WavePath(maxPoints, speed, delta).getPoints(tick.value * Math.PI, width, height).build(WIDTH, HEIGHT)
      tick.value > 800 ? tick.value = 0 : tick.value += 0.1
    }), -1, false)
    return () => cancelAnimation(loop);
  }, [])

  return (
    <View style={placement === "top" ? styles.top : styles.bottom}>
      <Svg viewBox={`0 0 ${width} ${height}`} width={WIDTH} height={HEIGHT}>
        <AnimatedPath animatedProps={animatedProps} fill={color} translateY={gap} />
      </Svg>
    </View>
  )
}

export default Wave