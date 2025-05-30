import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

    export default function Perfil2() {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Esta es la pantalla Perfil2</Text>
          <Image source={require('../assets/foto3.jpg')} style={{ width: 200, height: 200 }} />
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      text: {
        fontSize: 20,
      },
    });