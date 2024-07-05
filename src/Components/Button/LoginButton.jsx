import React, { useState } from 'react';
import './styles.css'; // Assuming you have a CSS file for styling

const LoginButton = () => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(!hovered);
  };

  return (
    <a
      href="#"
      className={`animated-button ${hovered ? 'hovered' : ''}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      Login
    </a>
  );
};

export default LoginButton;
