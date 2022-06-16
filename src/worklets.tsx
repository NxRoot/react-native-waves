export function WavePath(maxPoints: number, speed: number, delta: number) {
  "worklet"
  const points: { x: number; y: number }[] = []

  return {
    getPoints: (factor: number, width: number, height: number) => {
      for (let i = 0; i <= maxPoints; i++) {
        const x = (i / maxPoints) * width
        const sinSeed = (factor + i) * speed
        const sinHeight = Math.sin(sinSeed / 100) * delta
        const yPos = Math.sin(sinSeed / 100) * sinHeight + height
        points.push({ x: x, y: yPos })
      }
      return {
        build: (WIDTH: number, HEIGHT: number) => {
          let SVGString = "M " + [points[0].x, points[0].y].join(" ")

          const cp0 = {
            x: (points[1].x - points[0].x) / 2,
            y: points[1].y - points[0].y + points[0].y + (points[1].y - points[0].y),
          }

          SVGString += " C " + [cp0.x, cp0.y, cp0.x, cp0.y, points[1].x, points[1].y].join(" ")

          let prevCp = cp0

          for (let i = 1; i < points.length - 1; i++) {
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
        },
      }
    },
  }
}
