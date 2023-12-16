import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import newCompanyService from '../../services/new-company.service';

const NewCompany = ({ navigation }) => {
  const [nomeFantasia, setNomeFantasia] = useState('');
  const [razaoSocial, setRazaoSocial] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [dataAbertura, setDataAbertura] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [municipio, setMunicipio] = useState('');
  const [uf, setUF] = useState('');

  const handleSaveCompany = async () => {
    const newCompany = {
      id: new Date().getTime(),
      nomeFantasia,
      razaoSocial,
      cnpj,
      dataAbertura,
      telefone,
      email,
      logradouro,
      numero,
      bairro,
      municipio,
      uf,
    };

    try {
        await newCompanyService.insert(newCompany);  
        //  
        navigation.navigate('Consultar Empresas');
    } catch (error) {
      console.error('Erro ao salvar empresa:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Cadastro de Empresa</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Nome Fantasia"
        value={nomeFantasia}
        onChangeText={setNomeFantasia}
      />
      <TextInput
        style={styles.input}
        placeholder="Razão Social"
        value={razaoSocial}
        onChangeText={setRazaoSocial}
      />
      <TextInput
        style={styles.input}
        placeholder="CNPJ"
        value={cnpj}
        onChangeText={setCnpj}
      />
      <TextInput
        style={styles.input}
        placeholder="Data de Abertura"
        value={dataAbertura}
        onChangeText={setDataAbertura}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={telefone}
        onChangeText={setTelefone}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Logradouro"
        value={logradouro}
        onChangeText={setLogradouro}
      />
      <TextInput
        style={styles.input}
        placeholder="Número"
        value={numero}
        onChangeText={setNumero}
      />
      <TextInput
        style={styles.input}
        placeholder="Bairro"
        value={bairro}
        onChangeText={setBairro}
      />
      <TextInput
        style={styles.input}
        placeholder="Município"
        value={municipio}
        onChangeText={setMunicipio}
      />
      <TextInput
        style={styles.input}
        placeholder="UF"
        value={uf}
        onChangeText={setUF}
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveCompany}>
        <Text style={styles.buttonText}>Salvar Empresa</Text>
      </TouchableOpacity>
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
  saveButton: {
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
});

export default NewCompany;