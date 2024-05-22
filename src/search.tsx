import React from 'react';
import './App.css';
import Sidebar from './Sidebar'; // Adjust the import path as needed
import Graph from './Graph'; // Adjust the import path as needed

const App = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">Shop</div>
        <nav className="nav">
          <a href="#exchange">Pear Exchange</a>
          <a href="#why">Why Pear?</a>
          <a href="#page">Page</a>
          <a href="#page">Page</a>
          <input type="text" placeholder="Placeholder" />
          <button className="login-btn">Login</button>
        </nav>
      </header>
      
      <div className="content">
        <Sidebar />
        
        <main className="main-content">
          <h2>Results for "X":</h2>
          <div className="results">
            <ul>
              <li>
                <span>1. orange AI</span>
                <span className="positive">+3</span>
                <span>4321</span>
                <span className="positive">+84%</span>
                <Graph /> {/* Replace with your Graph component */}
              </li>
              <li>
                <span>2. Steves model</span>
                <span className="negative">-1</span>
                <span>4033</span>
                <span className="negative">-8%</span>
                <Graph /> {/* Replace with your Graph component */}
              </li>
              <li>
                <span>3. the bob net</span>
                <span className="positive">+2</span>
                <span>3128</span>
                <span className="positive">+2%</span>
                <Graph /> {/* Replace with your Graph component */}
              </li>
              <li>
                <span>4. elon musk AI</span>
                <span className="positive">+1</span>
                <span>2003</span>
                <span className="positive">+30%</span>
                <Graph /> {/* Replace with your Graph component */}
              </li>
              <li>
                <span>5. hawks hacking AI</span>
                <span className="negative">-2</span>
                <span>2003</span>
                <span className="positive">+30%</span>
                <Graph /> {/* Replace with your Graph component */}
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;