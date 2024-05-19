import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Graph from './Graph';
import './App.css';
import InfoSection from './InfoSection';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Sidebar />
        <div className="content">
          <Graph />
          <InfoSection />
        </div>
      </div>
    </div>
  );
}

export default App;