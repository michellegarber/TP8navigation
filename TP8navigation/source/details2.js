import React from 'react';
import { View, Text, Image } from 'react-native';

export default function Details2() {
  return (
    <View>
      <Text>Detalles</Text>
      <Image source={require('../assets/foto1.jpg')} style={{ width: 200, height: 200 }} />
    </View>
  );
}
