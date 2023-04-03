import React from "react";
import Navigationbar from "./Navigationbar";
const Services = () =>
{
    return(
        <>
        <Navigationbar/>
         <div style={{backgroundColor:"black",color:"white"}}>
        <div className="card-group">
            <div className="card">
                <div className="card-body bg-dark">
                    <h1 style={{fontSize:"70px"}}>Services</h1>
                    <p style={{fontSize:"38px"}}>Weddings</p>
                    <p style={{fontSize:"20px"}}>We provide best quality veg non-veg food for weddings as 
                    per the requirement and demand the family. Our vegetables are very organic and fresh. In wedding we provide the following food: 
                    <p>
                        i.Idli <br />
                         ii.Sambar <br />
                         iii.Nasi Lemak <br />
                         iv.Puddu <br />
                         v.Roti Canai <br />
                         vi.Rice <br />
                         vii.Capati <br />
                         viii. Poori <br />
                         x.Rasam 
                    </p>
                    </p>
                
                </div>
            </div>


            <div className="card">
                <div className="card-body ">
                    <img src="https://www.gordonramsayrestaurants.com/assets/Uploads/_resampled/CroppedFocusedImage1920108050-50-RGR-summer-2019-dessert.jpg" 
                    height="500px" width="600px"/>
                </div>
            </div>

        </div>
        </div>

        <div>
        <div className="card-group">

        <div className="card">
                <div className="card-body ">
                    <img src="https://charmweddings.com/wp-content/uploads/2019/04/Reception-Food1_1-1024x683.jpg" 
                    height="500px" width="680px"/>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <br />
                    <br />
                    <br />
                    <br />
                    <h3 style={{fontSize:"38px"}}>Corporate Events</h3>
                    <br />
                    <br />
                    <p style={{fontSize:"20px"}}> 
                    All major corporate events order food from us. Famous people like CEO of Tesla, Elon Musk and Creator of Facebook, Mark Zuckerburg, Founder of Microsoft, Bill Gates and the US President, Joe Biden are our regular customers.
                    </p>
                
                </div>
            </div>
            

        </div>
        </div>


        <div>
        <div className="card-group">
            <div className="card">
                <div className="card-body">
                
                    <br />
                    <br />
                    <br />
                    <br />
                    <h3 style={{fontSize:"38px"}}>Social Events</h3>
                    <br />
                    <br />
                    <p style={{fontSize:"20px"}}> 
                    We deliver food to social events like weddings, birthday parties, anniversaries and many more. We deliver food to the United Nations' so everyone will be healthy and fit. 
                    </p>
                
                </div>
            </div>
            <div className="card">
                <div className="card-body bg-dark">
                    <img src="https://imgix.bustle.com/uploads/image/2017/11/21/ffd9a30e-5208-48b3-bb85-cd384b5c66a2-spg308b_0285b.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg" 
                    height="500px" width="650px"/>
                </div>
            </div>

        </div>
        </div>

        </>
    )
}
export default Services;