import React from 'react';
import { View, Text , Image} from 'react-native';

export default function Perfil() {
  return (
    <View>
      <Text>Home</Text>
      <Image source={require('../assets/foto3.jpg')} style={{ width: 200, height: 200 }} />
    </View>
  ); 
  }