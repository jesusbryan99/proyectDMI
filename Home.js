import React from 'react';
import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native';
import { Auth } from 'aws-amplify';
const { width } = Dimensions.get('window');
const Home = () => {
  const signOut = async () => {
    try {
      await Auth.signOut({ global: true });
    } catch (error) {
      console.log('error signing out: ', error);
    }
  };
  return (
    <View style={styles.container}>
      
      <View style={styles.header} >
        <Text style={styles.headerText}>¡Bienvenido! Jesus</Text>
        
      </View>
      <Text style={{paddingBottom:350}}></Text>
      <Pressable style={styles.button} onPress={() => signOut()}>
          <Text style={styles.buttonText}>cerrar sesion</Text>
          
        </Pressable>
        <Text style={{paddingBottom:1000}}></Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    paddingVertical: 20,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    width: width,
    alignItems: 'center',
  },
  headerText: {

    fontSize: 28,
    fontWeight: 'bold',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#F80000',
    padding: 10,
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
export default Home;