import React from 'react'
import './Base.css';
const logo = new URL("./images/Antique.jpeg",import.meta.url)
function Base() {
  return (
    <div>


      <head><meta name="viewport" content="width=device-width, initial-scale=1"></meta></head>

  <div class="row">
  <div class="column1">
  <div>
    <img src={logo} alt='logo' class="image"/>
   </div>
  <div class="login">
 
    <h2>LOGIN</h2>
    <p >Get access to your orders, wishlist and recommendations.</p></div>
  </div>
  </div>
  
  



  <div class="column2">
    
  
    <form>

      <div>
   <input type="text" class="number" name="number" placeholder="+91 9080210373"></input><span class="change">Change?</span>
   </div>

   <div class="text">
    <p>OTP sent to Mobile<span class="resend">Resend?</span></p>
   </div>
   <div>
   <input type="text" class="otp" name="otp" placeholder="Enter OTP"></input>
   </div><br></br>

   
   <div class="pass">
   <input type="text" class="password" name="password" placeholder="Set Password"></input><br></br>
   </div>
   </form><br></br>
   

  <div class="btn1">
    <button type='button' class="btn">LOGIN</button>
    </div>
    
   </div> 








</div>

   
  )
}

export default Base