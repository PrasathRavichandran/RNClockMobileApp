import {StyleSheet, View} from 'react-native';
import Colors from '../constants/Colors';
import ClockCanvas from '../components/ClockCanvas';
import CanvasProvider from '../context/Canvas';
import TimeIndicator from '../components/TimeIndicator';
import Timezone from '../components/Timezone';
import TimezoneSwitcher from '../components/TimezoneSwitcher';

export default function Clock() {
  return (
    <View style={Styles.wrapper}>
      <CanvasProvider>
        <TimeIndicator />
        <View style={Styles.clockWrapper}>
          <ClockCanvas />
        </View>

        <Timezone />
      </CanvasProvider>

      <TimezoneSwitcher />
    </View>
  );
}

const Styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors['background'],
    position: 'relative',
    paddingHorizontal: 20,
    paddingTop: 34,
  },
  clockWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
});
