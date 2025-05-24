import {StyleSheet, Text, View} from 'react-native';
import Colors from '../constants/Colors';
import ClockCanvas from '../components/ClockCanvas';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function Clock() {
  const inset = useSafeAreaInsets();
  return (
    <View style={Styles.wrapper}>
      <View>
        <Text style={Styles.time}>19:15</Text>
        <Text style={Styles.date}>Fri 5, Jul</Text>
      </View>
      <View style={Styles.clockWrapper}>
        <ClockCanvas />
      </View>
      <View>
        <Text style={Styles.zone}>Timezone</Text>
      </View>

      <View style={[Styles.header, {top: inset.top + 70}]}>
        <Text style={Styles.title}>Clock</Text>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: -50,
    paddingHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: Colors['background'],
    position: 'relative',
  },
  header: {
    position: 'absolute',
    left: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '500',
    color: Colors['white'],
  },
  clockWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  time: {
    fontSize: 64,
    color: Colors['white'],
    marginBottom: 8,
  },
  date: {
    fontSize: 20,
    color: Colors['stroke'],
    marginLeft: 10,
  },
  zone: {
    fontSize: 18,
    color: Colors['white'],
    marginLeft: 10,
  },
});
