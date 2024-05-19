import React from 'react';
import './InfoSection.css';
import Graph from './Graph';
import Sidebar from './Sidebar';
const InfoSection: React.FC = () => {
  const data = [
    { label: 'Open', value: '50000', change: '+33%' },
    { label: 'High', value: '50000', change: '-33%' },
    { label: 'Low', value: '50000', change: '+33%' },
    { label: 'Vol', value: '50000', change: '+33%' },
    { label: 'Mkt Cap', value: '50000', change: '-33%' },
    { label: 'Avg Vol', value: '50000', change: '+33%' },
  ];

  return (
    <>
      <div style={{ padding: "12px", height: 'auto', display: 'flex', flexDirection: 'column', gridColumnStart: 2, alignItems: 'center' }}>
        <Graph />
        <div className="info-section">
          {data.map((item, index) => (
            <div className="info-item" key={index}>
              <span className="label">{item.label}:</span>
              <div className="value">
                <span>{item.value}</span>
                <span className={`change ${parseFloat(item.change) > 0 ? 'positive' : 'negative'}`}>
                  {item.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Sidebar customStyle={{ gridColumnStart: "1", gridRowStart: "1" }} />
    </>
  );
};

export default InfoSection;