import './Features.scss';
import FeaturesIcon1 from '../img/FeaturesIcon1.png';
import FeaturesIcon2 from '../img/FeaturesIcon2.png';
import FeaturesIcon3 from '../img/FeaturesIcon3.png';
import FeaturesIcon4 from '../img/FeaturesIcon4.png';
// import FeaturesImgCard from '../img/FeaturesImgCard.jpg';

const Features = () => {
  return (
    <section className='features' id='aboutus'>

        <div className="wrapper">
        <h2 className='features__heading'>Cele i założenia marki to fundament naszej strategii.</h2>

        <div className="features__card">
          <div className="features__container">
              <div className="features__box features__box--other">
                <img className='features__box-img' src={FeaturesIcon1} alt="" />
                <h3 className="features__box-heading">Innowacja i Technologia</h3>
                <p className="features__box-text">Prowadzimy branżę, stosując nowoczesne metody projektowania i zaawansowane technologie w naszych zbiornikach i mieszalnikach.   </p>
              </div>

              <div className="features__box features__box--other">
                <img className='features__box-img features__box-img--second' src={FeaturesIcon2} alt="" />
                <h3 className="features__box-heading features__box-heading--other">Jakość i precyzja</h3>
                <p className="features__box-text">Zapewniamy wyroby spełniające międzynarodowe normy jakości, dzięki rygorystycznym procesom produkcyjnym.</p>
              </div>

              <div className="features__box">
                <img className='features__box-img' src={FeaturesIcon3} alt="" />
                <h3 className="features__box-heading">Dostosowanie do potrzeb</h3>
                <p className="features__box-text">Oferujemy modułowe rozwiązania, które można dostosować do specyficznych wymagań przemysłowych naszych klientów.</p>
              </div>

              <div className="features__box ">
                <img className='features__box-img' src={FeaturesIcon4} alt="" />
                <h3 className="features__box-heading">Wsparcie i doradztwo</h3>
                <p className="features__box-text">Kładziemy duży nacisk na wsparcie techniczne i doradztwo, by nasze produkty i usługi były w pełni wykorzystane przez klientów.</p>
              </div>
          </div>


            <div className="features__cardImg features__cardImg-mobile">
              <p className="features__cardImg-text">Zrealizowaliśmy już</p>
              <p className="features__cardImg-text features__cardImg-text--other">87+</p>
              <p className="features__cardImg-text">zleceń</p>
              <a href="#contact" className='features__cardImg-link'><button className='features__cardImg-btn'>Kontakt</button></a>

              <div className="shadow-box"></div>
          </div>

          </div>
          
        </div>
    </section>
  );
};

export default Features;