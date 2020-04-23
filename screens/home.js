import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './reviewForm';

export default function Home({ navigation }) {

  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
  ]);

  return (
    <View style={globalStyles.container}>
      
      <Modal visible={modalOpen} animationType='slide'>
        <View style={styles.modalContent}>
          <MaterialIcons
          name='close'
          size={24}
          style={{...styles.modalToggle, ...styles.modalClose}}
          onPress={() => setModalOpen(false)}
          />
          <ReviewForm />
        </View>
      </Modal>

      <MaterialIcons
        name='add'
        size={24}
        onPress={() => setModalOpen(true)}
        style={styles.modalToggle}
      />
      
      <FlatList
        data={reviews}
        renderItem={( {item} ) => (
          <TouchableOpacity>
            <Card>
              <Text
              style={globalStyles.titleText}
              onPress={() => navigation.navigate('ReviewDetails', item)}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  modalContent: {
    paddingTop: 40,
    flex: 1
  },
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center'
  },
  modalCLose: {
    marginTop: 20,
    marginBottom: 0
  }
});