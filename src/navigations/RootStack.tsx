import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Clock from '../pages/Clock';
import CanvasProvider from '../context/Canvas';

type StackNavigationList = {
  Clock: undefined;
};

const Stack = createNativeStackNavigator<StackNavigationList>();

function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={'Clock'}
        component={() => (
          <CanvasProvider>
            <Clock />
          </CanvasProvider>
        )}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
