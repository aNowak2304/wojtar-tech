import './Numbers.scss';
import CountUp from 'react-countup';

const Header = () => {
  return (
    <section className='numbers'>

        <div className="wrapper">
            <div className="numbers__box">
            <p className='numbers__box-number'><CountUp end={2} duration={2.5} suffix="+" /></p>
            <p className='numbers__box-text'>lata doświadczenia</p>
            </div>

            <div className="numbers__box">
            <p className='numbers__box-number'><CountUp end={5} duration={2.5} suffix="+" /></p>
            <p className='numbers__box-text'>szczególnych specjalizacji</p>
            </div>

            <div className="numbers__box">
            <p className='numbers__box-number'><CountUp end={13} duration={2.5} suffix="+" /></p>
            <p className='numbers__box-text'>zrealizowanych zleceń</p>
            </div>
            
        </div>
    </section>
  );
};

export default Header;