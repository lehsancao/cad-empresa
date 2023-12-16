import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import newCompanyService from '../../services/new-company.service';

const Register = ({ navigation }) => {
    const [companies, setCompanies] = useState([]);
  
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
          // Atualizar a lista de empresas quando a tela estiver em foco
          retrieveCompanies();
        });
    
        return unsubscribe;
      }, [navigation]);
  
      const retrieveCompanies = async () => {
        try {
          const companyList = await newCompanyService.list();
          setCompanies(companyList);
        } catch (error) {
          console.error('Erro ao recuperar empresas:', error);
        }
      };
  
    const handleAddCompany = () => {
      // Navegar para a tela de cadastro de empresa
      navigation.navigate('Cadastrar Empresa');
    };

    const handleRemoveCompany = async (id) => {
      await newCompanyService.remove(id);
      retrieveCompanies(); // Atualizar a lista após a remoção
    };
  
    const renderCompanyItem = ({ item }) => (
        <View style={styles.companyItem}>
          <Text>{item.nomeFantasia}</Text>
          <TouchableOpacity onPress={() => handleRemoveCompany(item.id)}>
            <Text style={styles.removeButton}>🗑️</Text>
          </TouchableOpacity>
        </View>
    );
  
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.addButton} onPress={handleAddCompany}>
          <Text style={styles.buttonText}>Cadastrar Nova Empresa</Text>
        </TouchableOpacity>
        <FlatList
          data={companies}
          renderItem={renderCompanyItem}
          keyExtractor={(item) => item.id.toString()}
          style={styles.flatList}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingTop: 50,
    },
    flatList: {
      width: '80%',
      marginTop: 20,
    },
    companyItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    addButton: {
      backgroundColor: '#2ecc71',
      padding: 15,
      borderRadius: 5,
      width: '80%',
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
    },
  });

export default Register;