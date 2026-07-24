import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h2>Vivid Horizons</h2>
      </div>

      <nav>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#why-us">Why Us?</a></li>
          <li><a href="#newsletter">Newsletter</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>

      <button className="tour-btn">
        Explore Tours
      </button>
    </header>
  );
}

export default Header;