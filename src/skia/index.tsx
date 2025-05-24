import {
  Canvas,
  Circle,
  Group,
  Line,
  RadialGradient,
  vec,
} from '@shopify/react-native-skia';
import Colors from '../constants/Colors';
import {useEffect, useMemo, useState} from 'react';

const [width, height] = [300, 300];

export default function Customcanvas() {
  const x = width / 2;
  const y = width / 2;

  const strokePoint = 14;

  const radius = Math.min(x, y);

  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  /**
   * Explanation:
   *
   * Here,
   * - Math.cos(90 * Math.PI / 180) -> Math.cos(Math.PI / 2) which is 0
   * - Math.sin(90 * Math.PI / 180) -> Math.sin(Math.PI / 2) which is 1
   *
   * so cos is for x coordinate, sin is for y coordinate.
   *
   * consider x = 150, then
   * secLineX = 150 * 0 = 0
   * secLiney = 150 * 1 = 150
   *
   * <Line p1={vec(x, y)} p2={vec(secLineX, secLineY)} color={'orange'} />
   *
   * while ploting in the Line p1 = (150, 150) and p2 = (0, 150). Here the p2 has x coordinate as 0, so no line will draw in the canvas.
   * so multiple some pixel with both x and y will draw a line.
   *
   */

  const {secLineX, secLineY, minLineX, minLineY, hrLineX, hrLineY} =
    useMemo(() => {
      const sec = now.getSeconds();
      const min = now.getMinutes();
      const hr = now.getHours() % 12;

      const seconds = sec * 6; // Each 60 seconds to complete the full rotation ie: 360 deg. So 360 / 60 = 6 deg per second.
      const minutes = min * 6; // Each 60 minutes to complete the full rotation ie: 360 deg. So 360 / 60 = 6 deg per minutes.
      const hour = hr * 30 + min * 0.5; // Each 12 hours to complete the full rotation ie: 360 deg, 12 * 30 = 360 deg. And hour hand will move slightly if the time is 15:30, so 30 / 60 = 0.5.

      return {
        secLineX: x + 80 * Math.cos((seconds * Math.PI) / 180),
        secLineY: y + 80 * Math.sin((seconds * Math.PI) / 180),
        minLineX: x + 80 * Math.cos((minutes * Math.PI) / 180),
        minLineY: y + 80 * Math.sin((minutes * Math.PI) / 180),
        hrLineX: x + 60 * Math.cos((hour * Math.PI) / 180),
        hrLineY: y + 60 * Math.sin((hour * Math.PI) / 180),
      };
    }, [now, x, y]);

  const minutesIndicator = () => {
    const outerCircleRadius = radius;
    const longInnerRadius = radius - 20;
    const shortInnerRadius = radius - 10;
    const lines = [];

    // Long lines for each 5-second mark (12 lines)
    for (let i = 0; i < 60; i += 5) {
      const angle = (i * 6 * Math.PI) / 180;
      const x1 = x + outerCircleRadius * Math.cos(angle);
      const y1 = y + outerCircleRadius * Math.sin(angle);
      const x2 = x + longInnerRadius * Math.cos(angle);
      const y2 = y + longInnerRadius * Math.sin(angle);

      lines.push(
        <Line
          key={`long-${i}`}
          p1={vec(x1, y1)}
          p2={vec(x2, y2)}
          color={Colors['stroke']}
          strokeWidth={2}
        />,
      );
    }

    // Short lines for each second in between (48 lines)
    for (let i = 0; i < 60; i++) {
      if (i % 5 === 0) continue; // Skip the long lines
      const angle = (i * 6 * Math.PI) / 180;
      const x1 = x + longInnerRadius * Math.cos(angle);
      const y1 = y + longInnerRadius * Math.sin(angle);
      const x2 = x + shortInnerRadius * Math.cos(angle);
      const y2 = y + shortInnerRadius * Math.sin(angle);

      lines.push(
        <Line
          key={`short-${i}`}
          p1={vec(x1, y1)}
          p2={vec(x2, y2)}
          color={Colors['stroke']}
          strokeWidth={2}
        />,
      );
    }

    return lines;
  };

  return (
    <Canvas style={{width, height}}>
      <Group transform={[{rotate: -Math.PI / 2}]} origin={{x, y}}>
        {/* circle */}
        <Circle cx={x} cy={y} r={radius - 40} color={Colors['circle']} />

        {/* circle outline */}
        <Circle
          cx={x}
          cy={y}
          r={radius - 40}
          color={Colors['stroke']}
          style={'stroke'}
          strokeWidth={strokePoint}
        />

        {/* seconds line */}
        <Line
          p1={vec(x, y)}
          p2={vec(secLineX, secLineY)}
          color={'orange'}
          strokeWidth={strokePoint - 8}
          strokeCap={'round'}
        />

        {/* minutes line */}
        <Line
          p1={vec(x, y)}
          p2={vec(minLineX, minLineY)}
          strokeWidth={strokePoint - 6}
          strokeCap={'round'}
          style={'stroke'}>
          <RadialGradient
            c={vec(x, y)}
            r={radius / 2}
            colors={[Colors['blue'], Colors['lightblue']]}
          />
        </Line>

        {/* hour line */}
        <Line
          p1={vec(x, y)}
          p2={vec(hrLineX, hrLineY)}
          strokeWidth={strokePoint - 6}
          strokeCap={'round'}
          style={'stroke'}>
          <RadialGradient
            c={vec(x, y)}
            r={radius / 2}
            colors={[Colors['pink'], Colors['lightpink']]}
          />
        </Line>

        {/* center circle */}
        <Circle cx={x} cy={y} r={strokePoint} color={Colors['stroke']} />

        {/* minutes indicator line */}
        {minutesIndicator()}
      </Group>
    </Canvas>
  );
}
