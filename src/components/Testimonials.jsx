import "./Testimonials.css";
import { FaStar } from "react-icons/fa";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Tawananyasha Mutengwa",
      review:
        "Seeing Victoria Falls up close was breathtaking! Our guide Tendai sharedamazing stories about the local Tonga culture. As a Zimbabwean, I discovered so much about my own country!",
    },
    {
      name: "Bullet",
      review:
        "The safari experience in Hwange National Park was incredible. We saw lions, elephants, and so much more. Highly recommended!",
    },
    {
      name: "TJ",
      review:
        "Visiting  Great Zimbabwe was a dream true Learning about our ancient ancestors from our guide made me so proud to be Zimbabwean. Highly recommend to both locals and visitors! .",
    },
  ];

  return (
    <section className="testimonials">
      <h2 className="section-title">What Our Travelers Are Saying</h2>
      <p className="section-subtitle">
        Discover why visitors from around the world love exploring Zimbabwe with us.
      </p>

      <div className="testimonial-container">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            
        
 
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            <p className="review">"{item.review}"</p>

            <h3>{item.name}</h3>
            <span>{item.country}</span>
          </div>
        ))}
      </div>

    </section>
  );
}