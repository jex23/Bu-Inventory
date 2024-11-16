import React, { useState } from 'react';
import SideMenu from '../components/SideMenu';
import TopBar from '../components/TopBar';

const Products: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [tableData, setTableData] = useState([
    { id: '#1234', name: 'Laptop', category: 'Electronics', price: 1200, stock: '50', status: 'Available' },
    { id: '#5678', name: 'Smartphone', category: 'Electronics', price: 800, stock: '30', status: 'Available' },
    { id: '#9101', name: 'Chair', category: 'Furniture', price: 150, stock: '100', status: 'Out of Stock' },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    id: '',
    name: '',
    category: '',
    price: '',
    stock: '',
    status: 'Available',
  });

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleAddNewProduct = () => {
    setShowModal(true);
  };

  const handleSaveNewProduct = () => {
    const updatedProduct = { ...newProduct, price: parseFloat(newProduct.price) }; // Ensure price is a number
    setTableData([...tableData, updatedProduct]);
    setNewProduct({ id: '', name: '', category: '', price: '', stock: '', status: 'Available' });
    setShowModal(false);
  };

  const handleNewProductChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const formatPrice = (price: number): string => `₱${price.toLocaleString('en-PH', { minimumFractionDigits: 2 })}`;

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
            <h1 style={{ fontSize: '1.5rem', color: '#004e92' }}>Products</h1>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                style={{
                  padding: '10px 20px',
                  background: 'transparent',
                  color: '#6c63ff',
                  border: '2px solid #6c63ff',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                Export to Excel
              </button>
              <button
                style={{
                  padding: '10px 20px',
                  background: 'transparent',
                  color: '#6c63ff',
                  border: '2px solid #6c63ff',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                Import Products
              </button>
              <button
                onClick={handleAddNewProduct}
                style={{
                  padding: '10px 20px',
                  background: '#6c63ff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                + New Product
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
                {['Product ID', 'Name', 'Category', 'Price (₱)', 'Stock', 'Status'].map((header, index) => (
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
                  <td style={{ padding: '10px', borderBottom: '1px solid #ccc', color: '#555' }}>
                    {row.id}
                  </td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #ccc', color: '#555' }}>
                    {row.name}
                  </td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #ccc', color: '#555' }}>
                    {row.category}
                  </td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #ccc', color: '#555' }}>
                    {formatPrice(row.price)}
                  </td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #ccc', color: '#555' }}>
                    {row.stock}
                  </td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #ccc', color: row.status === 'Available' ? '#28a745' : '#dc3545' }}>
                    {row.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add New Product Modal */}
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
            <h2 style={{ marginBottom: '20px', color: '#6c63ff' }}>Add New Product</h2>
            <form>
              {['id', 'name', 'category', 'price', 'stock'].map((field) => (
                <input
                  key={field}
                  name={field}
                  placeholder={field.replace(/^\w/, (c) => c.toUpperCase())}
                  value={(newProduct as any)[field]}
                  onChange={handleNewProductChange}
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
                name="status"
                value={newProduct.status}
                onChange={handleNewProductChange}
                style={{
                  width: '100%',
                  padding: '10px',
                  marginBottom: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                }}
              >
                <option value="Available">Available</option>
                <option value="Out of Stock">Out of Stock</option>
              </select>
            </form>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
              <button
                onClick={handleSaveNewProduct}
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

export default Products;
