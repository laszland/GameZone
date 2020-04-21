import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails({ navigation }) {
  
  const pressHandler = () => {
    // .pop() and .goBack() does the same
    //navigation.pop();
    navigation.goBack();
  }
  
  return (
    <View style={globalStyles.container}>
      <Text>ReviewDetails Screen</Text>
      <Button title='back' onPress={pressHandler}/>
    </View>
  )
}
