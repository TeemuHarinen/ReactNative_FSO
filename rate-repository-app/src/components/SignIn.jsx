import Text from './Text';
import FormikTextInput from './FormikTextInput';
import { Pressable, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(1, 'Username is too short')
    .max(30, 'Username is too long')
    .required('Username is required'),
  password: yup
    .string()
    .min(5, 'Password is too short')
    .max(50, 'Password is too long')
    .required('Password is required'),
});

const initialValues = {
  username: '',
  password: '',
};

const styles = StyleSheet.create({
  Text: {
    backgroundColor: '#0366d6',
    color: 'white',
    padding: 15,
    textAlign: 'center',
    margin: 10,
    borderRadius: 5,
  },
  container: {
    backgroundColor: 'white',
    padding: 10,
  },
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <Pressable onPress={onSubmit}>
        <Text style={styles.Text}>Sign in</Text>
      </Pressable>
    </View>
  );
}

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};



export default SignIn;