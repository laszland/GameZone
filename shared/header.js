import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header() {
  return (
    <View style={styles.header}>
      <MaterialIcons name='menu'/>
      <View>
        <Text style={styles.headerText}>GameZone</Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  header: {
    width: Dimensions.get('screen').width-20,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1
  }
});