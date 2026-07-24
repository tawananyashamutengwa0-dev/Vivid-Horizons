
import { FaArrowUp } from "react-icons/fa";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import ExploreZimbabwe from "./components/ExploreZimbabwe";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/footer";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <ExploreZimbabwe/>
      <WhyChooseUs />
      <Testimonials />
      <Newsletter />
      <Footer/>

       <a href="#home" className="back-btn">
        <FaArrowUp />
        <span>Go Back</span>
      </a>
      
      
    </>
  );
}

export default App;