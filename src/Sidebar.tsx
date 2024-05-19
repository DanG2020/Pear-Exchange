import React from 'react';
import './Sidebar.css';
import Giraffe from "./Giraffe.tsx";
import { pSim, stonkystonk } from './graphing.tsx'

const Sidebar: React.FC = ({ customStyle }: { customStyle: any }) => {
  const data = [
    { source: 'Appels Model', sessions: 4321, change: '+84%' },
    { source: 'Velocity solutions', sessions: 4033, change: '-8%' },
    { source: 'Bobs Model', sessions: 3128, change: '+2%' },
    { source: 'Foogle', sessions: 2104, change: '+33%' },
    { source: 'Weta II', sessions: 2003, change: '+30%' },
    { source: 'Secuity seven', sessions: 1894, change: '+15%' },
    { source: 'Img.Gen', sessions: 405, change: '-12%' },
  ];

  const portfolioItems = Array(6).fill({
    source: 'PRN CRP',
    value: '50000',
    change: '+33%',
    image: '/path/to/image.png', // Update with actual image path
  });

  return (
    <aside className="sidebar" style={customStyle}>
      <div className="title">Your watch list:</div>
      <div className="table">
        <div className="headar">
          <div>Company</div>
          <div>Price</div>
          <div>Change</div>
        </div>
        {data.map((row, index) => (
          <div className="row" key={index}>
            <div className="comany" >{row.source}</div>
            <div className="prix">{row.sessions}</div>
            <div className={`change ${parseInt(row.change) > 0 ? 'positive' : 'negative'}`}>
              {row.change}
            </div>
          </div>
        ))}
      </div>

      <div className="title">Your portfolio:</div>
      <div className="portfolio">
        {portfolioItems.map((item, index) => (
          <div className="portfolio-item" key={index}>
            <div className="graphHold">
              <Giraffe pSim={new pSim(Math.random() + 0.8, 698 + Math.random() * 280, 70 + 50 * Math.random(), Math.random() / 13)} stonkystonk={new stonkystonk()} chicken={true} />
            </div>
            <div>{item.source}</div>
            <div>{item.value}</div>
            <div className={`change ${parseInt(item.change) > 0 ? 'positive' : 'negative'}`}>
              {item.change}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;