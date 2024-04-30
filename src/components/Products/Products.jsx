import './Products.scss';
import productIcon from '../img/productIcon.png';



const Header = () => {
  return (
    <section className='products' id='products'>

        <div className="wrapper">
          <div className="products__text products__text-mobile">
            <h2 className='products__text-heading'>Produkty katalogowe</h2>
            <p className='products__text-info'>Produkty i usługi</p>
          </div>

       <div className="products__container">
       <a href="InProgress.html" className='products__link products__link--one'>
        <div className="products__box">
            <div className="products__box-text">Zbiorniki mieszalniki reaktory ze stali nierdzewnej i czarnej</div>

            <img className='products__box-icon' src={productIcon} alt="" />

            <div className="shadow-box"></div>
          </div>
        </a>

        <div className="products__text products__text-desktop">
            <h2 className='products__text-heading'>Produkty katalogowe</h2>
            <p className='products__text-info'>Produkty i usługi</p>
          </div>
          
        <a href="" className='products__link products__link--two'>
        <div className="products__box">
            <div className="products__box-text">Instalacje odzysku ciepła</div>

            <img className='products__box-icon' src={productIcon} alt="" />

            <div className="shadow-box"></div>
          </div>
        </a>

        

        <a href="" className='products__link products__link--three'>
        <div className="products__box">
            <div className="products__box-text">Zbiorniki, mieszlaniki z tworzyw sztucznych</div>

            <img className='products__box-icon' src={productIcon} alt="" />

            <div className="shadow-box"></div>
          </div>
        </a>

        <a href="" className='products__link products__link--four'>
        <div className="products__box">
            <div className="products__box-text">Zbiorniki, mieszlaniki z tworzyw sztucznych</div>

            <img className='products__box-icon' src={productIcon} alt="" />

            <div className="shadow-box"></div>
          </div>
        </a>


        <a href="" className='products__link products__link--five'>
        <div className="products__box">
            <div className="products__box-text">Instalacje chłodnicze</div>

            <img className='products__box-icon' src={productIcon} alt="" />

            <div className="shadow-box"></div>
          </div>
        </a>

       </div>

        </div>
    </section>
  );
};

export default Header;