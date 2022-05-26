import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../images/breakfast .jpg"
import{AiOutlineMenu} from "react-icons/ai"
import {GiShoppingBag} from "react-icons/gi"

function Navbar() {
  return (
    <div className="navbar">
      <div className="n-left">
        <div className="n-logo">
          <img src={logo} alt=""/>
        </div>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="order">OnlineOdering</Link></li>
            <li><Link to="/shop">Shop</Link> </li>
           
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/aboutchef">About The Chef</Link>
            </li>
            <li><Link to="/ourteam">OurTeam</Link></li>
            <li><Link to="/feedback">Feedback</Link></li>
            
            <li><Link to="/reserve">Resevations</Link></li>
          </ul>
        </div>
        <div className="n-shopping">
          <GiShoppingBag className="bag"/>
        </div>
        <div className="signup-btn">
          <button><Link to="/signup
          ">SignUp</Link></button>
        </div>
        <div className="n-menu">
            <AiOutlineMenu className="menu"/>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
