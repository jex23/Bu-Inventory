import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

interface TopBarProps {
  toggleMenu: () => void; // Function to toggle the side menu
  userName?: string; // Optional user name
  onLogout?: () => void; // Logout action (optional)
}

const TopBar: React.FC<TopBarProps> = ({ toggleMenu, userName = 'Admin', onLogout }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleAvatarClick = () => {
    setIsDropdownOpen((prev) => !prev); // Toggle dropdown visibility
  };

  const handleLogout = () => {
    if (onLogout) {
      onLogout(); // Call the passed in logout function if provided
    }
    navigate('/login'); // Navigate to the login page after logout
  };

  return (
    <div
      style={{
        height: '60px',
        background: '#004e92',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        position: 'relative',
      }}
    >
      {/* Hamburger Menu */}
      <div
        onClick={toggleMenu}
        style={{
          cursor: 'pointer',
          fontSize: '1.5rem',
        }}
      >
        ☰
      </div>

      {/* Dashboard Title */}
      <h1
        style={{
          fontSize: '1.5rem',
          margin: '0',
          textAlign: 'center',
          flex: '1',
        }}
      >
        Admin Dashboard
      </h1>

      {/* User Avatar, Name, and Dropdown */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          cursor: 'pointer',
        }}
        onClick={handleAvatarClick}
      >
        {/* User Avatar */}
        <div
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: '10px',
            color: '#004e92',
            fontWeight: 'bold',
            fontSize: '1rem',
          }}
        >
          {userName[0]?.toUpperCase()}
        </div>

        {/* Username */}
        <span
          style={{
            fontSize: '1rem',
            fontWeight: 'bold',
          }}
        >
          {userName}
        </span>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div
            style={{
              position: 'absolute',
              top: '60px',
              right: '0',
              background: '#fff',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
              borderRadius: '5px',
              overflow: 'hidden',
              zIndex: 10,
            }}
          >
            <button
              onClick={handleLogout} // Trigger the new handleLogout function
              style={{
                width: '100%',
                padding: '10px 20px',
                background: 'transparent',
                border: 'none',
                textAlign: 'left',
                cursor: 'pointer',
                fontSize: '0.9rem',
                color: '#333',
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#f1f1f1')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopBar;
