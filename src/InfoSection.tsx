import React from 'react';
import './InfoSection.css';

const InfoSection: React.FC = () => {
  const info = [
    { label: 'Open', value: '50000', change: '+33%' },
    { label: 'High', value: '50000', change: '+33%' },
    { label: 'Low', value: '50000', change: '+33%' },
    { label: 'Vol', value: '50000', change: '+33%' },
    { label: 'Mkt Cap', value: '50000', change: '+33%' },
    { label: 'Avg Vol', value: '50000', change: '+33%' },
  ];

  return (
    <div className="info-section">
      {info.map((item, index) => (
        <div className="info-item" key={index}>
          <div>{item.label}</div>
          <div>{item.value}</div>
          <div>{item.change}</div>
        </div>
      ))}
      <div className="more-data">See more data &#62;&#62;&#62;</div>
    </div>
  );
};

export default InfoSection;