import React from 'react'
import './Loginpage.css';


const logo = new URL("./images/Antique.jpeg",import.meta.url)
function Loginpage() {

  
  return (
   
    <div>
      <head><meta name="viewport" content="width=device-width, initial-scale=1"></meta></head>
  <div class="row">
  <div class="column-left">
    
  <div>
    <img src={logo} alt='logo' class="image"/>
   </div>

  <div class="login">
    <h2 class="h2">LOGIN</h2>
    <p >Get access to your orders, wishlist and recommendations.</p></div>
  </div>



  <div class="column2">

  <div>
    <form>
      <div>
   <input type="text" class="email" name="firstname" placeholder="Enter Email/Mobile Number"></input><br></br></div>
   <div>
<input type="text" class="password" name="lastname" placeholder="Enter Password"></input><br></br>
<div class="forgot"> <p>Forgot?</p></div></div>

    
  </form>
  </div>
 
  <div class="btnp">
  <div class="statement">
  <p>By continuing, you agree to Paperwall <span class="txt"> Terms of use </span> and <span class="txt"> Privacy Policy.</span></p>
 </div>

  <div class="register">
 
  <button type='button' class="btn">LOGIN</button></div><br></br>
     
  
  
 
  </div>
  <div class="para"> <p>Don't have an account? <span class="rg">Register now</span></p></div>
  </div>
  
   
   

</div>

   </div>
 
  )
}

export default Loginpage
        
        
        
        
    
