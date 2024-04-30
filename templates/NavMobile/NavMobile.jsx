import { useState, useRef } from 'react';
import './NavMobile.scss';
function NavMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const wrapperRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      wrapperRef.current.classList.add('burger-active');
    } else {
      wrapperRef.current.classList.remove('burger-active');
    }
  };

  return (
    <nav className="nav nav-mobile">
      <a href="#contact" className="nav-mobile__logo">
        Lorem, ipsum.
      </a>

      <button
        className={`burger-btn ${isMenuOpen ? 'burger-active' : ''}`}
        onClick={toggleMenu}
      >
        <div className="burger-btn__box">
          <span className="burger-btn__bars burger-btn__one"></span>
          <span className="burger-btn__bars burger-btn__two"></span>
          <span className="burger-btn__bars burger-btn__three"></span>
        </div>
      </button>

      <div className="wrapper" ref={wrapperRef}>
        <div className="nav-mobile__box">
          <a href="#aboutus" className="nav__item nav-mobile__item">
            Lorem, ipsum.
          </a>
          <a href="#contact" className="nav__item nav-mobile__item">
          Lorem, ipsum.
          </a>
          <a href="#prices" className="nav__item nav-mobile__item">
          Lorem, ipsum.
          </a>
          <a href="#gallery" className="nav__item nav-mobile__item">
          Lorem, ipsum.
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavMobile;