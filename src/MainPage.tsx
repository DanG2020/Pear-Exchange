import React from 'react';
import './MainPage.css';

const MainPage: React.FC = () => {
  return (
    <div className="main-page">
      <header className="main-header">
        <h1>Welcome to My Web App</h1>
      </header>
      <main className="main-content">
        <p>This is the main page of your web app.</p>
      </main>
    </div>
  );
};

export default MainPage;