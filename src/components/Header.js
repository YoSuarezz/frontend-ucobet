import React from 'react';
import logo from '../assets/images/pngucobet.png'; // Asegúrate de la ruta correcta

const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="UcoBet logo" />
      <p>Bienvenido a UcoBet</p>
    </header>
  );
};

export default Header;
