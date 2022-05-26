import './About.css'
import food from '../../images/meat-1155132.jpg'

function About() {
  return (
    <div className="a-about">
      <div className="col">
        <img src={food} width="100%" height="100%" alt="" />
      </div>
      <div className="col">
        <h2>ABOUT</h2>
        <p className='a-p'>
          Proud to Serve You Founded in 2000, My Site is known for
          revolutionizing the way people eat and enjoy food. We take pride in
          our ability to discover the most unique flavors from around the world
          and share them with the San Francisco area. Join us.
        </p>
      </div>
    </div>
  );
}

export default About;
