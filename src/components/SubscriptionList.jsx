// src/components/SubscriptionList.jsx
import React, { useEffect, useState } from 'react';
import { getUserSubscriptions } from '../api';

const SubscriptionList = ({ token }) => {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    const fetchSubscriptions = async () => {
      const response = await getUserSubscriptions(token);
      setSubscriptions(response.data);
    };
    fetchSubscriptions();
  }, [token]);

  return (
    <div>
      <h2>Your Subscribed Stocks</h2>
      <ul>
        {subscriptions.map((symbol) => (
          <li key={symbol}>{symbol}</li>
        ))}
      </ul>
    </div>
  );
};

export default SubscriptionList;
