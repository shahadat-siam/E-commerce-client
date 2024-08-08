import './Futures.css'
import fu1 from '../../../assets/features/fu1.png'
import fu2 from '../../../assets/features/f2.png'
import fu3 from '../../../assets/features/f3.png'
import fu4 from '../../../assets/features/f4.png'
import fu5 from '../../../assets/features/f5.png'
import fu6 from '../../../assets/features/f6.png'

const Futures = () => {
  return (
    <div>
      <section className="section-p1" id="feature">
        
        <div className="fe-box">
            <img src={fu6} alt=""/>
            <h6>Free Shipping</h6>
        </div> 
        <div className="fe-box">
            <img src={fu1} alt=""/>
            <h6>Online Order</h6>
        </div>
        <div className="fe-box">
            <img src={fu3} alt=""/>
            <h6>Save Money</h6>
        </div>
        <div className="fe-box">
            <img src={fu4} alt=""/>
            <h6>Promotions</h6>
        </div>
        <div className="fe-box">
            <img src={fu5} alt=""/>
            <h6>Happy sell</h6>
        </div>
        <div className="fe-box">
            <img src={fu2} alt=""/>
            <h6>F24/7 Support</h6>
        </div>
      </section>
    </div>
  );
};

export default Futures;
