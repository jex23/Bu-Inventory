import React, { useState } from 'react';
import SideMenu from '../components/SideMenu';
import TopBar from '../components/TopBar';

const Users: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [userData, setUserData] = useState([
    { id: '1', name: 'Juan Dela Cruz', email: 'juan@gmail.com', role: 'Admin', status: 'Active' },
    { id: '2', name: 'Maria Clara', email: 'maria@gmail.com', role: 'Staff', status: 'Active' },
    { id: '3', name: 'Ramesh Chaudhary', email: 'ramesh@gmail.com', role: 'Staff', status: 'Inactive' },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [newUser, setNewUser] = useState({
    id: '',
    name: '',
    email: '',
    role: 'Staff',
    status: 'Active',
  });

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleAddNewUser = () => {
    setShowModal(true);
  };

  const handleSaveNewUser = () => {
    setUserData([...userData, { ...newUser, id: (userData.length + 1).toString() }]);
    setNewUser({ id: '', name: '', email: '', role: 'Staff', status: 'Active' });
    setShowModal(false);
  };

  const handleNewUserChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
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
          {/* Title and Controls */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '20px',
            }}
          >
            <h1 style={{ fontSize: '1.5rem', color: '#004e92' }}>Users</h1>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={handleAddNewUser}
                style={{
                  padding: '10px 20px',
                  background: '#6c63ff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                + New User
              </button>
            </div>
          </div>

          {/* Table */}
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              background: '#fff',
              borderRadius: '5px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            }}
          >
            <thead>
              <tr>
                {['ID', 'Name', 'Email', 'Role', 'Status'].map((header, index) => (
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
              {userData.map((user) => (
                <tr key={user.id}>
                  <td style={{ padding: '10px', borderBottom: '1px solid #ccc', color: '#555' }}>{user.id}</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #ccc', color: '#555' }}>{user.name}</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #ccc', color: '#555' }}>{user.email}</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #ccc', color: '#555' }}>{user.role}</td>
                  <td
                    style={{
                      padding: '10px',
                      borderBottom: '1px solid #ccc',
                      color: user.status === 'Active' ? '#28a745' : '#dc3545',
                    }}
                  >
                    {user.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add New User Modal */}
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
          }}
        >
          <div
            style={{
              background: '#fff',
              padding: '20px',
              borderRadius: '10px',
              width: '400px',
              textAlign: 'center',
            }}
          >
            <h2 style={{ marginBottom: '20px', color: '#6c63ff' }}>Add New User</h2>
            <form>
              {['name', 'email'].map((field) => (
                <input
                  key={field}
                  name={field}
                  placeholder={field.replace(/^\w/, (c) => c.toUpperCase())}
                  value={(newUser as any)[field]}
                  onChange={handleNewUserChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    marginBottom: '10px',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                  }}
                />
              ))}
              <select
                name="role"
                value={newUser.role}
                onChange={handleNewUserChange}
                style={{
                  width: '100%',
                  padding: '10px',
                  marginBottom: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                }}
              >
                <option value="Admin">Admin</option>
                <option value="Staff">Staff</option>
              </select>
              <select
                name="status"
                value={newUser.status}
                onChange={handleNewUserChange}
                style={{
                  width: '100%',
                  padding: '10px',
                  marginBottom: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                }}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </form>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
              <button
                onClick={handleSaveNewUser}
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

export default Users;
