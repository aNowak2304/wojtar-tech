import './NavDesktop.scss';

export default function NavDesktop() {
  return (


<nav className="nav nav-desktop">
  <div className="wrapper">

      <a href="#aboutus" className="nav__item nav-desktop__item">O mnie</a>
      <a href="#contact" className="nav__item nav-desktop__item">Oferta</a>
      <a href="#contact" className="nav-desktop__logo">Julia Gwiżdż</a>
      <a href="#prices" className="nav__item nav-desktop__item">Kontakt</a>
      <a href="#gallery" className="nav__item nav-desktop__item">Portfolio</a>

  </div>
</nav>
    
  );
}