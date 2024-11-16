import React, { useState } from 'react';
import SideMenu from '../components/SideMenu';
import TopBar from '../components/TopBar';

const Home: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  // Function to toggle the side menu
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        width: '100vw',
        fontFamily: 'Arial, sans-serif',
        background: '#f1f1f1',
      }}
    >
      {/* Side Menu */}
      <SideMenu isMenuOpen={isMenuOpen} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Top Bar with Hamburger Menu */}
        <TopBar toggleMenu={toggleMenu} />
        {/* Main Content */}
        <div
          style={{
            flex: 1,
            padding: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h1>Welcome to the Admin Dashboard</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
