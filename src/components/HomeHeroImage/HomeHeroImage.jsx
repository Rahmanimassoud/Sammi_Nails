import { Link } from "react-router-dom"
import"./HomeHeroImage.css"

const HomeHeroImage = () => {
  return (
    <section className="home-hero-image">
      <div className="hero-image">
      <div className="hero-text">
            <h1>Express Yourself with Unique Manicures and Pedicures</h1>
            <h2>Welcome to Sammi Nails Spa, where we bring a new perspective to your nail salon experience. Our talented nail technicians are here to help you express yourself with our unique manicures and pedicures. Book an appointment today and let your nails do the talking!</h2>
            <Link to='/Contact'>
              <button>Contact Us</button>
            </Link>
      </div>
    </div>
</section>
  )
}

export default HomeHeroImage