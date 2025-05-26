import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Perfil() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('homeScreen2')}>
        <Text style={styles.buttonText}>IR A HOME 2</Text>
      </TouchableOpacity>
    </View>
  ); 
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      backgroundColor: '#2196F3',
      paddingVertical: 12,
      paddingHorizontal: 30,
      borderRadius: 4,
      marginTop: 10,
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
  