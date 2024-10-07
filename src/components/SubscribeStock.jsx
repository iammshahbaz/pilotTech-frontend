// src/components/SubscribeStock.jsx
import React, { useState } from 'react';
import { subscribeToStock } from '../api';

const SubscribeStock = ({ token }) => {
  const [symbol, setSymbol] = useState('');

  const handleSubscribe = async () => {
    try {
      await subscribeToStock(symbol, token);
      alert(`Subscribed to ${symbol}`);
    } catch (error) {
      alert(error.response.data.message || 'Error subscribing to stock');
    }
  };

  return (
    <div>
      <h3>Subscribe to a Stock</h3>
      <input
        type="text"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        placeholder="Stock Symbol"
      />
      <button onClick={handleSubscribe}>Subscribe</button>
    </div>
  );
};

export default SubscribeStock;
