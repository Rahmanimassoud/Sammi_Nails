import { useEffect,useState } from 'react';
import './Home.css';
import HomeHeroImage from '../../components/HomeHeroImage/HomeHeroImage';
import HomeUniqueNailsDesgins from '../../components/HomeUniqueNailsDesigns/HomeUniqueNailsDesgins';
import HomeServicesSection from '../../components/HomeServicesSection/HomeServicesSection';
import HomeMainServices from '../../components/HomeMainServices/HomeMainServices';
import HomeTestimonials from '../../components/HomeTestimonials/HomeTestimonials';

const Home = () => {

    return (
        <div id="homepage">
              {/* Hero image section */}
              
              <HomeHeroImage />

              {/* Unique Designs */}

              <HomeUniqueNailsDesgins />

              {/* List of Services Section */}

              <HomeServicesSection />

              {/* Quote */}

              <div className="homepage-quote">
                  <div>
                    <h2>Life is not perfect, but your nails can be</h2>
                    <button>Contact us now.</button>
                  </div>
              </div>
              {/* Main Services */}

              <HomeMainServices />

              {/* Testimonials */}
             <HomeTestimonials />
              <div className="cta">
                    <h2>Express Yourself with Unique Nails</h2>
                    <h3>Book an appointment today and let your nails shine with creativity.</h3>
                    <div className='cta-button-container'>
                        <button>Book</button>
                        <button>Learn More</button>
                    </div>
              </div>
              <div className="contact-info">
                    <div>
                          <h2>Contact Information</h2>
                          <p>Visit us to get in touch for all your nail needs.</p>
                          <div className='phone-email'>
                                <div>
                                      <h5>Email</h5>
                                      <p>Send us an email today!</p>
                                      <p>SammiNail@gmail.com</p>
                                </div>
                                <div>
                                      <h5>Phone</h5>
                                      <p>Call us for appointments</p>
                                      <p>(203)459-1234</p>
                                </div>
                          </div>
                          <div>
                                <h5>Hours</h5>
                                <p>Monday: 9:30 am - 7:00 pm</p>
                                <p>Tuesday: 9:30 am - 7:00 pm</p>
                                <p> Wednesday: 9:30 am - 7:00 pm</p>
                                <p>Thursday: 9:30 am - 7:00 pm</p>
                                <p>Friday: 9:30 am - 7:00 pm</p>
                                <p>Saturday: 9:30 am - 7:00 pm</p>
                                <p>Sunday: 9:30 am - 4:00 pm</p>
                          </div>
                    </div>
              </div>
                          <img className='contact-info-image' src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt="" />
              </div>
        )
};

export default Home;
