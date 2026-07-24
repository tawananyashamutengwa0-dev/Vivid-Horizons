import "./NewsLetter.css";
import { FaPaperPlane } from "react-icons/fa";

export default function Newsletter() {
  return (
    <section className="newsletter">
      <div className="newsletter-content">

        <h2>Subscribe to Our Newsletter</h2>

        <p>
          Get the latest travel deals, safari adventures, destination guides,
          and exclusive offers delivered straight to your inbox.
        </p>

        <form className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email address"
            required
          />

          <button type="submit">
            <FaPaperPlane />
            Subscribe
          </button>
        </form>

      </div>
    </section>
  );
}