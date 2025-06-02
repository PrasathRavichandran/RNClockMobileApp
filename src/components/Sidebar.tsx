import {DrawerContentComponentProps} from '@react-navigation/drawer';
import {FC} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {View, SafeAreaView} from 'react-native';
import Colors from '../constants/Colors';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Sidebar: FC<DrawerContentComponentProps> = ({navigation, state}) => {
  const activeRoute = state.routeNames[state.index];
  const links = [
    {
      icon: 'clock-outline',
      title: 'Clock',
    },
    {
      icon: 'alarm',
      title: 'Alarm',
    },
    {
      icon: 'timer-sand',
      title: 'Timer',
    },
    {
      icon: 'timer-outline',
      title: 'Stopwatch',
    },
    {
      icon: 'cog-outline',
      title: 'Settings',
    },
  ];

  return (
    <View style={Styles.container}>
      <SafeAreaView>
        <View style={Styles.header}>
          <Text style={Styles.heading}>Clock</Text>
        </View>
      </SafeAreaView>

      <FlatList
        data={links}
        contentContainerStyle={{paddingTop: 12, paddingHorizontal: 10}}
        renderItem={({item}) => (
          <TouchableOpacity
            style={[
              Styles.link,
              {
                backgroundColor:
                  item.title === activeRoute ? Colors['background'] : undefined,
              },
            ]}
            onPress={() => navigation.navigate(item.title)}>
            <Icon name={item.icon} size={28} color={'#fff'} />
            <Text style={Styles.linkText}>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={id => id.title}
      />
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
    paddingLeft: 26,
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
    paddingLeft: 14,
    paddingVertical: 12,
    gap: 16,
    borderRadius: 100,
  },
  linkText: {
    fontSize: 16,
    color: Colors['white'],
    fontWeight: 'bold',
  },
});
