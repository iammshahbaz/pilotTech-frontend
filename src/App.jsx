// src/App.jsx
import React, { useState } from 'react';
import StockList from './components/StockList';
import SubscriptionList from './components/SubscriptionList';
import SubscribeStock from './components/SubscribeStock';
import UnsubscribeStock from './components/UnsubscribeStock';

const App = () => {
  const [token, setToken] = useState(''); 

  return (
    <div>
      <h1>Stock Subscription App</h1>

     
      <StockList />

      
      {token && <SubscriptionList token={token} />}

      
      {token && <SubscribeStock token={token} />}

     
      {token && <UnsubscribeStock token={token} />}
    </div>
  );
};

export default App;
