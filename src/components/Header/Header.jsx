import './Header.scss';
const Header = () => {
  return (
    <header className="header">
        <div className="wrapper">
        <h1 className="header__heading">Przekraczamy granice możliwości stali</h1>
        <a className='header__link' href="#products"><button className='header__btn'>Produkty</button></a>
        </div>
        <div className="blue-box"></div>
        <div className="shadow-box"></div>
    </header>
  );
};

export default Header;