import AsyncStorage from '@react-native-async-storage/async-storage';

const insert = async (company) => {
  const data = await getData();
  data.companies.push(company);
  await storeData(data);
};

const remove = async (id) => {
  const data = await getData();
  data.companies = data.companies.filter((company) => company.id !== id);
  await storeData(data);
};

const list = async () => {
  const { companies } = await getData();
  return companies || [];
};

const storeData = async (value) => {
  const jsonValue = JSON.stringify(value);
  await AsyncStorage.setItem('company-app', jsonValue);
};

const getData = async () => {
  const empty = { companies: [] };
  const jsonValue = await AsyncStorage.getItem('company-app');
  const data = jsonValue ? JSON.parse(jsonValue) : empty;
  return data;
};

export default {
  insert,
  remove,
  list,
};