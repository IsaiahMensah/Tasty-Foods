import Reserve from '../pages/reservations/Reserve';
// import Aboutpage from '../components/pages/Aboutpage'
import About from "../about/About";
import Hero from "../hero/Hero";
import Contact from "../contact/Contact"
import Map from "../map/Map"
import Openninghours from '../openninghours/Openninghours';
import Login from '../login/Login';
import ImageSlider from "../ImageSlider"
import  {SliderData}  from '../SliderData';

function Homepage() {
  return (
    <div className="homepage">
      {/* <Aboutpage/> */}
      <Hero />
      <About />
      
      
      <ImageSlider slides={SliderData} />
      {/* <Reserve/> */}
      <Contact/>
      <Map/>
      <Openninghours/>
      <Login/>
    </div>
  );
}

export default Homepage;
