import * as React from 'react';
import { Button, TextInput, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./source/HomeScreen";
import HomeScreen2 from "./source/HomeScreen2";
import SettingScreen from "./source/SettingScreen";
import SettingScreen2 from "./source/SettingScreen2";
import Details  from "./source/Details";
import Details2 from "./source/Details2";
import Perfil from "./source/Perfil";
import Perfil2 from "./source/Perfil2";


const StackA = createNativeStackNavigator();
const StackB = createNativeStackNavigator();
const StackC = createNativeStackNavigator();

function StackANavigator() {
  return (
    <StackA.Navigator>
      <StackA.Screen name="homeScreen" component={HomeScreen} />
      <StackA.Screen name="homeScreen2" component={HomeScreen2} />
    </StackA.Navigator>
  );
}

function StackBNavigator() {
  return (
    <StackB.Navigator>
      <StackB.Screen name="ScreenB1" component={SettingScreen} />
      <StackB.Screen name="ScreenB2" component={SettingScreen2} />
    </StackB.Navigator>
  );
}

function StackCNavigator() {
  return (
    <StackC.Navigator>
      <StackC.Screen name="ScreenC1" component={Details} />
      <StackC.Screen name="ScreenC2" component={Details2} />
    </StackC.Navigator>
  );
}

function StackDNavigator() {
  return (
    <StackD.Navigator>
      <StackD.Screen name="ScreenD1" component={Perfil} />
      <StackD.Screen name="ScreenD2" component={Perfil2} />
    </StackD.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Inicio" component={StackANavigator} 
       options={{
        tabBarIcon: ({ color }) => (
          <Ionicons name="home" size={24} color={color} />
         ),
      }}/>
      <Tab.Screen name="Ajustes"    component={StackBNavigator}  
      options={{
        tabBarIcon: ({ color }) => (
          <Ionicons name="settings" size={24} color={color} />
         ),
      }}/>
      <Tab.Screen name="Detalles"     component={StackCNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={24} color={color} />
           ),
        }}
      />
      <Tab.Screen name="Perfil" component={StackDNavigator} 
       options={{
        tabBarIcon: ({ color }) => (
          <Ionicons name="home" size={24} color={color} />
         ),
      }}/>
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
