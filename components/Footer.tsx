// components/Footer.tsx

import React from 'react';

const Footer: React.FC = () => {

  const footerStyle: React.CSSProperties = {
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center', 
  padding: '1rem',
  };

  const linkStyle = {
    color: '#63b3ed',
    textDecoration: 'underline',
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; 2023 BelussoCode. Todos os direitos reservados.</p>
      <p>
        Desenvolvido por{' '}
        <a
          href="https://www.linkedin.com/in/pablobelusso/"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          Pablo Belusso
        </a>
      </p>
    </footer>
  );
};

export default Footer;


