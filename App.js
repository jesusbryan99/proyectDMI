import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Amplify from 'aws-amplify';
import config from "./src/aws-exports";
import { withAuthenticator } from 'aws-amplify-react-native';
import Home from './Home';
import Libros from './Libros';
import CatalogoLibros from './CatalogoLibros'; 
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});
const Tab = createBottomTabNavigator();
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={Home}/>
        <Tab.Screen name='Registro de libros' component={Libros}/>
        <Tab.Screen name='Catalogo de libros' component={CatalogoLibros}/>
      </Tab.Navigator>
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
export default withAuthenticator(App);