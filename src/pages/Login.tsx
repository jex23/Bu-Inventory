import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const staticEmail = 'admin@gmail.com';
    const staticPassword = 'admin123';

    if (email === staticEmail && password === staticPassword) {
      if (rememberMe) {
        Cookies.set('user', JSON.stringify({ email }), { expires: 1 }); // Set cookie for 24 hours
      } else {
        Cookies.remove('user'); // Remove cookie if not remembered
      }
      alert('Logged in successfully!');
      navigate('/home');
    } else {
      setError('Invalid email or password');
    }
  };

  const handleRememberMeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setRememberMe(isChecked);

    if (isChecked) {
      toast.success('You will be remembered for 24 hours.', {
        position: 'bottom-right',
      });
    } else {
      toast.info('Remember me disabled.', {
        position: 'bottom-right',
      });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        fontFamily: 'Arial, sans-serif',
        background: 'linear-gradient(to bottom right, #004e92, #000428)', // Blue gradient
        color: '#fff',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <ToastContainer />
      <div style={{ width: '100%' }}>
        <h1
          style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '30px',
            color: '#fff',
          }}
        >
          Bicol University Inventory Management System
        </h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              width: '90%',
              maxWidth: '1200px',
              height: '80%',
              background: '#fff',
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
              borderRadius: '12px',
            }}
          >
            {/* Left Side - Login Form */}
            <div
              style={{
                flex: 1,
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                color: '#333',
              }}
            >
              <h2 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>Login</h2>
              <p style={{ marginBottom: '20px', color: '#555' }}>
                See your growth and get support!
              </p>

              {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}

              <form onSubmit={handleLogin} style={{ width: '100%' }}>
                <div style={{ marginBottom: '20px' }}>
                  <label
                    style={{
                      display: 'block',
                      marginBottom: '8px',
                      color: '#333',
                      fontSize: '0.9rem',
                    }}
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email"
                    style={{
                        width: '100%',
                        padding: '10px',
                        borderRadius: '6px',
                        border: '1px solid #ccc',
                        fontSize: '1rem',
                    }}
                  />
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <label
                    style={{
                      display: 'block',
                      marginBottom: '8px',
                      color: '#333',
                      fontSize: '0.9rem',
                    }}
                  >
                    Password*
                  </label>
                  <div
                    style={{
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="Minimum 8 characters"
                      style={{
                        width: '100%',
                        padding: '10px',
                        borderRadius: '6px',
                        border: '1px solid #ccc',
                        fontSize: '1rem',
                      }}
                    />
                    <span
                      onClick={togglePasswordVisibility}
                      style={{
                        position: 'absolute',
                        right: '10px',
                        cursor: 'pointer',
                        color: '#555',
                      }}
                    >
                      {showPassword ? '👁' : '👁‍🗨'}
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '20px',
                    color: '#555',
                    fontSize: '0.9rem',
                  }}
                >
                  <label>
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={handleRememberMeChange}
                      style={{ marginRight: '5px' }}
                    />
                    Remember me
                  </label>
                  <a href="#" style={{ color: '#007BFF', textDecoration: 'none' }}>
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  style={{
                    width: '100%',
                    background: '#1d3557',
                    color: '#fff',
                    padding: '12px',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '1rem',
                  }}
                >
                  Login
                </button>
              </form>
            </div>

            {/* Right Side - Logo */}
            <div
              style={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: '#f9f9f9',
                borderTopRightRadius: '12px',
                borderBottomRightRadius: '12px',
              }}
            >
              <img
                src="https://i.postimg.cc/HngN86RG/BU-png.png"
                alt="Bicol University"
                style={{ maxWidth: '80%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
