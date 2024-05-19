import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="site-name">PEAR EXCHANGE</div>
      <nav className="nav">
        <a href="#">Page</a>
        <a href="#">Page</a>
        <a href="#">Page</a>
        <input type="text" placeholder="Placeholder" />
        <button>Button</button>
      </nav>
    </header>
  );
};

export default Header;