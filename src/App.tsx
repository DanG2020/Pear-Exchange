import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
/*import Sidebar from './Sidebar';
import Graph from './Graph'; */
import InfoSection from './InfoSection';
import MainPage from './MainPage';
import WhyPear from './WhyPear';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <div className="main">
        <div className="content">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/info" element={<InfoSection />} />
          </Routes>
        </div>
        <Routes>
          <Route path="/why-pear" element={<WhyPear />} />
        </Routes>
      </div>
    </Router >
  );
};

export default App;