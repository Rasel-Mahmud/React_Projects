import axios from 'axios';

export const iceCreamMenu = () => {
  return axios.get('/api/menu');
};

export const getMenuItem = id => {
  return axios
    .get(`/api/menu/${id}`)
    .then(res => res.data)
    .catch(err => {
      throw err;
    });
};

export const putMenuItem = menuItem => {
  return axios
    .put(`/api/menu/${menuItem.id.toString()}`, menuItem)
    .then(res => res.data)
    .catch(err => {
      throw err;
    });
};
