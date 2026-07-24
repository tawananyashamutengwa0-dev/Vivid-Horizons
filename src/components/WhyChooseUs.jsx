
import { FaMapMarkerAlt, FaAward, FaGlobeAfrica } from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section className="why-choose">
      <h2 className="why-title">Why Choose Us?</h2>

      <div className="why-container">
        <div className="why-card">
          <div className="icon-circle">
            <FaMapMarkerAlt />
          </div>

          <h3>Born and Bred Zimbabwean Guides</h3>

          <p>
            Our passionate local guides share authentic stories,
            traditions, and hidden gems across Zimbabwe.
          </p>
        </div>

        <div className="why-card">
          <div className="icon-circle">
            <FaAward />
          </div>

          <h3>Luxury Safari Lodges</h3>

          <p>
            Stay in world-class lodges and camps with exceptional
            service in Zimbabwe's most stunning locations.
          </p>
        </div>

        <div className="why-card">
          <div className="icon-circle">
            <FaGlobeAfrica />
          </div>

          <h3>Supporting Local Communities</h3>

          <p>
            We partner with local communities, ensuring tourism
            benefits Zimbabweans and preserves our heritage.
          </p>
        </div>
      </div>
    </section>
  );
}