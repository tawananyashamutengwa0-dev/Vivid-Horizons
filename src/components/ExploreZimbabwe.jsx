import "./ExploreZimbabwe.css";
import card1 from "../assets/card1.jpeg";
import card2 from "../assets/Card2.jpeg";
import card3 from "../assets/Card3.jpeg";

export default function ExploreZimbabwe() {
  return (
    <div className="page">

      <h1 className="title">Explore Zimbabwe</h1>

      <div className="card-container">
        {/* Card 1 */}
        <div className="card">
          <img src={card1} alt="Victoria Falls" />
        
          <h3>Victoria Falls</h3>
          <p>
            Experience the mighty Mosi-oa-Tunya, the Smoke that Thunders —
            one of the world's greatest waterfalls.
          </p>
          <a href="#">Explore Victoria Falls →</a>
        </div>

        {/* Card 2 */}
        <div className="card">
          <img src={card2} alt="Safari Adventures" />

          <h3>Safari Adventures</h3>
          <p>
            Encounter the Big Five in Hwange, Mana Pools, and Matobo Hills
            National Parks.
          </p>
          <a href="#">Explore Safari Tours →</a>
        </div>

        {/* Card 3 */}
        <div className="card">
          <img src={card3} alt="Cultural Heritage" />

          <h3>Cultural Heritage</h3>
          <p>
            Explore Great Zimbabwe ruins, ancient rock art, and vibrant local traditions.
          </p>
          <a href="#">Explore Cultural Heritage →</a>
        </div>
      </div>

      {/* Go Back Button */}
      <button className="go-back" onClick={() => window.history.back()}>
      
      
      </button>
    </div>
  );
}