import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';

const timezones = [
  {
    label: 'UTC',
    value: 'UTC',
    countryCode: 'un',
    flag: 'https://flagcdn.com/w80/un.png',
  },
  {
    label: 'India (IST)',
    value: 'Asia/Kolkata',
    countryCode: 'in',
    flag: 'https://flagcdn.com/w80/in.png',
  },
  {
    label: 'Germany (CET/CEST)',
    value: 'Europe/Berlin',
    countryCode: 'de',
    flag: 'https://flagcdn.com/w80/de.png',
  },
  {
    label: 'United Kingdom (GMT/BST)',
    value: 'Europe/London',
    countryCode: 'gb',
    flag: 'https://flagcdn.com/w80/gb.png',
  },
  {
    label: 'USA - Eastern',
    value: 'America/New_York',
    countryCode: 'us',
    flag: 'https://flagcdn.com/w80/us.png',
  },
  {
    label: 'USA - Central',
    value: 'America/Chicago',
    countryCode: 'us',
    flag: 'https://flagcdn.com/w80/us.png',
  },
  {
    label: 'USA - Mountain',
    value: 'America/Denver',
    countryCode: 'us',
    flag: 'https://flagcdn.com/w80/us.png',
  },
  {
    label: 'USA - Pacific',
    value: 'America/Los_Angeles',
    countryCode: 'us',
    flag: 'https://flagcdn.com/w80/us.png',
  },
  {
    label: 'Canada - Toronto',
    value: 'America/Toronto',
    countryCode: 'ca',
    flag: 'https://flagcdn.com/w80/ca.png',
  },
  {
    label: 'Brazil (BRT)',
    value: 'America/Sao_Paulo',
    countryCode: 'br',
    flag: 'https://flagcdn.com/w80/br.png',
  },
  {
    label: 'Russia - Moscow',
    value: 'Europe/Moscow',
    countryCode: 'ru',
    flag: 'https://flagcdn.com/w80/ru.png',
  },
  {
    label: 'Japan (JST)',
    value: 'Asia/Tokyo',
    countryCode: 'jp',
    flag: 'https://flagcdn.com/w80/jp.png',
  },
  {
    label: 'China (CST)',
    value: 'Asia/Shanghai',
    countryCode: 'cn',
    flag: 'https://flagcdn.com/w80/cn.png',
  },
  {
    label: 'Australia - Sydney',
    value: 'Australia/Sydney',
    countryCode: 'au',
    flag: 'https://flagcdn.com/w80/au.png',
  },
  {
    label: 'South Africa (SAST)',
    value: 'Africa/Johannesburg',
    countryCode: 'za',
    flag: 'https://flagcdn.com/w80/za.png',
  },
  {
    label: 'New Zealand (NZST/NZDT)',
    value: 'Pacific/Auckland',
    countryCode: 'nz',
    flag: 'https://flagcdn.com/w80/nz.png',
  },
  {
    label: 'Singapore (SGT)',
    value: 'Asia/Singapore',
    countryCode: 'sg',
    flag: 'https://flagcdn.com/w80/sg.png',
  },
  {
    label: 'UAE - Dubai (GST)',
    value: 'Asia/Dubai',
    countryCode: 'ae',
    flag: 'https://flagcdn.com/w80/ae.png',
  },
  {
    label: 'Mexico City',
    value: 'America/Mexico_City',
    countryCode: 'mx',
    flag: 'https://flagcdn.com/w80/mx.png',
  },
  {
    label: 'Argentina (ART)',
    value: 'America/Argentina/Buenos_Aires',
    countryCode: 'ar',
    flag: 'https://flagcdn.com/w80/ar.png',
  },
];

function Country() {
  return (
    <FlatList
      data={timezones}
      keyExtractor={item => item.value}
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => {}}
          style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
          <Image
            source={{uri: item.flag}}
            style={{width: 24, height: 16, marginRight: 10, borderRadius: 2}}
          />
          <Text style={{fontSize: 16, color: 'black'}}>{item.label}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

export default Country;
