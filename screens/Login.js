
import React, { useState } from 'react';
import { View, TextInput, Button, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    
    console.log('Logging in...');
  };

  const handleForgotPassword = () => {
  
    navigation.navigate('ForgotPassword');
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

     
      <Button title="Login" onPress={handleLogin} color="green"/>

      <View style={styles.signupContainer}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signupText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handleForgotPassword}>
        <Text>Forgot your password?</Text>
      </TouchableOpacity>
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
  signupContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  signupText: {
    fontWeight: 'bold',
    color: 'blue',
  },
});

export default Login;
