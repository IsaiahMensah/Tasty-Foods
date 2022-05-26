import './Aboutchef.css'
import chef from '../../../images/chef.avif'

function AboutChef() {
  return (
    <div className="aboutchef">
      <div className="col">
        <img src={chef}  width="100%" height="100%" alt="" />
      </div>
      <div className="col">
        <h2>ABOUT THE CHEF</h2>
        <p className='a-p'>
          My name is isaiah and im the headchef of this restaurant i have been a chef for more than 6 years and counting,
          i make sure i give you the best of meals money can buy.<br/>you can contact me on<br/>
          <label>Email</label>
          <p>mensahisaiah313@gmail.com</p>
          <label>Phone</label>
          <p>0552610220</p>
          <label>Social media Platform</label>
          <p>@_Mensah_Isaiah</p>
        </p>
      </div>
    </div>
  );
}

export default AboutChef;
