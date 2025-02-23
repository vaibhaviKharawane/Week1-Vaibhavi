// src/components/Home.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="home-container d-flex flex-column justify-content-center align-items-center text-center vh-100 position-relative" 
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1604014237423-d7d03a1c41a5')", 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundAttachment: 'fixed' 
      }}
    >
      <div className="background-overlay"></div>
      <div className="container-home">
        <h1 className="title">Welcome to Personal Finance Manager</h1>

        <button 
          className="btn btn-login btn-custom" 
          onClick={() => navigate('/login')}
        >
          Login
        </button>

        <button 
          className="btn btn-register btn-custom" 
          onClick={() => navigate('/register')}
        >
          Register
        </button>

        <Link to='/expenses' className="btn btn-light btn-custom text-dark">Manage Expenses</Link>
        <Link to='/login' className="btn btn-danger btn-custom">Logout</Link>

        <div className="image-container">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/2926/2926376.png" 
            alt="Savings" 
            className="animated-image floating-image" 
          />
          <img 
            src="https://cdn-icons-png.flaticon.com/512/3898/3898183.png" 
            alt="Budgeting" 
            className="animated-image rotating-image" 
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
