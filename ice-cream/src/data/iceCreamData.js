import axios from 'axios';

export const iceCreamMenu = () => {
  return axios.get('/api/menu');
};
