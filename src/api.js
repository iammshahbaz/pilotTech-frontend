// src/api.js
import axios from 'axios';

const API_URL = 'https://pilottech-backened.onrender.com'; 

export const getStocks = async () => {
  return await axios.get(`${API_URL}/stocks`);
};

export const subscribeToStock = async (symbol, token) => {
  return await axios.post(`${API_URL}/stocks/subscribe`, { symbol }, {
    headers: { Authorization: `Bearer ${token}` }
  });
};

export const unsubscribeFromStock = async (symbol, token) => {
  return await axios.post(`${API_URL}/stocks/unsubscribe`, { symbol }, {
    headers: { Authorization: `Bearer ${token}` }
  });
};

export const getUserSubscriptions = async (token) => {
  return await axios.get(`${API_URL}/stocks/subscriptions`, {
    headers: { Authorization: `Bearer ${token}` }
  });
};
