import './header.css';
import logo from '/src/img/logo3.png';
import { Link } from 'react-router-dom'; // Importa Link

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <div className="header__logo">
            <img src={logo} alt="Logo" />
            <h1 className="gotu">Children's Hospital</h1>
          </div>
          
          <nav className="navegation urbanist">
            <Link to="/" className="navegation__link">Home</Link>
            <Link to="/patients" className="navegation__link">Patients</Link>
            <Link to="/register" className="navegation__link">Register</Link>
          </nav>
        </div>
      </header>
    </>
  );
};
