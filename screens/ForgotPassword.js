
import React, { useState } from 'react';
import { View, TextInput, Button, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleResetPassword = () => {
   
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
      <Text style={styles.title}>Forgot Password</Text>

      {/* TextInput cho Email */}
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      
      
      <Button title="Reset Password" onPress={handleResetPassword} color="green"/>

      
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

export default ForgotPassword;
