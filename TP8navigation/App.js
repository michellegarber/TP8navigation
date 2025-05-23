import * as React from 'react';
import { Button, TextInput, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import homeScreen from "./source/homeScreen";
import homeScreen2 from "./source/homeScreen2";
import settingScreen from "./source/settingScreen";
import settingScreen2 from "./source/settingScreen2";
import details from "./source/details";
import details2 from "./source/details2";

const StackA = createNativeStackNavigator();
const StackB = createNativeStackNavigator();
const StackC = createNativeStackNavigator();

function StackANavigator() {
  return (
    <StackA.Navigator>
      <StackA.Screen name="homeScreen" component={homeScreen} />
      <StackA.Screen name="homeScreen2" component={homeScreen2} />
    </StackA.Navigator>
  );
}

function StackBNavigator() {
  return (
    <StackB.Navigator>
      <StackB.Screen name="ScreenB1" component={settingScreen} />
      <StackB.Screen name="ScreenB2" component={settingScreen2} />
    </StackB.Navigator>
  );
}

function StackCNavigator() {
  return (
    <StackC.Navigator>
      <StackC.Screen name="ScreenC1" component={details} />
      <StackC.Screen name="ScreenC2" component={details2} />
    </StackC.Navigator>
  );
}

function StackDNavigator() {
  return (
    <StackD.Navigator>
      <StackD.Screen name="ScreenD1" component={details} />
      <StackD.Screen name="ScreenD2" component={details2} />
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
