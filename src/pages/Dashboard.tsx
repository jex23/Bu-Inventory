import React, { useState } from 'react';
import SideMenu from '../components/SideMenu';
import TopBar from '../components/TopBar';

const Dashboard: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

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
        background: '#f9f9f9',
      }}
    >
      <SideMenu isMenuOpen={isMenuOpen} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <TopBar toggleMenu={toggleMenu} />
        <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
          {/* Summary Cards */}
          <div
            style={{
              display: 'flex',
              gap: '20px',
              marginBottom: '20px',
            }}
          >
            {[
              { label: 'In-stock', value: 150, icon: '📊' },
              { label: 'Return items', value: 50, icon: '🔄' },
              { label: 'Purchase', value: 150, icon: '🛒' },
              { label: 'Unusable', value: 100, icon: '🗑️' },
            ].map((card, index) => (
              <div
                key={index}
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '20px',
                  borderRadius: '12px',
                  background: '#fff',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                }}
              >
                <div style={{ fontSize: '1.5rem', color: '#333' }}>{card.icon}</div>
                <div>
                  <h3 style={{ margin: '0', fontSize: '1rem', color: '#555' }}>{card.label}</h3>
                  <p
                    style={{
                      margin: '5px 0 0',
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      color: '#004e92',
                    }}
                  >
                    {card.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Charts Section */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '2fr 1fr',
              gap: '20px',
              marginBottom: '20px',
            }}
          >
            {/* Line Graph */}
            <div
              style={{
                background: '#fff',
                borderRadius: '12px',
                padding: '20px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              }}
            >
              <h3 style={{ margin: '0 0 20px', fontSize: '1.2rem', color: '#333' }}>
                Forecast Demand
              </h3>
              {/* Fake Line Graph */}
              <svg width="100%" height="200" viewBox="0 0 400 200">
                <polyline
                  fill="none"
                  stroke="#004e92"
                  strokeWidth="3"
                  points="10,150 50,100 90,120 130,80 170,110 210,60 250,100 290,40 330,90"
                />
                <line x1="10" y1="150" x2="400" y2="150" stroke="#ddd" strokeWidth="1" />
                <line x1="10" y1="50" x2="400" y2="50" stroke="#ddd" strokeWidth="1" />
              </svg>
            </div>

            {/* Pie Chart */}
            <div
              style={{
                background: '#fff',
                borderRadius: '12px',
                padding: '20px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              }}
            >
              <h3 style={{ margin: '0 0 20px', fontSize: '1.2rem', color: '#333' }}>
                Top Utilizing Item
              </h3>
              {/* Fake Pie Chart */}
              <svg width="100%" height="200" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="100" fill="#004e92" />
                <path
                  d="M100,100 L100,0 A100,100 0 0,1 200,100 Z"
                  fill="#ffeb3b"
                />
                <path
                  d="M100,100 L200,100 A100,100 0 0,1 100,200 Z"
                  fill="#2196f3"
                />
              </svg>
            </div>
          </div>

          {/* Tables Section */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '20px',
            }}
          >
            {/* Table 1 */}
            <div
              style={{
                background: '#fff',
                borderRadius: '12px',
                padding: '20px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              }}
            >
              <h3 style={{ margin: '0 0 20px', fontSize: '1.2rem', color: '#333' }}>
                Forecast Demand
              </h3>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr>
                    <th style={{ borderBottom: '2px solid #f1f1f1', padding: '10px', color: '#333' }}>
                      Item Name
                    </th>
                    <th style={{ borderBottom: '2px solid #f1f1f1', padding: '10px', color: '#333' }}>
                      Quantity
                    </th>
                    <th style={{ borderBottom: '2px solid #f1f1f1', padding: '10px', color: '#333' }}>
                      Alert Amt.
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'Item A', quantity: 20, alert: 'Low' },
                    { name: 'Item B', quantity: 50, alert: 'Medium' },
                    { name: 'Item C', quantity: 10, alert: 'High' },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td style={{ padding: '10px', borderBottom: '1px solid #f1f1f1', color: '#555' }}>
                        {row.name}
                      </td>
                      <td style={{ padding: '10px', borderBottom: '1px solid #f1f1f1', color: '#555' }}>
                        {row.quantity}
                      </td>
                      <td style={{ padding: '10px', borderBottom: '1px solid #f1f1f1', color: '#555' }}>
                        {row.alert}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Table 2 */}
            <div
              style={{
                background: '#fff',
                borderRadius: '12px',
                padding: '20px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              }}
            >
              <h3 style={{ margin: '0 0 20px', fontSize: '1.2rem', color: '#333' }}>
                Anomaly Detection
              </h3>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr>
                    <th style={{ borderBottom: '2px solid #f1f1f1', padding: '10px', color: '#333' }}>
                      Order ID
                    </th>
                    <th style={{ borderBottom: '2px solid #f1f1f1', padding: '10px', color: '#333' }}>
                      Quantity
                    </th>
                    <th style={{ borderBottom: '2px solid #f1f1f1', padding: '10px', color: '#333' }}>
                      Alert Amt.
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { id: 'ORD001', quantity: 5, alert: 'Critical' },
                    { id: 'ORD002', quantity: 25, alert: 'Low' },
                    { id: 'ORD003', quantity: 15, alert: 'High' },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td style={{ padding: '10px', borderBottom: '1px solid #f1f1f1', color: '#555' }}>
                        {row.id}
                      </td>
                      <td style={{ padding: '10px', borderBottom: '1px solid #f1f1f1', color: '#555' }}>
                        {row.quantity}
                      </td>
                      <td style={{ padding: '10px', borderBottom: '1px solid #f1f1f1', color: '#555' }}>
                        {row.alert}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
