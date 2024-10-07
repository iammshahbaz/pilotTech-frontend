// src/components/UnsubscribeStock.jsx
import React, { useState } from 'react';
import { unsubscribeFromStock } from '../api';

const UnsubscribeStock = ({ token }) => {
  const [symbol, setSymbol] = useState('');

  const handleUnsubscribe = async () => {
    try {
      await unsubscribeFromStock(symbol, token);
      alert(`Unsubscribed from ${symbol}`);
    } catch (error) {
      alert(error.response.data.message || 'Error unsubscribing from stock');
    }
  };

  return (
    <div>
      <h3>Unsubscribe from a Stock</h3>
      <input
        type="text"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        placeholder="Stock Symbol"
      />
      <button onClick={handleUnsubscribe}>Unsubscribe</button>
    </div>
  );
};

export default UnsubscribeStock;
