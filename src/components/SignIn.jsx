import { View, TextInput, Pressable, StyleSheet } from 'react-native';
import { useFormik } from 'formik';

import Text from './Text';

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },

  input: {
    borderWidth: 1,
    borderColor: '#586069',
    padding: 10,
    marginBottom: 15,
    backgroundColor: 'white',
  },

  button: {
    backgroundColor: '#0366d6',
    padding: 15,
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

const initialValues = {
  username: '',
  password: '',
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
      />

      <Pressable
        style={styles.button}
        onPress={formik.handleSubmit}
      >
        <Text style={styles.buttonText}>Sign in</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;