import React from "react";
function abc()
{
    alert("Thankyou for subscribing")
}
function Subscribe(){
    return( 
    <>
<section>

    <div style={{display:"flex"}}>
    <div className="col-lg-7">
<h1 className="fontFamily" style={{marginTop:"200px", marginLeft:"100px", fontFamily:"Verdana"}}>Subscribe to Our <br/>Newsletter for Updates <br/>and Special Offers</h1>
    

    <div style={{ marginLeft:"100px", fontFamily:"Verdana", marginTop:"20px"}}>

        <form action="https://reactjs.org/docs/handling-events.html">
        <label style={{fontSize:"18px"}} for="e-mail">E-mail Address*</label>
        <br/>
    <input style={{width:"500px", height:"40px", borderLeft:"none", borderRight:"none", borderTop:"none",}} type="email" required/>
    <button className="btn btn-outline-dark ms-4 buttom" onClick={abc} >Subscribe</button>
   
 
  
    </form>
    </div>

    </div>

    <div className="col-lg-5" style={{padding:"80px"}}>
<img height="600px" width="475px" src="https://c8.alamy.com/comp/J6EXYG/holiday-event-people-cheering-each-other-with-champagne-and-vodka-J6EXYG.jpg" alt="Loading" />
    </div>
    </div>
</section>
    </>
        )  
    }
    export default Subscribe;