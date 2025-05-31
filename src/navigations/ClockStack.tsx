import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Clock from '../pages/Clock';
import Country from '../pages/Country';

type StackNavigationList = {
  Clock: undefined;
  CountryList: undefined;
};

const Stack = createNativeStackNavigator<StackNavigationList>();

function ClockStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Clock'}
        component={Clock}
        options={{
          headerShown: false,
          presentation: 'modal',
        }}
      />
      <Stack.Screen name={'CountryList'} component={Country} />
    </Stack.Navigator>
  );
}

export default ClockStack;
