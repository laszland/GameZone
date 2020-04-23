import React from 'react';
import { StyleSheet, Button, Text, View, TextInput } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';

export default function ReviewForm() {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: '', body: '', rating: '' }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formikprops) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder='Review Title'
              onChangeText={formikprops.handleChange('title')}
              value={formikprops.values.title}
            />

            <TextInput
              multiline
              style={globalStyles.input}
              placeholder='Review Body'
              onChangeText={formikprops.handleChange('body')}
              value={formikprops.values.body}
            />

            <TextInput
              style={globalStyles.input}
              placeholder='Rating 1-5'
              onChangeText={formikprops.handleChange('rating')}
              value={formikprops.values.rating}
              keyboardType='numeric'
            />

            <Button title='submit' color='maroon' onPress={formikprops.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  )
};

const styles = StyleSheet.create({

});