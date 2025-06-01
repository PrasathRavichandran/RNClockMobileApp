import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';

import Colors from '../constants/Colors';
import Alarm from '../pages/Alarm';
import Timer from '../pages/Timer';
import Stopwatch from '../pages/Stopwatch';
import Settings from '../pages/Settings';
import Clock from '../pages/Clock';

type TabNavigationList = {
  Clock: undefined;
  Alarm: undefined;
  Timer: undefined;
  Stopwatch: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<TabNavigationList>();

function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: 'left',
        headerTintColor: Colors['white'],
        headerStyle: {
          backgroundColor: Colors['background'],
        },
        headerTitleStyle: {
          fontWeight: '500',
          fontSize: 20,
        },
        tabBarStyle: {
          backgroundColor: Colors['tabbar'],
          borderColor: 'transparent',
        },
        tabBarActiveTintColor: Colors['white'],
        tabBarIconStyle: {
          marginTop: 6,
          marginBottom: 4,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '500',
        },
      }}>
      <Tab.Screen
        name={'Clock'}
        component={Clock}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="clock" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Alarm'}
        component={Alarm}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon2 name="alarm-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Timer'}
        component={Timer}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon2 name="timer-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Stopwatch'}
        component={Stopwatch}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon2 name="stopwatch-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Settings'}
        component={Settings}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon2 name="cog-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;
