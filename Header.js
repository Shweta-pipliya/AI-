import React from 'react'
import "./Header.css";
import img1 from "../assests/images/Image.svg";
function header() {
  return (
    <>



      
<nav className=" fixed-top  p-n">
  <div className="container-fluid">
    <div className='img'>
    <img src={img1} className="d-block w-100 img" alt="..." />
    </div>
    <div className='head start-40'>   <h className="head" href="#">Distractions AI
    </h>
    </div> 
  
        <div className=" Sign ">
          <h className="heading" aria-current="page" href="#">Sign in</h>
        
        
     
    
          </div>
  </div>
</nav>







    </>
  )
}

export default header