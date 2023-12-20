// App.js

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import Home from './Screens/Home'; 
import fonts from './Global/fonts'; 
import colors from './Global/colors'; 
import ItemListCategory from './Screens/ItemListCategory';
import { setCustomText } from 'react-native-global-props';
import Navigator from './Navigation/TabNavigator';

const customTextProps = {
  style: {
    fontFamily: 'Epilogue-Regular', 
  }
}

setCustomText(customTextProps);

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <Navigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.customPrimaryBackground,
  },
});