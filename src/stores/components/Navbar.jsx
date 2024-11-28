import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cartItems } = useCart();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Login Successfully!');
    setShowForm(false);
    setFormData({ email: '', password: '' });
    navigate('/');
  };

  return (
    <div className="navbar-section">
      <div className="navSection">
        <Link to="/" className="custom-link">
          <div className="title">
            <h2>E-Mart</h2>
          </div>
        </Link>

        <div className="search">
          <input type="text" placeholder="Search..." />
        </div>

        <div className="user">
          <button
            onClick={() => setShowForm(true)}
            style={{
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              padding: '10px 20px',
              cursor: 'pointer',
            }}
          >
            SignIn/SignUp
          </button>
        </div>

        <Link to="/cart">
          <div className="cart">
            Cart
            <span>{cartItems.length}</span>
          </div>
        </Link>
      </div>

      <div className="subMenu">
        <ul>
          <Link to="/mobiles" className="custom-link">
            <li>Mobiles</li>
          </Link>
          <Link to="/computers" className="custom-link">
            <li>Computers</li>
          </Link>
          <Link to="/watch" className="custom-link">
            <li>Watches</li>
          </Link>
          <Link to="/men" className="custom-link">
            <li>Mens Wear</li>
          </Link>
          <Link to="/woman" className="custom-link">
            <li>Woman Wear</li>
          </Link>
          <Link to="/furniture" className="custom-link">
            <li>Furniture</li>
          </Link>
          <Link to="/kitchen" className="custom-link">
            <li>Kitchen</li>
          </Link>
          <Link to="/fridge" className="custom-link">
            <li>Fridge</li>
          </Link>

          <Link to="/ac" className="custom-link">
            <li>AC</li>
          </Link>
        </ul>
      </div>

      {/* SignIn/SignUp Form */}
      {showForm && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            padding: '20px',
            borderRadius: '10px',
            zIndex: 1000,
          }}
        >
          <h2>SignIn/SignUp</h2>
          <form
            onSubmit={handleFormSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '15px',
              width: '300px',
            }}
          >
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '8px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                }}
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '8px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                padding: '10px',
                cursor: 'pointer',
              }}
            >
              Submit
            </button>
            <button
              onClick={() => setShowForm(false)}
              style={{
                backgroundColor: '#f44336',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                padding: '10px',
                cursor: 'pointer',
                marginTop: '10px',
              }}
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Navbar;
