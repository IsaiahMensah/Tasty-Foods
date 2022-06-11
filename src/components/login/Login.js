import React from "react"
import "./Login.css"

function Login () {
    return(
        <div className="l-container">
            
        <div className="login-page">
            <div className="form">
                <form className="register-form  ">
                    <input type="text" placeholder="user-name"/>
                    <input type="text" placeholder="password"/>
                    <input type="text" placeholder="Email"/>
                    <button>Create</button>
                     <p className="message">Already Registered? <a href="">LogIn</a></p>
                </form>
                <form className="login-form  ">
                    <input type="text" placeholder="user-name"/>
                    <input type="text" placeholder="password"/>
                   
                    <button>LogIn</button>
                     <p className="message">Not Registered? <a href="">SignUp</a></p>
                </form>
            </div>
           
        </div>
        {/* <script src="https://code.jquery.com/jquery-3.6.0.min.js">
            
            </script>
       
            <script>
                
             $ ('.message a').click(function () {
                 $ ('form').animate({height:"toggle", opacity:"toggle"}, "slow")
              })
            </script> */}
        </div>
        
    )
}

export default Login 