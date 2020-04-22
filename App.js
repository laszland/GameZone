import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Home from './screens/home';
import Navigator from './routes/drawer';

const getFont = () => Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
});

export default function App() {
  // call the font is async so the rest of the code has to wait till the font is get loaded
  const [fontsLoaded, setFontsLoaded] = useState(false);
  // check, are the fonts loaded
  if (fontsLoaded) {
    return (
      <Navigator />
    );
  } else {
    return (
      <AppLoading
        startAsync={getFont}
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }
}
