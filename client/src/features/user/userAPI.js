import axios from 'axios';

const url = axios.create({baseURL: "http://localhost:5000/user"});

export const verifyUser = (data) => url.post('/login', data);