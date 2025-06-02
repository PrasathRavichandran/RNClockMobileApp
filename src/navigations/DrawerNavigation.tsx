import {createDrawerNavigator} from '@react-navigation/drawer';
import Clock from '../pages/Clock';
import Colors from '../constants/Colors';
import Sidebar from '../components/Sidebar';
import Alarm from '../pages/Alarm';
import Timer from '../pages/Timer';
import Stopwatch from '../pages/Stopwatch';
import Settings from '../pages/Settings';

type DrawerNavigationList = {
  Clock: undefined;
  Alarm: undefined;
  Timer: undefined;
  Stopwatch: undefined;
  Settings: undefined;
};

const Drawer = createDrawerNavigator<DrawerNavigationList>();

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      drawerContent={props => <Sidebar {...props} />}
      screenOptions={{
        headerTitleAlign: 'left',
        headerTintColor: Colors['white'],
        headerStyle: {
          backgroundColor: Colors['background'],
        },
        headerTitleStyle: {
          fontSize: 20,
        },
      }}>
      <Drawer.Screen name={'Clock'} component={Clock} />
      <Drawer.Screen name={'Alarm'} component={Alarm} />
      <Drawer.Screen name={'Timer'} component={Timer} />
      <Drawer.Screen name={'Stopwatch'} component={Stopwatch} />
      <Drawer.Screen name={'Settings'} component={Settings} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
