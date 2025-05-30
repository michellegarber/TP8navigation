import React from 'react';
import { View, Text, StyleSheet , Image} from 'react-native';

export default function SettingScreen2() {
  return (
    <View>
      <Text>Ajustes</Text>
      <Image source={require('../assets/foto2.jpg')} style={{ width: 200, height: 200 }} />
    </View>
  ); 
  }