// src/components/StockList.jsx
import React, { useEffect, useState } from 'react';
import { getStocks } from '../api';

const StockList = () => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const fetchStocks = async () => {
      const response = await getStocks();
      setStocks(response.data);
    };
    fetchStocks();
  }, []);

  return (
    <div>
      <h2>All Stocks</h2>
      <ul>
        {stocks.map((stock) => (
          <li key={stock.symbol}>
            {stock.company} ({stock.symbol}) - ${stock.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StockList;
