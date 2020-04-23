import React from 'react';
import { StyleSheet, Button, Text, View, TextInput } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik, yupToFormErrors } from 'formik';
import * as yup from 'yup';

const ReviewSchema = yup.object({
  title: yup.string()
    .required()
    .min(4),
  body: yup.string()
    .required()
    .min(8),
  rating: yup.string()
    .required()
    .test('is-num-1-5', 'Rating must be a number 1 - 5', (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    })
})

export default function ReviewForm({ addReview }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: '', body: '', rating: '' }}
        validationSchema={ReviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addReview(values);
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