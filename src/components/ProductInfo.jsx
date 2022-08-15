import React from 'react';
import productImg from '../assets/productImage.png';

const ProductInfo = (props) => {
  const { handleSetBuy } = props;

  return (
    <div className="row">
      <div className="column">
        <img src={productImg} alt="productImage" className="productImg" />
      </div>
      <div className="column">
        <div className="infoText">
          <h2>Sample service - $10</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus
            sem ac eros blandit, non varius purus imperdiet. Phasellus et enim
            ac lorem suscipit ornare. Proin dapibus arcu eu scelerisque
            vehicula. Nunc ac ex dictum odio dapibus fringilla. Duis venenatis
            dui sit amet aliquet tempor.
          </p>
        </div>
        <div className="buyBtn">
          <button onClick={handleSetBuy}>Buy now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
