import {useState} from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';
import Colors from '../constants/Colors';

export default function TimezoneSwitcher() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={Styles.row}>
      <Text style={Styles.title}>Automatic timezone</Text>
      <Switch
        trackColor={{false: Colors['circle'], true: Colors['blue']}}
        thumbColor={isEnabled ? Colors['pink'] : Colors['stroke']}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View> 
  );
}

const Styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors['stroke'],
  },
});
