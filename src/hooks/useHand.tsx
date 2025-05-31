import {useMemo} from 'react';
import {useClock} from '../context/Canvas';

export default function useHand({x, y}: {x: number; y: number}) {
  const {now} = useClock();

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
      const sec = now!.getSeconds();
      const min = now!.getMinutes();
      const hr = now!.getHours() % 12;

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

  return {
    secLineX,
    secLineY,
    minLineX,
    minLineY,
    hrLineX,
    hrLineY,
  };
}
