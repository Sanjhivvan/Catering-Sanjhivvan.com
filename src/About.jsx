import React from "react";
import Navigationbar from "./Navigationbar";


const About = () =>{
return(
    <>
    <Navigationbar/>
    <div style={{backgroundColor:"black",color:"white"}}>
        <div className="card-group">
            <div className="card">
                <div className="card-body bg-dark">
                    <h1 style={{fontSize:"70px"}}>Our Story</h1>
                    <p style={{fontSize:"38px"}}>It all began one snowy day in Jessica's kitchen.</p>
                    <p style={{fontSize:"20px"}}>I'm a paragraph. Click here to add your own text and edit me.
                         It’s easy. Just click “Edit Text” or double click me and you can 
                         start adding your own content and make changes to the font. Feel free
                          to drag and drop me anywhere you like on your page. I’m a great place 
                          for you to tell a story and let your users know a little more about you.
                    </p>

                    <p style={{fontSize:"20px"}}>
                    This is a great space to write long text about your company and your 
                    services. You can use this space to go into a little more detail about 
                    your company. Talk about your team and what services you provide. Tell 
                    your visitors the story of how you came up with the idea for your business
                     and what makes you different from your competitors. Make your company stand
                      out and show your visitors who you are.
                    </p>
                </div>
            </div>
            <div className="card">
                <div className="card-body bg-dark">
                    <img src="https://www.gordonramsayrestaurants.com/assets/Uploads/_resampled/CroppedFocusedImage1920108050-50-RGR-summer-2019-dessert.jpg" 
                    height="700px" width="680px"/>
                </div>
            </div>

        </div>
        <div className="card-group">
            <div className="card">
                <div className="card-body bg-dark">
                <img src="https://i.pinimg.com/originals/43/6e/39/436e3988e6906a2b57ccd16f34193a23.png" height="300px" width="445px"/>
                </div>
            </div>
            <div className="card">
                <div className="card-body bg-dark">
                    <img src="https://www.honestbrandreviews.com/wp-content/uploads/2021/06/Gordan-Ramsay-Masterclass-1-1024x1024.jpg" 
                    height="300px" width="445px"/>
                </div>
            </div>
            <div className="card">
                <div className="card-body bg-dark">
                    <img src="https://funender.com/wp-content/uploads/2019/01/What-You-Need-to-Know-about-Healthy-Indian-Cuisine.jpeg"
                     height="300px" width="445px"/>
                </div>
            </div>
        </div>
    </div>
    </>
)
}
export default About;