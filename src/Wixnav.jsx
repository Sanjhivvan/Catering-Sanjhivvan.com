import React from "react";
import { NavLink } from "react-router-dom";
function Wixnav()
{
    return(
        <>
         <div className='bg-dark text-white' style={{width:"20%"}}>
       <h2></h2>
       <h6 className='mb-4'></h6>
     </div>
     
     <nav className="navbar navbar-expand-sm bg-warning" style={{paddingLeft:"295px", fontSize:"20px", height:"60px", paddingTop:"20px"}}>
     
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ">

        <li className="nav-item" style={{marginRight:"50px"}}>
          <NavLink style={{marginLeft:"100px"}}className="nav-link active text-dark nli" to="/">Home</NavLink>
        </li>
        <li className="nav-item" style={{marginRight:"50px"}}>
          <NavLink className="nav-link text-dark nli" to="/collection">Collection</NavLink>
        </li>

        <li className="nav-item" style={{marginRight:"50px"}}>
          <NavLink className="nav-link text-dark nli" to="/aboutus">About Us</NavLink>
        </li>

        <li className="nav-item" style={{marginRight:"50px"}}>
          <NavLink className="nav-link text-dark nli" to="">Contact</NavLink>
        </li>

        <li className="nav-item" style={{marginRight:"50px"}}>
          <NavLink className="nav-link text-dark nli" to="">FAQ</NavLink>
        </li>

        <li className="nav-item" style={{marginRight:"50px"}}>
          <NavLink style={{marginLeft:"107px"}} className="nav-link text-dark nli" to=""> <img src="https://previews.123rf.com/images/stringerphotography/stringerphotography1512/stringerphotography151201738/49087352-a-black-icon-isolated-on-a-yellow-background-person.jpg" width="30px" alt="Loading" /> Log In</NavLink>
        </li>

        <li className="nav-item" style={{marginRight:"50px"}}>
          <NavLink  className="nav-link text-dark nli" to=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST97fXDiDrx8xWr-4QGgkb9mDQ7nHbQTXkAw&usqp=CAU" width="40px" height="40px" alt="" /></NavLink>
        
      
        </li>
        
      </ul>
      
    </div>
</nav>

<br/>
        </>
    );
}
export default Wixnav;