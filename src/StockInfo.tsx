import React from 'react';
import './StockInfo.css';

const StockInfo: React.FC = () => {
  return (
    <div className="stock-info">
      <div className="title">PRN INC</div>
      <div className="price">
        50000 <span className="graph-change">+33%</span>
      </div>
      <div className="buttons">
        <button className="buy">Buy</button>
        <button className="sell">Sell</button>
      </div>
    </div>
  );
};

export default StockInfo;