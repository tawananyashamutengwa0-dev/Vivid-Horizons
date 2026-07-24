import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

    
        <div className="footer-section">
          <h2>Follow us for Exclusive updates.</h2>

          <div className="social-icons">
            <a href="#">
              <FaFacebookF size={30} />
            </a>

            <a href="#">
              <FaInstagram size={30} />
            </a>

            <a href="#">
              <FaTwitter size={30} />
            </a>

            <a href="#">
              <FaLinkedinIn size={30} />
            </a>
          </div>
        </div> 
       
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Vivid Horizon. All Rights Reserved.
        </p>
      </div>
      
      </div>

    </footer>
  );
}