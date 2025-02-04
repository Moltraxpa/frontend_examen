import axios from 'axios';

const api = axios.create({
    baseURL: 
      //'http://localhost:3030/api',
     'https://backend-examen-44h8.vercel.app/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default api;