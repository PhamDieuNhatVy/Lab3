import React, { useState } from 'react';
import { View, TextInput, Button, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async () => {
    
    if (!email || !password || password !== confirmPassword) {
      setError('Invalid input. Please check your email and passwords.');
      return;
    }

    try {
      
      await auth().createUserWithEmailAndPassword(email, password);
      console.log('User signed up successfully!');
      
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error signing up:', error.message);
      setError(error.message);
    }
  };

  return (
    <View style={styles.container}>
      
      <Image
        source={{ uri: 'https://logo.com/image-cdn/images/kts928pd/production/7f3fc055b0af4dc7e04e159ffd30e35cc788903e-350x350.png?w=1080&q=72' }}
        style={styles.logo}
      />

      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Confirm your password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />
      </View>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

    
      <Button title="Sign Up" onPress={handleSignUp}   color="green"/>

     
      <TouchableOpacity onPress={handleSignUp} style={styles.greenButton}>
      
      </TouchableOpacity>
      <Text>Already have an account? </Text>
      <Text style={styles.loginText}>Login</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  textInputContainer: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    padding: 8,
    width: '80%', 
  },
  textInput: {
    flex: 1,
    marginLeft: 8,
  },
  loginContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  loginText: {
    fontWeight: 'bold',
    color: 'blue',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});

export default SignUp;
