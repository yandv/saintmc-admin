import axios from 'axios';

const api = axios.create(
  /*{ baseURL: "http://api.saintmc.yallandev.tk" }*/
  { baseURL: "https://localhost:3333" }
);

export default api;