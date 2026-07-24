import "./Hero.css";
import heroImage from "../assets/Hero-background.jpeg";

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="overlay"></div>

      <div className="hero-content">
        <h1>Experience Zimbabwe</h1>

        <p>
          Discover the wonders of Zimbabwe with expert local guides
        </p>

        <button className="hero-btn">
          Explore Zimbabwe
        </button>
      </div>
    </section>
  );
}

export default Hero;