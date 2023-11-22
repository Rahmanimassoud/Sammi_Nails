import { useEffect,useState } from 'react';
import './Home.css';

const Home = () => {

    const arrayOfReviews = [
        {
          name: "Customer 1",
          image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
          review: "Great service and attention to detail!",
          rating: "⭐⭐⭐⭐⭐",
        },
        {
          name: "Customer 2",
          image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
          review: "Clean and inviting atmosphere. Loved the nail art!",
          rating: "⭐⭐⭐⭐",
        },
        {
          name: "Customer 3",
          image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
          review: "Friendly staff and reasonable prices.",
          rating: "⭐⭐⭐⭐⭐",
        },
        {
          name: "Customer 4",
          image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
          review: "Sammi Nail Salon is my go-to place for nail care. The staff is skilled and always friendly.",
          rating: "⭐⭐⭐⭐⭐",
        },
        {
          name: "Customer 5",
          image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
          review: "Had a wonderful experience here! The technicians are attentive, and the salon is clean and well-maintained.",
          rating: "⭐⭐⭐⭐⭐",
        },
        {
          name: "Customer 6",
          image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
          review: "Tried their new spa package, and it was so relaxing. I left feeling pampered and with beautiful nails!",
          rating: "⭐⭐⭐⭐⭐",
        },
        {
          name: "Customer 7",
          image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
          review: "The nail art options are amazing! I always get compliments on my nails after visiting Sammi Nail Salon.",
          rating: "⭐⭐⭐⭐⭐",
        },
      ];
    
      const [currentCustomerIndex, setCurrentCustomerIndex] = useState(0);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentCustomerIndex((prevIndex) => (prevIndex + 1) % arrayOfReviews.length);
        }, 8000); 
    
        return () => clearInterval(interval); 
      }, []);

      const customer = arrayOfReviews[currentCustomerIndex];

    return (
        <div id="homepage">
              {/* Hero image section */}
              <div className="home-hero-image">
                    <div className="hero-text">
                          <h1>Express Yourself with Unique Manicures and Pedicures</h1>
                          <p>Welcome to Sammi Nails Spa, where we bring a new perspective to your nail salon experience. Our talented nail technicians are here to help you express yourself with our unique manicures and pedicures. Book an appointment today and let your nails do the talking!</p>
                          <button>Contact Us</button>
                    </div>
              </div>
              <div className="unique-nails-designs">
                          <h2>Unleash Your Style with Unique Nail Designs</h2>
                          <p>At Sammi Nails Spa, we believe that your nails are a canvas for self-expression. Our talented nail artists are dedicated to creating unique designs that reflect your personal style. Whether you prefer bold and vibrant colors or delicate and intricate patterns, we have the expertise to bring your vision to life. Visit us today and unleash your creativity!</p>
                          <button>Learn More</button>
              </div>
              <div className="unique-nails-designs-image">
                    <img src="https://images.unsplash.com/photo-1600973459349-da30ea82f73a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </div>
              {/* List of Services Section */}
              <div className="home-services-section">
                    <div className="services-title">
                          <h2>Unleash Your Style with Our Nail Services</h2>
                          <p>At Sammi Nails Spa, we offer a wide range of nail salon services to help you express yourself and enhance your style. From manicures and pedicures to unique nail art, our experienced technicians are dedicated to providing you with a personalized and exceptional salon experience.</p>
                    </div>
                    <div className="services-list">
                          <div>
                                <img src="https://images.unsplash.com/photo-1600973459349-da30ea82f73a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                <h3>Manicures, Pedicures, and Nail Art Services</h3>
                                <p>Our nail salon services include professional manicures, pedicures, and creative nail art designs. We use high-quality products and techniques to ensure your nails look stunning and last longer.</p>
                          </div>
                          <div>
                                <img src="https://images.unsplash.com/photo-1600973459349-da30ea82f73a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                <h3>Relax and Pamper Yourself with Our Services</h3>
                                <p>Indulge in a relaxing and rejuvenating experience with our nail salon services. Our friendly staff will make sure you feel pampered and leave our salon feeling refreshed.</p>
                          </div>
                          <div>
                                <img src="https://images.unsplash.com/photo-1600973459349-da30ea82f73a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                <h3>Professional Nail Care for Every Occasion</h3>
                                <p>Whether you need nail care for a special event or simply want to treat yourself, our nail salon services are tailored to meet your needs. We strive to exceed your expectations and deliver exceptional results.</p>
                          </div>
                    </div>
                    <button>Learn More About Our Services</button>
              </div>
              {/* Quote */}
              <div className="homepage-quote">
                    <h1>Life is not perfect, but your nails can be</h1>
                    <button>Contact us now.</button>
              </div>
              {/* Main Services */}
              <div className="main-services">
                    <div className='first-service'>
                          <div>
                                <img src="https://images.unsplash.com/photo-1600973459349-da30ea82f73a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                          </div>
                          <div>
                                <h3>Pedicure</h3>
                                <p>Whether you need nail care for a special event or simply want to treat yourself, our nail salon services are tailored to meet your needs. We strive to exceed your expectations and deliver exceptional results.
                                </p>
                          </div>
                    </div>
                    <div className='second-service'>
                          <div>
                                <img src="https://images.unsplash.com/photo-1600973459349-da30ea82f73a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                          </div>
                          <div>
                                <h3>Manicure</h3>
                                <p>Whether you need nail care for a special event or simply want to treat yourself, our nail salon services are tailored to meet your needs. We strive to exceed your expectations and deliver exceptional results.
                                </p>
                          </div>
                    </div>
                    <div className='third-service'>
                          <div>
                                <img src="https://images.unsplash.com/photo-1600973459349-da30ea82f73a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                          </div>
                          <div>
                                <h3>Waxing</h3>
                                <p>Whether you need nail care for a special event or simply want to treat yourself, our nail salon services are tailored to meet your needs. We strive to exceed your expectations and deliver exceptional results.
                                </p>
                          </div>
                    </div>
              </div>
              <div className="testimonials">
                    <h1>They're Talking</h1>
                    <div className='carousel'>
                    <div className="testimonial">
                          <p className="rating">{customer.rating}</p>
                          <p className="review">{customer.review}</p>
                          <div>
                                <img src={customer.image} alt="" />
                                <p>{customer.name}</p>
                          </div>
                    </div>
                    </div>
              </div>
              <div className="cta">
                    <h2>Express Yourself with Unique Nails</h2>
                    <p>Book an appointment today and let your nails shine with creativity.</p>
                    <button>Book</button>
                    <button>Learn More</button>
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
                          <iframe className='contact-info-image' width="100%" height="600" title='SamiNails' frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=+(SamiNails)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/"></a></iframe>
              </div>
        )
};

export default Home;
