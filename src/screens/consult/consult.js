import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const Consult = ({ navigation }) => {
    const [cnpj, setCnpj] = useState('');
    const [result, setResult] = useState(null);
  
    const handleConsult = async () => {
      try {
        const response = await axios.get(
            `https://api-publica.speedio.com.br/buscarcnpj?cnpj=${cnpj}`
        );
        setResult(response.data);
      } catch (error) {
        console.error('Erro ao consultar a API:', error);
        setResult(null);
      }
    };
  
    const renderKeyValue = ({ item }) => (
      <View style={styles.item}>
        <Text style={styles.key}>{item[0]}</Text>
        <Text style={styles.value}>{item[1]}</Text>
      </View>
    );
  
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Consultar CNPJ</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o CNPJ"
          onChangeText={(text) => setCnpj(text)}
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.button} onPress={handleConsult}>
          <Text style={styles.buttonText}>Consultar</Text>
        </TouchableOpacity>
        {result && (
          <FlatList
            data={Object.entries(result)}
            renderItem={renderKeyValue}
            keyExtractor={(item) => item[0]}
            style={styles.flatList}
          />
        )}
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingTop: 50,
    },
    heading: {
      fontSize: 24,
      marginBottom: 20,
    },
    input: {
      width: '80%',
      padding: 10,
      borderWidth: 1,
      borderRadius: 5,
      marginBottom: 20,
    },
    button: {
      backgroundColor: '#3498db',
      padding: 15,
      borderRadius: 5,
      width: '80%',
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
    },
    flatList: {
      width: '80%',
      marginTop: 20,
    },
    item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    key: {
      fontWeight: 'bold',
      marginRight: 10,
    },
    value: {
      flex: 1,
    },
  });

export default Consult;