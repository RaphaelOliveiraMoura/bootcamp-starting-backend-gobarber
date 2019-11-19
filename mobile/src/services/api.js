import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.10.2',
});

export default api;
