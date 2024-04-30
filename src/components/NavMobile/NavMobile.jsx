import { useState } from 'react';
import mainLogo from '../img/mainLogo.png';
import './NavMobile.scss';

function NavMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServicesMenu = (e) => {
    e.preventDefault(); // Zapobiega nawigacji linka
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <nav className="nav nav-mobile">
      <a href="#contact" className="nav-mobile__logo">
        <img className='nav-mobile__logo-img' src={mainLogo} alt="Main Logo" />
      </a>

      <button className={`burger-btn ${isMenuOpen ? 'burger-active' : ''}`} onClick={toggleMenu}>
        <div className="burger-btn__box">
          <span className="burger-btn__bars burger-btn__one"></span>
          <span className="burger-btn__bars burger-btn__two"></span>
          <span className="burger-btn__bars burger-btn__three"></span>
        </div>
      </button>

      <div className={`wrapper ${isMenuOpen ? 'burger-active' : ''}`}>
        <div className="nav-mobile__box">
          <a href="#aboutus" className="nav__item nav-mobile__item">O firmie</a>
          <a href="#productservices" className="nav__item nav-mobile__item">Usługi</a>
          <a href="#products" className="nav__item nav-mobile__item" onClick={toggleServicesMenu} role="button" aria-expanded={isServicesOpen}>
            Produkty <span className={`arrow ${isServicesOpen ? 'open' : ''}`}>^</span>
          </a>
          {isServicesOpen && (
            <div className="nav-mobile__dropdown">
            <a href="#service1" className="nav-mobile__dropdown-item">Zbiorniki, mieszalniki, reaktory ze stali nierdzewnej i czarnej</a>
            <a href="#service2" className="nav-mobile__dropdown-item">Instalacje odzysku ciepła</a>
            <a href="#service3" className="nav-mobile__dropdown-item">Zbiorniki mieszalniki z tworzyw sztucznych</a>
            <a href="#service4" className="nav-mobile__dropdown-item">Instalacje chłodnicze</a>
            <a href="#service5" className="nav-mobile__dropdown-item">Stacje uno</a>
          </div>
          )}
          <a href="#gallery" className="nav__item nav-mobile__item">Kontakt</a>
        </div>
      </div>
    </nav>
  );
}

export default NavMobile;


