import React, { useState } from 'react';
import AppInfo from './AppInfo';
import SubscriptionForm from './SubscriptionForm';
import './form.css';
import ProductInfo from './ProductInfo';

const Board = () => {
  const [buyProduct, setBuyProduct] = useState(false);

  const handleSetBuy = () => {
    setBuyProduct(true);
  };

  return (
    <div className="boardbody">
      <div className="info">
        <AppInfo />
      </div>
      <div>
        {!buyProduct ? (
          <ProductInfo handleSetBuy={handleSetBuy} />
        ) : (
          <SubscriptionForm subCost="10.00" />
        )}
      </div>
    </div>
  );
};

export default Board;
