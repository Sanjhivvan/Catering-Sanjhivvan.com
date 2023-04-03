import React from "react";
import Navigationbar from "./Navigationbar";
function Contact(){
    return(
        <>
<Navigationbar/>
<h1 style={{fontSize:"50px"}} className="mt-3 ms-5">Contact</h1>

        <div className="bg-dark p-3 text-white">

            <div className="card-group">
                <div className="card bg-dark " style={{marginLeft:"220px", marginTop:"50px"}}>
                    <h1>
                    We can't wait to 
                    <br/>
                    hear from you
                    </h1>
<br />
<br />

<div style={{display:"flex"}}>
                    <p>
                        500 Terry Francois St.
                        <br/>
                        San Francisco,
                        <br />
                        CA 94158
                        </p>

                        <p className="ms-5">
                            info@mysite.com
                            <br />
                            Tel: 123-456-7890
                            </p>
                            </div>

                </div>

                <div className="card bg-dark">
                    <img width="600px" height="500px" src="https://www.eatthis.com/wp-content/uploads/sites/4/2021/10/Gordon-Ramsay-breakfast.jpg?quality=82&strip=all" alt="Loading" />
                </div>
            </div>

<br />
<br />

            <div className="card-group">

                <div className="card bg-dark" style={{paddingLeft:"220px", paddingRight:"0px"}}>
<h2 >Request a Quote, We’ll <br /> Get Back to You Shortly</h2>
<img height="400px" width="300px" src="https://static.wixstatic.com/media/c837a6_ce29647640d84d42a433d657d456db42~mv2.jpg/v1/crop/x_1479,y_50,w_3145,h_3941/fill/w_506,h_634,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/shutterstock_1684503178.jpg" alt="Loading" />
                </div>

                <div className="card bg-dark">
<form action="#">

  
    <label for="fname">First Name</label>
    <br />
    <input type="text"  style={{width:"550px"}}/>
    <br />
    <br />
    <label for="lname">Last Name</label>
    <br />
    <input type="text"  style={{width:"550px"}}/>
    <br /><br />
    <label for="email">Email</label>
    <br />
    <input type="email"  style={{width:"550px"}}/>
    <br />
    <br />
    <label for="event">Type of Event</label>
    <br />
    <input type="text"  style={{width:"550px"}}/>
    <br />
    <br />
    <label for="sdate">Select A Date</label>
    <br />
    <input type="date"  style={{width:"550px", height:"30px"}}/>
    <br />
    <br />
    <label for="lname">Write A Message</label>
    <br />
    <br />
    <input type="text"  style={{width:"550px"}}/>
   
</form>
                </div>

            </div>
        </div>
        </>
    );
}
export default Contact;