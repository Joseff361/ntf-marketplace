import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font/build/FontHooks';

import DetailsScreen from './components/screens/DetailsScreen';
import HomeScreen from './components/screens/HomeScreen';
import { Fonts } from '../src/constants/fonts';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

function App() {
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
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
