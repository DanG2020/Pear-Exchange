import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="site-name">PEAR EXCHANGE</div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/why-pear">Why Pear?</Link>
        <Link to="/info">Info Section</Link>
        <input type="text" placeholder="Search" />
        <button>Button</button>
      </nav>
    </header>
  );
};

export default Header;