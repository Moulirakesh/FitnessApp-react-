import React, { useEffect, useState } from 'react';
import '../styles/Navbar.css';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  // Function to handle home navigation
  const handleHomeClick = () => {
    navigate('/'); // Navigate to the home page
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  // Check if the current path is the home page
  const isHomePage = location.pathname === '/';

  return (
    <div className={scrollPosition > 100 || !isHomePage ? 'navbar nav-scrolled' : 'navbar'}>
      <h3 onClick={handleHomeClick}>SB Fitzz</h3>

      {isHomePage ? (
        <ul>
          <li onClick={handleHomeClick}>Home</li>
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#search">
            <li>Search</li>
          </a>
        </ul>
      ) : (
        <ul>
          <li onClick={handleHomeClick}>Home</li>
          <li onClick={() => navigate('/#about')}>About</li>
          <li onClick={() => navigate('/#search')}>Search</li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;