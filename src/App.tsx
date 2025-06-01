import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigation from './navigations/DrawerNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
}
