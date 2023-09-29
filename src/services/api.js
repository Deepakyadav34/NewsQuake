import axios from 'axios';

const API_KEY = '9e10bda476cc494e945f84b993abb047';

const api = axios.create({
    baseURL: 'https://newsapi.org/v2',
    params: {
        apiKey: API_KEY,
    },
});

export default api;