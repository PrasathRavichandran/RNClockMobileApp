import {DrawerContentComponentProps} from '@react-navigation/drawer';
import {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {View, SafeAreaView} from 'react-native';
import Colors from '../constants/Colors';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Sidebar: FC<DrawerContentComponentProps> = () => {
  return (
    <View style={Styles.container}>
      <SafeAreaView>
        <View style={Styles.header}>
          <Text style={Styles.heading}>Clock</Text>
        </View>
      </SafeAreaView>

      <TouchableOpacity style={Styles.link}>
        <Icon name="clock-outline" size={36} color={'#fff'} />
        <Text style={Styles.linkText}>Clock</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Sidebar;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors['tabbar'],
  },
  header: {
    alignItems: 'flex-start',
    paddingBottom: 8,
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff20',
    paddingLeft: 18,
  },
  heading: {
    fontSize: 24,
    color: Colors['white'],
    fontWeight: '600',
    marginBottom: 10,
  },
  link: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingVertical: 10,
    gap: 16,
    backgroundColor: '#5E81AC',
  },
  linkText: {
    fontSize: 18,
    color: Colors['white'],
    fontWeight: 'bold',
  },
});
