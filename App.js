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
import Ionicons from 'react-native-vector-icons/Ionicons';
import Perfil from './Perfil';

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
      <Tab.Navigator 
      screenOptions={({route})=>({
        tabBarIcon: ({focused, color, size})=>{
          let iconName;
          if (route.name === "Home") {
            iconName = focused
            ? "home-outline"
            : "home-sharp";
            
          }else if (route.name=== "Registro de libros") {
            iconName = focused
            ? iconName="clipboard-outline" 
            : iconName="clipboard-sharp"
          }
          else if (route.name=== "Catalogo de libros") {
            iconName=focused
            ? iconName="book-outline"
            : iconName="book-sharp";
          }
          else if (route.name=== "Perfil") {
            iconName = focused
            ? iconName="heart-circle-outline"
            : iconName ="heart-circle-sharp"
          }
          return<Ionicons name={iconName} size={size} color={color}/>
        },
      })}
      >
        <Tab.Screen name='Home' component={Home}/>
        <Tab.Screen name='Registro de libros' component={Libros}/>
        <Tab.Screen name='Catalogo de libros' component={CatalogoLibros}/>
        <Tab.Screen name='Perfil' component={Perfil}/>
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
    fontSize: '20px',
  },
});
export default withAuthenticator(App);