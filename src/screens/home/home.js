import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#3498db' }]}
        onPress={() => navigation.navigate('Consultar CNPJ')}
      >
        <Text style={styles.buttonText}>Consultar CNPJ</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#2ecc71' }]}
        onPress={() => navigation.navigate('Consultar Empresas')}
      >
        <Text style={styles.buttonText}>Consultar Empresas</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      width: '80%', 
      padding: 20,
      borderRadius: 10,
      marginVertical: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
    },
  });


export default Home;