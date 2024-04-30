import './Services.scss';
import ServicesImg from '../img/ServicesImg.jpg';
import ServicesIcon1 from '../img/ServicesIcon1.png';
import ServicesIcon2 from '../img/ServicesIcon2.png';
import ServicesIcon3 from '../img/ServicesIcon3.png';

const Header = () => {


  
  return (
    <section className='services' id='services'>

        <div className="wrapper">

        <div className="services__boxes">

        <h2 className='services__heading services__heading-desktop'><span className='services__heading-other'>|</span> Nasze usługi</h2>
          <div className="services__image">

            <div className="shadow-box"></div>
              <h2 className='services__heading services__heading-mobile'><span className='services__heading-other'>|</span> Nasze usługi</h2>
              <img className='services__img' src={ServicesImg} alt="" />
          </div>

          <div className="services__card">
            <p className="services__card-text">Inspirujemy przemysł wyjątkowymi usługami z nami wyznaczysz nowe standardy.</p>
          </div>
        </div>

        <div className="services__container">
            <div className="services__box">
              <img src={ServicesIcon1} alt="" className="services__icon" />

              <div className="services__info">
                <h3 className="services__info-heading">Projektowanie</h3>
                <p className="services__info-text">Tworzymy indywidualne rozwiązania techniczne, które są skrojone na miarę specyficznych wymagań klientów i branży, zapewniając innowacyjność i efektywność.</p>
              </div>
            </div>

            <div className="services__box">
              <img src={ServicesIcon2} alt="" className="services__icon" />

              <div className="services__info">
                <h3 className="services__info-heading">Dostawa i instalacja</h3>
                <p className="services__info-text">Oferujemy kompletną dostawę oraz instalację produktów, gwarantując szybki i zgodny z normami montaż dzięki doświadczonej ekipie.</p>
              </div>
            </div>

            <div className="services__box">
              <img src={ServicesIcon3} alt="" className="services__icon" />

              <div className="services__info">
                <h3 className="services__info-heading">automatyka i optymalizacja</h3>
                <p className="services__info-text">Tworzymy indywidualne rozwiązania techniczne, które są skrojone na miarę specyficznych wymagań klientów i branży, zapewniając innowacyjność i efektywność.</p>
              </div>
            </div>

            <div className="services__box">
              <img src={ServicesIcon1} alt="" className="services__icon" />

              <div className="services__info">
                <h3 className="services__info-heading">Serwis i utrzymanie</h3>
                <p className="services__info-text">Zapewniamy serwis i utrzymanie zapewniające długotrwałą i bezawaryjną pracę sprzętu, co pomaga naszym klientom w osiąganiu ciągłości procesów produkcyjnych.</p>
              </div>
            </div>
        </div>
        </div>
    </section>
  );
};

export default Header;