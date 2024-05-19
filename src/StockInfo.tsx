import React from 'react';
import './StockInfo.css';

const StockInfo: React.FC = () => {
  return (
    <div className="stock-info">
      <div className="title">JPC</div>
      <div className="price">
        <span>50000</span>
        <span className="positive">+33%</span> {/* Add logic to dynamically change class based on value */}
      </div>
      <div className="buttons">
        <button className="buy">Buy</button>
        <button className="sell">Sell</button>
      </div>
    </div>
  );
};

export default StockInfo;