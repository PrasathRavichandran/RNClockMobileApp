import {Line, vec} from '@shopify/react-native-skia';
import Colors from '../constants/Colors';

export default function MinutesIndicator({
  x,
  y,
  radius,
}: {
  x: number;
  y: number;
  radius: number;
}) {
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
}
