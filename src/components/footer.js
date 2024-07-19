import React from 'react';
import logo from '../assets/logo.png';

function Footer() {
  return (
    <footer className="Footer">
      <img src={logo} alt="GeTech Pty Logo" className="Footer-logo" />
      <p>&copy; 2024 GeTech Pty. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
