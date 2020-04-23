import React from 'react';
import { StyleSheet, Button, Text, View, TextInput } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button';

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
              onBlur={formikprops.handleBlur('title')}
            />
            <Text style={globalStyles.errorText}>{ formikprops.touched.title && formikprops.errors.title }</Text>

            <TextInput
              multiline
              style={globalStyles.input}
              placeholder='Review Body'
              onChangeText={formikprops.handleChange('body')}
              value={formikprops.values.body}
              onBlur={formikprops.handleBlur('body')}
            />
            <Text style={globalStyles.errorText}>{ formikprops.touched.body && formikprops.errors.body }</Text>

            <TextInput
              style={globalStyles.input}
              placeholder='Rating 1-5'
              onChangeText={formikprops.handleChange('rating')}
              value={formikprops.values.rating}
              keyboardType='numeric'
              onBlur={formikprops.handleBlur('rating')}
            />
            <Text style={globalStyles.errorText}>{ formikprops.touched.rating && formikprops.errors.rating }</Text>

            <FlatButton text='submit' onPress={formikprops.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  )
};

const styles = StyleSheet.create({

});