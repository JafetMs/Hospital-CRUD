import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './header.css';

export const Header = () => {
  return (
    <header className=''>
      <div className="container">
      <div className="bar">
        <div className="logo">
          <div className="logo__img">
            <img src={logo} alt="" />
          </div>
          <h1 className='logo__name'>WeCare</h1>
        </div>

        <nav className='navegation'>
          <Link to="/" className="navegation__link">Home</Link>
          <Link to="/Patients" className="navegation__link">Patients</Link>
          <Link to="/RegisterPatients" className="navegation__link">Register</Link>
        </nav>
      </div>


      </div>
     
    </header>
  );
};
