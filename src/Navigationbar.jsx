import React from "react";
import { NavLink } from "react-router-dom";
function Navigationbar()
{
    return(
        <>
         <div className='container text-center bg-dark text-white' style={{width:"20%"}}>
       <h2>Ambrosia </h2>
       <h6 className='mb-4'>Catering Company</h6>
     </div>
     
     <nav class="navbar navbar-expand-sm bg-warning" style={{paddingLeft:"200px", paddingRight:"200px", fontSize:"20px", height:"60px"}}>
     
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ">
        <li class="nav-item m-3">
          <NavLink class="nav-link active text-dark nli" to="/">Home</NavLink>
        </li>
        <li class="nav-item m-3">
          <NavLink class="nav-link text-dark nli" to="/about">About</NavLink>
        </li>

        <li class="nav-item m-3">
          <NavLink class="nav-link text-dark nli" to="/services">Services</NavLink>
        </li>

        <li class="nav-item m-3">
          <NavLink class="nav-link text-dark nli" to="/samplemenu">Sample Menu</NavLink>
        </li>

        <li class="nav-item m-3">
          <NavLink class="nav-link text-dark nli" to="/order">Order Online</NavLink>
        </li>

        <li class="nav-item m-3">
          <NavLink class="nav-link text-dark nli" to="/client">Client Reviews</NavLink>
        </li>

        <li class="nav-item m-3">
          <NavLink class="nav-link text-dark nli" to="/contact">Contact</NavLink>
        </li>
        
      </ul>
      
    </div>
</nav>

<br/>
        </>
    );
}
export default Navigationbar;