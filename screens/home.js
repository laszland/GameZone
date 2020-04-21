import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {
  
  const pressHandler = () => {
    // you can use push() or navigate(), they do the same thing
    navigation.navigate('ReviewDetails');
    //navigation.push('ReviewDetails');
  }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
      <Button title='go to review dets' onPress={pressHandler}/>
    </View>
  )
}
