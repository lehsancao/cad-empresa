import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../home/home'
import Consult from '../consult/consult';
import Register from '../register/register';
import NewCompany from '../register/new-company';

const Stack = createStackNavigator();

const Navigation = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home">
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="Consultar CNPJ" component={Consult} />
          <Stack.Screen name="Consultar Empresas" component={Register} />
          <Stack.Screen name="Cadastrar Empresa" component={NewCompany} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  
  export default Navigation ;