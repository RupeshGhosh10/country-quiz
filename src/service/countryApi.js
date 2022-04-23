import axios from 'axios';

export const getAllCountries = async () => {
  const req = await axios.get('https://restcountries.com/v3.1/all');
  return req.data;
}