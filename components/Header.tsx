// components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  const headerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '5rem',
    backgroundColor: '#1a202c',
  };

  const titleStyle = {
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 'bold',
  };

  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>DESAFIO FRONT-END</h1>
    </header>
  );
};

export default Header;
