import React, { useState } from 'react';
import { useCart } from './context/CartContext';
import Navbar from './components/Navbar';

const UserCart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    village: '',
    doorNo: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    clearCart();
    setShowForm(false);
    setFormData({ name: '', country: '', village: '', doorNo: '' });
    alert('Order placed successfully!');
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + Number(item.price),
    0
  );

  // Inline styles for buttons and form
  const buttonStyles = {
    padding: '8px 15px',
    fontSize: '1rem',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '4px',
    transition: 'all 0.3s ease',
  };

  const removeButtonStyles = {
    ...buttonStyles,
    backgroundColor: '#ff6347',
    color: 'white',
  };

  const removeButtonHoverStyles = {
    ...removeButtonStyles,
    backgroundColor: '#e04e3c',
  };

  const checkoutButtonStyles = {
    ...buttonStyles,
    backgroundColor: '#28a745',
    color: 'white',
  };

  const checkoutButtonHoverStyles = {
    ...checkoutButtonStyles,
    backgroundColor: '#218838',
  };

  const formContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    marginTop: '20px',
    textAlign: 'center',
  };

  const inputStyles = {
    padding: '8px',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '15px',
  };

  const submitButtonStyles = {
    backgroundColor: '#007bff',
    color: 'white',
    borderRadius: '4px',
    padding: '10px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  const submitButtonHoverStyles = {
    ...submitButtonStyles,
    backgroundColor: '#0056b3',
  };

  return (
    <>
      <Navbar />
      <div>
        <h2 className="y-cart">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className="empty">Your Cart is Empty</p>
        ) : showForm ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '80vh',
              flexDirection: 'column',
            }}
          >
            <h2>Address Form</h2>
            <form onSubmit={handleFormSubmit} style={formContainerStyles}>
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  style={inputStyles}
                />
              </div>
              <div>
                <label htmlFor="country">Country:</label>
                <input
                  id="country"
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                  style={inputStyles}
                />
              </div>
              <div>
                <label htmlFor="village">Village:</label>
                <input
                  id="village"
                  type="text"
                  name="village"
                  value={formData.village}
                  onChange={handleInputChange}
                  required
                  style={inputStyles}
                />
              </div>
              <div>
                <label htmlFor="doorNo">Door No:</label>
                <input
                  id="doorNo"
                  type="text"
                  name="doorNo"
                  value={formData.doorNo}
                  onChange={handleInputChange}
                  required
                  style={inputStyles}
                />
              </div>
              <button
                type="submit"
                style={submitButtonStyles}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor =
                    submitButtonHoverStyles.backgroundColor)
                }
                onMouseOut={(e) =>
                  (e.target.style.backgroundColor =
                    submitButtonStyles.backgroundColor)
                }
              >
                Submit
              </button>
            </form>
          </div>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div
                className="cart-section"
                key={item.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '20px',
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '8px',
                }}
              >
                <div className="cart-img">
                  <img
                    src={item.image}
                    alt={item.product}
                    style={{
                      width: '80px',
                      height: '80px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                    }}
                  />
                </div>
                <div
                  className="cart-details"
                  style={{ flexGrow: 1, marginLeft: '15px' }}
                >
                  <h3>{item.product}</h3>
                  <h2>${item.price}</h2>
                  <h3>{item.model}</h3>
                </div>
                <button
                  onClick={() => removeFromCart(item)}
                  style={removeButtonStyles}
                  onMouseOver={(e) =>
                    (e.target.style.backgroundColor =
                      removeButtonHoverStyles.backgroundColor)
                  }
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor =
                      removeButtonStyles.backgroundColor)
                  }
                >
                  Remove
                </button>
              </div>
            ))}
            {/* Display Total Price */}
            <div>
              <h3>Total Price: ${totalPrice}</h3>
            </div>
            {/* Checkout Button */}
            <button
              onClick={() => setShowForm(true)}
              style={checkoutButtonStyles}
              onMouseOver={(e) =>
                (e.target.style.backgroundColor =
                  checkoutButtonHoverStyles.backgroundColor)
              }
              onMouseOut={(e) =>
                (e.target.style.backgroundColor =
                  checkoutButtonStyles.backgroundColor)
              }
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default UserCart;
