import React from 'react';
import './Contact.css'

function Contact() {
    return (
      <div className='contact'>
        <div>
          <h1 className='tittle'>CONTACT</h1>
        </div>
          <div className='f-container'>
          <form className='f-form'>
              <input type="name" placeholder="Name" className='input-form'/>
              <input type="email" placeholder="Email" className='input-form'/>
              <input type="text" placeholder="subject" className='input-form'/>
              <textarea type="message" placeholder='Type your Message...' className='input-form text'/>
          </form>
          </div><br/>
          <div className='f-button'>
            <button className='f-btn'>Submit</button>
          </div>
      </div>
      
        
    );
  }
  
  export default Contact;