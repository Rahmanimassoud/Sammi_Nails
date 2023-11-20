
import './Services.css';
import image from '../../assets/Servicess/image.png';
import newimg from '../../assets/Servicess/newimg.png';


const Services = () => {
  return (
    <div className="page-container">
      {/* <Navbar /> */}
      <div className="content-container">
        <div className="content">
          <div className="image-container">
            <img className='heroimg' src={image} alt="" />
            <div className="text-overlay">
              <p>Polished to perfection, from tips to toes</p>
            </div>
          </div>
          {/* populer options section */}
          <div className='popular-options-container'>
                <h1>Popular Options</h1>
                <div className="popular-options">
                    <div className="popular-option">
                        {/* <!-- Content for the first sub-container --> */}
                        <h4>Most Requested</h4>
                        <p>Classic Manicure with Gel Polish $40</p>
                        <p>Detox Volcano Pedicure $65</p>
                        <p>Jelly Treatment Pedicure $65</p>
                    </div>
                    <div className="popular-option">
                        <h4>Combination Deals</h4>
                        <p>Classic Manicure and Pedicure $60</p>
                        <p>Deluxe Manicure and Detox Volcano Pedicure $95</p>
                        {/* <!-- Add more content as needed --> */}
                    </div>
                    <div className="popular-option">

                        <h2>Manicures</h2>
                        <p>All our manicure services include meticulous trimming, regular shaping, precise filling, expert buffing, and thorough cuticle maintenance. The experience concludes with a soothing lotion massage and the application of your chosen regular polish.</p>
                        
                    </div>
                    <div className="popular-option">

                        <h2>Pedicures</h2>
                        <p>All our pedicure services offer a comprehensive experience, including a warm foot bath, trimming, shaping, filing, buffing, cuticle maintenance, callus treatment, a luxurious sugar scrub, mask and massage, and concluding with a hot towel and your choice of regular polish.</p>
                    </div>
                    <div className="popular-option">
                        <h4>The Classics</h4>
                        <p>Classic Manicure | $25</p>
                        <p>Classic Manicure  with Gel Polish | $40</p>
                        <p>Deluxe Manicure | $35</p>
                        <p>Deluxe Manicure  with Gel Polish | $50</p>
                    </div>
                    <div className="popular-option">
                        <h4>The Classics</h4>
                        <p>Classic Pedicure | $35</p>
                        <p>Classic Pedicure  with Gel Polish | $55</p>
                    </div>

                    <div className="popular-option">
                        <h4>Nail Enhancement</h4>
                        <p>Gel Polish Acrylic ful Set | $50+</p>
                        <p>Gel Polish fill | $40+</p>
                        <p>Full Ombre set | $65+</p>
                        <p>Dipping Powder | $45+</p>
                        <p>Dipping Powder with tip | $55+</p>
                        <p>Dipping Powder Ombre/French design | $60+</p>
                    </div>
                    <div className="popular-option">
                        <h4>Spa Pedicure</h4>
                        <p>Includes paraffin wax or hot oil treatment with
                        <p>a soothing hot stone massage.</p></p>
                        <p>Spa Pedicure | $45</p>
                        <p>Spa Pedicure with Gel Polish | $65</p>
                    </div>
                    <div className="popular-option">
                        <h4>Additional Services</h4>
                        <p>Polish change toes/nails | $15</p>
                        <p>Gel Polish change toes/nails  | $25</p>
                        <p>Gel French Polish | $30</p>
                        <p>Cat eye or chrome Nails | $15</p>
                        <p>Nail Design | $10+</p>
                        <p>Take off with services | $3 Gel, $5 Dip, $10 Acrylic</p>
                        <p>Take off without services | $8 Gel, $10 Dip, $15 Acrylic</p>
                    </div>

                    <div className="popular-option">
                        <h4>Detox Volcano Pedicure</h4>
                        <p>Indulge in the ultimate relaxation with the Classic and Spa Pedicure, featuring a rejuvenating spa treatment using La Palm Spa Products’ Volcano Spa.</p>
                        <p>Detox Volcano Pedicure with Gel Polish | $85</p>
                        <p>Detox Volcano Pedicure | $65</p>
                    </div>
                    {/* this is just a place holder find a permanent solution */}
                    <div className="popular-option">
                        <h4></h4>
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>

                    <div className="popular-option">
                        <h4>Herbal Spa Pedicure</h4>
                        <p>Experience the best of both worlds with the Classic and Spa Pedicure, enhanced by an exfoliating sugar scrub and a herbal spa bath of your choice.</p>
                        <p>Herbal Spa Pedicure with Gel Polish | $75</p>
                        <p>Herbal Spa Pedicure | $55</p>
                    </div>

                    <div className="popular-option">
                        <h4>Jelly Treatment Pedicure</h4>
                        <p>Immerse yourself in luxury with our Jelly Treatment Pedicure, combining the Classic and Spa Pedicure with a jelly spa bath that retains heat four times longer.</p>
                        <p>Jelly Treatment Pedicure | $65</p>
                        <p>Jelly Treatment Pedicure with Gel Polish | $85</p>
                    </div>
                {/* <!-- Add more .popular-option divs if needed> */}
                </div>
          </div>
          <div className='middle-section-btn'>
            <button id='btn-middle-section'>Call us to Book a vist</button>
          </div>
          {/* middle section picture and text */}
          <div className='middle-section-container'>
            <div className='img-box'>
                <img className='img-box-img' src={newimg} alt="" />
            </div>
            <div className='text-box'>
                <p>“Sammi Nails Spa is the best salon around, I wouldnt go anywhere else”</p>
                <p>Simo Mordi</p>
            </div>
          </div>

          {/* kids section */}
          <div className='kids-section'>
            <div className='kids-text-box'>
                <h2>Kids Services</h2>
                <p>Classic Manicure | $15</p>
                <p>Classic Manicure  with Gel Polish | $25</p>
                <p>Classic Pedicure | $25</p>
                <p>Classic Pedicure  with Gel Polish | $35</p>
                <p>Color Change nails/toes | $15</p>
                <p>Gel Polish Color Change nails/toes | $30</p>
            </div>
            <div className='kids-image-box'>
                <img src={newimg} alt="" />
            </div>
          </div>

          {/* Waxing section */}
          <div className='waxing-section'>
          <div className='waxing-image-box'>
                <img src={newimg} alt="" />
            </div>
            <div className='waxing-text-box'>
                <h2>Waxing</h2>
                <p>Eyebrow | $15</p>
                <p>Lip | $15</p>
                <p>Chin | $ 12+</p>
                <p>Side Burns | $16</p>
                <p>Full Face | $40+</p>
                <p>Under Arm | $25+</p>
                <p>Full Arm | $40+</p>
                <p>Half Arm | $25+</p>
                <p>Full Leg | $50+</p>
                <p>Half Leg | $30+</p>
                <p>Back | $40</p>
                <p>Chest | $30+</p>
                <p>Eyebrow Tinting | $18</p>
            </div>
          </div>
          <div className='question'>
            <h4>Questions? Contact us! We're here to ensure your process is smooth.</h4>
            <button>Contact us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
