import React from 'react';
import './Graph.css';
import StockInfo from './StockInfo';
import InfoSection from './InfoSection';
import Giraffe from "./Giraffe.tsx";
import { pSim, stonkystonk } from './graphing.tsx'

var stahnk0 = new pSim(1, 1100, 100, 0.05)
var stonkies0 = new stonkystonk()

const Graph: React.FC = () => {
  return (
    <>
      <StockInfo />
      <div className="graph">
        <h2 className="company-name">PRN INC</h2>
        <div className="graph-content" style={{ "width": "40vw" }}>
          <Giraffe pSim={stahnk0} stonkystonk={stonkies0} chicken={false} />
        </div>
      </div>
      {/* <InfoSection /> */}
    </>
  );
};

export default Graph;