import {SafeAreaView, StyleSheet, View} from 'react-native';
import Customcanvas from './components';
import Colors from './constants/Colors';
import CanvasProvider from './context/Canvas';

export default function App() {
  return (
    <View style={Styles.container}>
      <SafeAreaView style={Styles.center}>
        <CanvasProvider>
          <Customcanvas />
        </CanvasProvider>
      </SafeAreaView>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors['background'],
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
