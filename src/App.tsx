import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font/build/FontHooks';
import { StatusBar } from 'expo-status-bar';

import { Fonts } from '../src/constants/fonts';

export default function App() {
  const [fontsLoaded] = useFonts({
    [Fonts.RajdhaniBold]: require('../assets/fonts/Rajdhani-Bold.ttf'),
    [Fonts.RajdhaniLight]: require('../assets/fonts/Rajdhani-Light.ttf'),
    [Fonts.RajdhaniMedium]: require('../assets/fonts/Rajdhani-Medium.ttf'),
    [Fonts.RajdhaniRegular]: require('../assets/fonts/Rajdhani-Regular.ttf'),
    [Fonts.RajdhaniSemiBold]: require('../assets/fonts/Rajdhani-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: Fonts.RajdhaniMedium }}>
        Open up App.tsx to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
