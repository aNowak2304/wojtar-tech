import './Footer.scss';
import FooterIcon1 from '../img/FooterIcon1.png';
import FooterIcon2 from '../img/FooterIcon2.png';
import FooterIcon3 from '../img/FooterIcon3.png';

const Header = () => {
  return (
    <footer className='footer'>
        <div className="wrapper">

<a className="footer__box" href='mailto:handlowy@wojtar-tech.pl'>
  <img className='footer__box-icon' src={FooterIcon1} alt="" />
<p className="footer__box-text">handlowy@wojtar-tech.pl</p>
</a>

<a className="footer__box" href='tel:+48783218186'>
  <img className='footer__box-icon' src={FooterIcon2} alt="" />
<p className="footer__box-text">+48 783 218 186</p>
</a>

<a className="footer__box" href='https://maps.app.goo.gl/S9hVxrSLG9wA5qTLA'>
  <img className='footer__box-icon' src={FooterIcon3} alt="" />
<p className="footer__box-text">ul. Matejki 37 Mikołów 43-190</p>
</a>

        </div>
    </footer>
  );
};

export default Header;