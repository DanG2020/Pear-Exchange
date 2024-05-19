import React from 'react';
import './Graph.css';
import StockInfo from './StockInfo';

const Graph: React.FC = () => {
  return (
    <div>
      <StockInfo />
      <div className="graph">
        <h2>PRN INC</h2>
        <div className="graph-content">
          <div className="graph-placeholder">
            <img src="/path/to/static-image.png" alt="Graph Placeholder" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graph;