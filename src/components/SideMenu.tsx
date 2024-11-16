import React from 'react';
import { NavLink } from 'react-router-dom';

interface SideMenuProps {
  isMenuOpen: boolean;
}

const SideMenu: React.FC<SideMenuProps> = ({ isMenuOpen }) => {
  return (
    <div
      style={{
        width: isMenuOpen ? '250px' : '80px',
        height: '100vh',
        background: 'linear-gradient(to bottom, #0f2027, #203a43, #2c5364)', // Dark gradient for side menu
        boxShadow: '2px 0 10px rgba(0, 0, 0, 0.3)', // Subtle shadow for depth
        display: 'flex',
        flexDirection: 'column',
        padding: isMenuOpen ? '20px' : '10px',
        transition: 'width 0.3s ease',
        color: '#fff',
      }}
    >
      {/* Logo Section */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        <img
          src="https://i.postimg.cc/HngN86RG/BU-png.png"
          alt="Bicol University"
          style={{
            maxWidth: isMenuOpen ? '80%' : '50%',
            height: 'auto',
            transition: 'max-width 0.3s ease',
          }}
        />
      </div>

      {/* Title */}
      {isMenuOpen && (
        <h2
          style={{
            fontSize: '1.5rem',
            marginBottom: '20px',
            textAlign: 'left',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          Admin Panel
        </h2>
      )}

      {/* Navigation Links */}
      <nav>
        <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
          {[
            { to: '/dashboard', label: 'Dashboard', icon: '📊' },
            { to: '/in-stock', label: 'In Stock', icon: '📦' },
            { to: '/products', label: 'Products', icon: '🛒' },
            { to: '/orders', label: 'Orders', icon: '📋' },
            { to: '/users', label: 'Users', icon: '👤' },
          ].map((item) => (
            <li key={item.to} style={{ marginBottom: '15px' }}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  isActive ? 'active-link' : 'inactive-link'
                }
                style={{
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: isMenuOpen ? 'flex-start' : 'center',
                  padding: '10px',
                  height: '50px', // Standard card height
                  borderRadius: '8px',
                  background: isMenuOpen
                    ? 'linear-gradient(to right, #2a5298, #1e3c72)' // Card gradient
                    : 'transparent',
                  color: '#fff',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease',
                  boxShadow: isMenuOpen ? '0 2px 5px rgba(0, 0, 0, 0.2)' : 'none',
                }}
                onMouseEnter={(e) => {
                  const target = e.currentTarget;
                  target.style.background = 'linear-gradient(to right, #4e73df, #1e3c72)';
                  target.style.transform = 'scale(1.05)';
                  target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget;
                  target.style.background = 'linear-gradient(to right, #2a5298, #1e3c72)';
                  target.style.transform = 'scale(1)';
                  target.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
                }}
              >
                <span
                  style={{
                    marginRight: isMenuOpen ? '10px' : '0',
                    fontSize: '1.5rem',
                  }}
                >
                  {item.icon}
                </span>
                {isMenuOpen && (
                  <span
                    style={{
                      fontSize: '1rem',
                      fontWeight: 'bold',
                      whiteSpace: 'nowrap',
                      fontFamily: 'Arial, sans-serif',
                    }}
                  >
                    {item.label}
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideMenu;
