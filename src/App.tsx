import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Customcanvas from './skia';
import Colors from './constants/Colors';

export default function App() {
  return (
    <View style={Styles.container}>
      <SafeAreaView style={Styles.center}>
        <Customcanvas />
      </SafeAreaView>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors['background'],
  },
  center:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});
