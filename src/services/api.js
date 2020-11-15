import axios from 'axios';

const api = axios.create( { baseURL: "http://api.clouthnetwork.spectrum-mc.net" } );

export default api;