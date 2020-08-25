import axios from "axios";

const api = axios.create(
  /*{ baseURL: "http://api.saintmc.yallandev.tk" }*/
  { baseURL: "https://saintmc-backend.herokuapp.com" }
);

export default api;
