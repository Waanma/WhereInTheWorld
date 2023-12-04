import { useState } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { themes } from './constants/themes/index';
import AppNavigator from './navigation';
import { useFonts } from "expo-font";
import { ActivityIndicator, View } from 'react-native';
import { useStore } from './store/appStore';

export default function App() {
  const { theme, changeTheme } = useStore();

  const [loaded] = useFonts({
    "RobotoSerif": require('./assets/fonts/RobotoSerif-Bold.ttf'),
    "RobotoLight": require("./assets/fonts/RobotoSerif_36pt-Light.ttf"),
    "RobotoBoldItalic": require("./assets/fonts/RobotoSerif-BoldItalic.ttf"),
    "RobotoBold": require("./assets/fonts/RobotoSerif-Bold.ttf"),
    "MontserratBold": require("./assets/fonts/MontserratAlternates-Bold.ttf"),
    "QuicksandMedium": require("./assets/fonts/Quicksand-Medium.ttf"),
    "QuicksandBold": require("./assets/fonts/Quicksand-Bold.ttf"),
  });

  if (!loaded) {
    return (
      <View style={{ flex: 1, backgroundColor: "#FFF" }}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    )
  }

  return (
    <ThemeProvider theme={themes[theme]}>
      <AppNavigator changeTheme={changeTheme} />
    </ThemeProvider>
  );
}