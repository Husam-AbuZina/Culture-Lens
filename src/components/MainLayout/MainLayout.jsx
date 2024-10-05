import React from 'react';
import './MainLayout.css'; // External CSS for styling the layout

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <header className="main-header">
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        {children}
      </main>

      <footer className="main-footer">
        <p>© 2024 Your Website Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainLayout;
