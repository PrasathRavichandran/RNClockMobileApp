import {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import dayjs from 'dayjs';
import {CanvasContext} from '../context/Canvas';
import Colors from '../constants/Colors';

export default function TimeIndicator() {
  const {now} = useContext(CanvasContext);

  return (
    <>
      <View style={Styles.timeWrapper}>
        <Text style={Styles.time}>
          {dayjs(now).format('hh')}:{dayjs(now).format('mm')}
        </Text>
        <Text style={Styles.ampm}>{dayjs(now).format('a')}</Text>
      </View>
      <Text style={Styles.date}>{dayjs(now).format('ddd, DD MMM')}</Text>
    </>
  );
}

const Styles = StyleSheet.create({
  timeWrapper: {
    flexDirection: 'row',
    gap: 10,
  },
  ampm: {fontSize: 24, color: Colors['white'], marginTop: 24},
  time: {
    fontSize: 64,
    color: Colors['white'],
    lineHeight: 64,
    marginBottom: 8,
  },
  date: {
    fontSize: 20,
    color: Colors['stroke'],
  },
});
