import {createDrawerNavigator} from '@react-navigation/drawer';
import Clock from '../pages/Clock';
import Colors from '../constants/Colors';
import Sidebar from '../components/Sidebar';

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
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
