import './Aboutpage.css'
import food from '../../../images/restaurant1.avif'

function Aboutpage() {
  return (
    <div className="aboutpage">
      <div className="col">
        <img src={food} width="100%" height="100%" alt="" />
      </div>
      <div className="col">
        <h2 className='a-b'>ABOUT US</h2>
        <p className="a-p">
          Honest Cooking My Site has been nestled in the San Francisco area ever
          since 2000. This cozy establishment highlights our passion for
          market-fresh ingredients, honest cooking, and an enjoyable atmosphere.
          Our menu features a selection of dishes, all made in-house by our team
          of talented chefs. With some of the most delicious combinations of
          ingredients, there is something for everyone to enjoy. Loved by locals
          and traveling foodies alike, now is the perfect time for you to join
          us today at My Site. MY SITE Home About About the Chef Our Team
          Feedback Online Ordering Shop Menus Blog 0 My Site info@mysite.com
          ©2022 by My Site. Proudly created with Wix.com
        </p>
      </div>
    </div>
  );
}

export default Aboutpage;