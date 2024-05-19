import React from 'react';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  const data = [
    { source: 'website.net', sessions: 4321, change: '+84%' },
    { source: 'website.net', sessions: 4033, change: '-8%' },
    { source: 'website.net', sessions: 3128, change: '+2%' },
    { source: 'website.net', sessions: 2104, change: '+33%' },
    { source: 'website.net', sessions: 2003, change: '+30%' },
    { source: 'website.net', sessions: 1894, change: '+15%' },
    { source: 'website.net', sessions: 405, change: '-12%' },
  ];

  return (
    <aside className="sidebar">
      <div className="title">TITLE</div>
      <div className="table">
        <div className="header">
          <div>Source</div>
          <div>Sessions</div>
          <div>Change</div>
        </div>
        {data.map((row, index) => (
          <div className="row" key={index}>
            <div>{row.source}</div>
            <div>{row.sessions}</div>
            <div>{row.change}</div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;