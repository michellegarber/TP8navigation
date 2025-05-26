import React from 'react';
import { View, Text, StyleSheet,  TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
  
export default function SettingScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Ajustes</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Ajustes2')}>
        <Text style={styles.buttonText}>IR A AJUSTES 2</Text>
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
  