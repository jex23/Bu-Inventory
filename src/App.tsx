import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import InStock from './pages/InStock';
import Products from './pages/Products';
import Orders from './pages/Orders';
import Users from './pages/Users';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Main Pages */}
        <Route
          path="/dashboard"
          element={<ProtectedRoute component={<Dashboard />} />}
        />
        <Route
          path="/in-stock"
          element={<ProtectedRoute component={<InStock />} />}
        />
        <Route
          path="/products"
          element={<ProtectedRoute component={<Products />} />}
        />
        <Route
          path="/orders"
          element={<ProtectedRoute component={<Orders />} />}
        />
        <Route
          path="/users"
          element={<ProtectedRoute component={<Users />} />}
        />

        {/* Fallback for undefined routes */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Router>
  );
};

// ProtectedRoute wrapper for authenticated pages
const ProtectedRoute: React.FC<{ component: JSX.Element }> = ({ component }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('User logged out');
    navigate('/login'); // Navigate back to login page
  };

  return (
    <div>
      {React.cloneElement(component, { onLogout: handleLogout }) /* Pass logout prop */}
    </div>
  );
};

export default App;
