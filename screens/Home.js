
import React from 'react';
import { View, Text, Button } from 'react-native';
import auth from '@react-native-firebase/auth';

const Home = ({ navigation }) => {
  const handleLogout = async () => {
    try {
      await auth().signOut();
      
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  return (
    <View>
      <Text>Welcome to the Home Screen!</Text>
     
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default Home;
