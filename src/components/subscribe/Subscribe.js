import React from "react";
import "./Subscribe.css"

function Subscribe() {
    return (
      <div className="subscribe">
        <div className="s-container">
        <div className="sub-text">
         <h6 className="head">Subscription Form</h6> 
        </div>
          <div className="s-form">
            <input type="email" placeholder="example123@gmail.com" className="sub-form" required/>
            <button classname="sub-btn">Join</button>
          </div>
          
           <div className="s-text">
           <h1 className="goodfood">GoodFood</h1>
             <p className="info">info@mysite.com</p>
             <p className="info">Created by Isaiah Mensah | Copyright©2022 </p>
           </div>
          
        </div>
      </div>
    );
  }
  
  export default Subscribe;