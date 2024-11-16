import React, { useState } from 'react';
import SideMenu from '../components/SideMenu';
import TopBar from '../components/TopBar';

const InStock: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('School Supplies');
  const [tableData, setTableData] = useState([
    { id: '#7676', product: 'Inverter', category: 'cat1', channel: 'Store name', instruction: 'Stock adjustment', items: '80/100', status: 'Completed' },
    { id: '#7676', product: 'Battery', category: 'cat1', channel: 'Store name', instruction: 'Stock adjustment', items: '80/100', status: 'Pending' },
    { id: '#7676', product: 'Generator', category: 'cat1', channel: 'Store name', instruction: 'Stock adjustment', items: '80/100', status: 'Completed' },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [calendarDate, setCalendarDate] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleStatusChange = (index: number, newStatus: string) => {
    const updatedData = [...tableData];
    updatedData[index].status = newStatus;
    setTableData(updatedData);
  };

  const handleAddNewStock = () => {
    setShowModal(true);
  };

  const handleCalendarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCalendarDate(e.target.value);
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
        <div style={{ flex: 1, padding: '20px' }}>
          {/* Tabs */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
            {['School Supplies', 'Equipment', 'Others'].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                style={{
                  padding: '10px 20px',
                  background: activeTab === tab ? '#004e92' : '#f1f1f1',
                  color: activeTab === tab ? '#fff' : '#333',
                  border: 'none',
                  borderRadius: '20px',
                  fontWeight: activeTab === tab ? 'bold' : 'normal',
                  cursor: 'pointer',
                  transition: 'background 0.3s ease',
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Title and Controls */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '20px',
            }}
          >
            <h1 style={{ fontSize: '1.5rem', color: '#004e92' }}>In Stock</h1>
            <button
              onClick={handleAddNewStock}
              style={{
                padding: '10px 20px',
                background: '#007BFF',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              + New Stock
            </button>
          </div>

          {/* Search and Filters */}
          <div
            style={{
              display: 'flex',
              gap: '10px',
              alignItems: 'center',
              marginBottom: '20px',
            }}
          >
            <input
              type="text"
              placeholder="Quick search"
              style={{
                flex: 1,
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
              }}
            />
            <input
              type="date"
              value={calendarDate}
              onChange={handleCalendarChange}
              style={{
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            />
            <select
              style={{
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              <option value="">Status</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
            </select>
          </div>

          {/* Table */}
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              background: '#fff',
              borderRadius: '5px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
            }}
          >
            <thead>
              <tr>
                {['', 'Order ID', 'Product', 'Category', 'Sales channel', 'Instruction', 'Items', 'Status'].map((header, index) => (
                  <th
                    key={index}
                    style={{
                      padding: '10px',
                      textAlign: 'left',
                      background: '#f1f1f1',
                      color: '#333',
                      fontWeight: 'bold',
                      borderBottom: '1px solid #ccc',
                    }}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
                    <input type="checkbox" />
                  </td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #ccc', color: '#555' }}>
                    {row.id}
                  </td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #ccc', color: '#555' }}>
                    {row.product}
                  </td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #ccc', color: '#555' }}>
                    {row.category}
                  </td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #ccc', color: '#555' }}>
                    {row.channel}
                  </td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #ccc', color: '#555' }}>
                    {row.instruction}
                  </td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #ccc', color: '#555' }}>
                    {row.items}
                  </td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
                    <select
                      value={row.status}
                      onChange={(e) => handleStatusChange(index, e.target.value)}
                      style={{
                        padding: '5px',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                        background: row.status === 'Completed' ? '#d4edda' : '#fff3cd',
                        color: row.status === 'Completed' ? '#28a745' : '#856404',
                      }}
                    >
                      <option value="Completed">Completed</option>
                      <option value="Pending">Pending</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add New Stock Modal */}
      {showModal && (
  <div
    style={{
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: '1000',
    }}
  >
    <div
      style={{
        background: '#fff',
        padding: '20px',
        borderRadius: '10px',
        width: '400px',
        textAlign: 'center',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h2
        style={{
          marginBottom: '20px',
          color: '#004e92',
          fontSize: '1.5rem',
        }}
      >
        Add New Stock
      </h2>
      <form>
        <input
          name="id"
          placeholder="Order ID"
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        />
        <input
          name="product"
          placeholder="Product Name"
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        />
        <input
          name="category"
          placeholder="Category"
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        />
        <input
          name="quantity"
          placeholder="Quantity"
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        />
        <input
          name="channel"
          placeholder="Sales Channel"
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        />
        <input
          name="instruction"
          placeholder="Instruction"
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        />
      </form>
      <div
        style={{
          display: 'flex',
          gap: '10px',
          justifyContent: 'center',
          marginTop: '20px',
        }}
      >
        <button
          onClick={() => setShowModal(false)}
          style={{
            padding: '10px 20px',
            background: '#28a745',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Save
        </button>
        <button
          onClick={() => setShowModal(false)}
          style={{
            padding: '10px 20px',
            background: '#dc3545',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default InStock;
