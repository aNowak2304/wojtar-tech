import './NavDesktop.scss';
import mainLogo from '../img/mainLogo.png';
import { useState, useEffect } from 'react';

export default function NavDesktop() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Ustawia stan isScrolled na true, gdy użytkownik przewinie stronę w dół
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Dodanie nasłuchiwacza na zdarzenie scroll
    window.addEventListener('scroll', handleScroll);

    // Oczyszczenie nasłuchiwacza
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`nav nav-desktop ${isScrolled ? 'scrolled' : ''}`}>
      <div className="wrapper">
        <div className="nav__left">
          <a href="index.html" className="nav-desktop__logo">
            <img className='nav-desktop__img' src={mainLogo} alt="Logo" />
          </a>
        </div>
        <div className="nav__right">
          <a href="#aboutus" className="nav__item nav-desktop__item">O firmie</a>
          <a href="#services" className="nav__item nav-desktop__item">Usługi</a>
          <div className="nav__item nav-desktop__item dropdown">
            <a href="#products" className="dropdown-dropbtn">Produkty <span className='arrow'>^</span></a>
            <div className="dropdown-content">
            <a href="#service1" className="dropdown-content-link">Zbiorniki, mieszalniki, reaktory ze stali nierdzewnej i czarnje</a>
            <a href="#service2" className="dropdown-content-link">Instalacje odzysku ciepła</a>
            <a href="#service3" className="dropdown-content-link">Zbiorniki mieszalniki z tworzyw sztucznych</a>
            <a href="#service4" className="dropdown-content-link">Instalacje chłodnicze</a>
            <a href="#service5" className="dropdown-content-link">Stacje uno</a>
            </div>
          </div>
          <a href="#contact" className="nav__item nav-desktop__item">Kontakt</a>
        </div>
      </div>
    </nav>
  );
}
