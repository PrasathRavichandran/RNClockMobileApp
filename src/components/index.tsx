import {
  Canvas,
  Circle,
  Group,
  Line,
  RadialGradient,
  vec,
} from '@shopify/react-native-skia';
import Colors from '../constants/Colors';
import useHand from '../hooks/useHand';
import MinutesIndicator from './MinutesIndicator';

const [width, height] = [300, 300];

export default function Customcanvas() {
  const x = width / 2;
  const y = width / 2;

  const strokePoint = 14;

  const radius = Math.min(x, y);

  const {secLineX, secLineY, minLineX, minLineY, hrLineX, hrLineY} = useHand({
    x,
    y,
  });

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

        {/* seconds line */}
        <Line
          p1={vec(x, y)}
          p2={vec(secLineX, secLineY)}
          color={'orange'}
          strokeWidth={strokePoint - 9}
          strokeCap={'round'}
        />

        {/* center circle */}
        <Circle cx={x} cy={y} r={strokePoint} color={Colors['stroke']} />

        {/* minutes indicator line */}
        <MinutesIndicator x={x} y={y} radius={radius} />
      </Group>
    </Canvas>
  );
}
