import React, { useState } from 'react';
import SideMenu from '../components/SideMenu';
import TopBar from '../components/TopBar';

const Orders: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [tableData, setTableData] = useState([
    { id: '#7676', date: '06/30/2022', person: 'Juan Dela Cruz', channel: 'maxipro', destination: 'Comsci. Dept', items: '3', status: 'Completed' },
    { id: '#7677', date: '06/30/2022', person: 'Ramesh Chaudhary', channel: 'Store name', destination: 'Comsci. Dept', items: '3', status: 'Pending' },
    { id: '#7678', date: '06/30/2022', person: 'Ramesh Chaudhary', channel: 'Store name', destination: 'Comsci. Dept', items: '3', status: 'Completed' },
  ]);
  const [calendarDate, setCalendarDate] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [newOrder, setNewOrder] = useState({
    id: '',
    date: '',
    person: '',
    channel: '',
    destination: '',
    items: '',
  });

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleCalendarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCalendarDate(e.target.value);
  };

  // Handle status change
  const handleStatusChange = (index: number, newStatus: string) => {
    const updatedData = [...tableData];
    updatedData[index].status = newStatus;
    setTableData(updatedData);
  };

  const handleAddNewOrder = () => {
    setShowModal(true);
  };

  const handleNewOrderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewOrder({ ...newOrder, [e.target.name]: e.target.value });
  };

  const handleSaveNewOrder = () => {
    if (Object.values(newOrder).some((value) => value === '')) {
      alert('Please fill in all fields!');
      return;
    }
    setTableData([
      ...tableData,
      { ...newOrder, status: 'Pending' }, // Default status is Pending
    ]);
    setNewOrder({ id: '', date: '', person: '', channel: '', destination: '', items: '' });
    setShowModal(false);
  };

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw', fontFamily: 'Arial, sans-serif', background: '#f9f9f9' }}>
      <SideMenu isMenuOpen={isMenuOpen} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <TopBar toggleMenu={toggleMenu} />
        <div style={{ flex: 1, padding: '20px' }}>
          {/* Title and Controls */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h1 style={{ fontSize: '1.5rem', color: '#004e92' }}>Orders</h1>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button style={{ padding: '10px 20px', background: 'transparent', color: '#6c63ff', border: '2px solid #6c63ff', borderRadius: '5px', cursor: 'pointer' }}>
                Export to Excel
              </button>
              <button style={{ padding: '10px 20px', background: 'transparent', color: '#6c63ff', border: '2px solid #6c63ff', borderRadius: '5px', cursor: 'pointer' }}>
                Import Orders
              </button>
              <button onClick={handleAddNewOrder} style={{ padding: '10px 20px', background: '#6c63ff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                + New Order
              </button>
            </div>
          </div>

          {/* Search and Filters */}
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '20px' }}>
            <input
              type="text"
              placeholder="Search order ID"
              style={{ flex: 1, padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
            />
            <input
              type="date"
              value={calendarDate}
              onChange={handleCalendarChange}
              style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px', cursor: 'pointer' }}
            />
            <select style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px', cursor: 'pointer' }}>
              <option value="">Sales</option>
              <option value="maxipro">Maxipro</option>
              <option value="store-name">Store Name</option>
            </select>
            <select style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px', cursor: 'pointer' }}>
              <option value="">Status</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
            </select>
          </div>

          {/* Table */}
          <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: '5px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
            <thead>
              <tr>
                {['Order ID', 'Date', 'Person Requested', 'Sales Channel', 'Destination', 'Items', 'Status'].map((header, index) => (
                  <th key={index} style={{ padding: '10px', textAlign: 'left', background: '#f1f1f1', color: '#333', fontWeight: 'bold', borderBottom: '1px solid #ccc' }}>
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td style={{ padding: '10px', borderBottom: '1px solid #ccc', color: '#555' }}>{row.id}</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #ccc', color: '#555' }}>{row.date}</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #ccc', color: '#555' }}>{row.person}</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #ccc', color: '#555' }}>{row.channel}</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #ccc', color: '#555' }}>{row.destination}</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #ccc', color: '#555' }}>{row.items}</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
                    <select
                      value={row.status}
                      onChange={(e) => handleStatusChange(index, e.target.value)}
                      style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', cursor: 'pointer' }}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Completed">Completed</option>
                      <option value="Shipped">Shipped</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add New Order Modal */}
      {showModal && (
        <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ background: '#fff', padding: '20px', borderRadius: '10px', width: '400px', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '20px', color: '#6c63ff' }}>Add New Order</h2>
            <input
              type="text"
              name="id"
              value={newOrder.id}
              onChange={handleNewOrderChange}
              placeholder="Order ID"
              style={{ padding: '10px', marginBottom: '10px', width: '100%', border: '1px solid #ccc', borderRadius: '5px' }}
            />
            <input
              type="text"
              name="person"
              value={newOrder.person}
              onChange={handleNewOrderChange}
              placeholder="Person Requested"
              style={{ padding: '10px', marginBottom: '10px', width: '100%', border: '1px solid #ccc', borderRadius: '5px' }}
            />
            <input
              type="text"
              name="channel"
              value={newOrder.channel}
              onChange={handleNewOrderChange}
              placeholder="Sales Channel"
              style={{ padding: '10px', marginBottom: '10px', width: '100%', border: '1px solid #ccc', borderRadius: '5px' }}
            />
            <input
              type="text"
              name="destination"
              value={newOrder.destination}
              onChange={handleNewOrderChange}
              placeholder="Destination"
              style={{ padding: '10px', marginBottom: '10px', width: '100%', border: '1px solid #ccc', borderRadius: '5px' }}
            />
            <input
              type="text"
              name="items"
              value={newOrder.items}
              onChange={handleNewOrderChange}
              placeholder="Items"
              style={{ padding: '10px', marginBottom: '20px', width: '100%', border: '1px solid #ccc', borderRadius: '5px' }}
            />
            <div>
              <button onClick={handleSaveNewOrder} style={{ padding: '10px 20px', background: '#6c63ff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                Save Order
              </button>
              <button onClick={() => setShowModal(false)} style={{ padding: '10px 20px', background: '#dc3545', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
