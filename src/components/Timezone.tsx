import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Colors from '../constants/Colors';
import {useClock} from '../context/Canvas';
import dayjs from 'dayjs';

export default function Timezone() {
  const {now} = useClock();

  return (
    <View style={Styles.timezoneWrapper}>
      <Text style={Styles.zone}>Timezone</Text>
      <View style={Styles.countryDropdown}>
        <TouchableOpacity>
          <Image
            style={Styles.countryImg}
            source={{uri: 'https://flagcdn.com/w80/be.png'}}
          />
        </TouchableOpacity>
        <Text style={Styles.utc}>UTC{dayjs(now).format('Z')} (IST)</Text>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  timezoneWrapper: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors['stroke'],
    paddingBottom: 20,
  },
  zone: {
    fontSize: 18,
    color: Colors['white'],
    fontWeight: '500',
  },
  countryDropdown: {
    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  countryImg: {
    width: 50,
    height: 28,
    borderRadius: 5,
  },
  utc: {
    color: Colors['stroke'],
    fontSize: 14,
    fontWeight: '500',
  },
});
