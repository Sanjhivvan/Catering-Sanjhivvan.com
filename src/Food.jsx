import React from "react";
import Food2 from "./Food2";
import Navigationbar from "./Navigationbar";
function Food(){
    return(
        <>
        <Navigationbar/>
        <div className="container">
            <br/><br />
            <h1 style={{fontSize:"50px"}} className="mt-5">Sample Menu</h1>
        </div>
        <br/>
        <div className=" bg-dark">
        <div className="container text-white" style={{paddingLeft:"120px", paddingRight:"120px"}}>
<h1 style={{fontSize:"38px", paddingTop:"20px"}}>Seasonal Flavours</h1>
<h6>I’m a menu description. Click me and then “Edit Menu” to open the Restaurant Menu editor and change my text.</h6>
<br />
<br />
<br />
<h3>Appetizers</h3>
<div style={{height:"4px", backgroundColor:"white"}}></div>
<p>I’m a description for a section of your menu. Click me and then “Edit Menu” to open the Restaurant Menu editor and change my text.</p>
<br/>
        </div>

        <div className="container" style={{paddingLeft:"100px", paddingRight:"100px"}}>



        <div className="card-group">

            <div className="card bg-dark text-white ps-2px ">
                <div className="card-head">
                    <div className="card-title">
<h4>Idly (Rice Cake).................................................... India</h4>
                    </div>
                </div>
                <div className="card-body">
<p style={{marginLeft:"20px", marginRight:"20px"}}>Idli or idly are a type of savoury rice cake, originating from the Indian subcontinent, popular as breakfast foods in Southern India and in Sri Lanka. </p>
                
<div style={{display:"flex"}}>
                <div style={{border:"0px", borderRadius:"50px", backgroundColor:"white", width:"25px", color:"black", paddingLeft:"7px", marginRight:"10px"}}>V</div>
                <div style={{border:"0px", borderRadius:"50px", backgroundColor:"white", width:"25px", color:"black", paddingLeft:"7px"}}>X</div>
                </div>

                </div>
            </div>

            <div className="card bg-dark text-white ps-2px ps-2 pe-2">
                <div className="card-head">
                    <div className="card-title">
<h4>Capati........................................................ India</h4>
                    </div>
                </div>
                <div className="card-body">
<p style={{marginLeft:"20px", marginRight:"20px"}}>Capati is an unleavened flatbread originating from the Indian subcontinent and staple in India, Nepal, Bangladesh, Pakistan, Sri Lanka, East Africa, Arabian Peninsula and the Caribbean. </p>
                
<div style={{display:"flex"}}>
                <div style={{border:"0px", borderRadius:"50px", backgroundColor:"white", width:"25px", color:"black", paddingLeft:"7px", marginRight:"10px"}}>L</div>
                <div style={{border:"0px", borderRadius:"50px", backgroundColor:"white", width:"25px", color:"black", paddingLeft:"7px"}}>T</div>
                </div>

                </div>
            </div>
        </div>



        <div className="card-group">
        <div className="card bg-dark text-white ps-2px ps-2 pe-2">
                <div className="card-head">
                    <div className="card-title">
<h4>Nasi Lemak................................................... Malaysia</h4>
                    </div>
                </div>
                <div className="card-body">
<p style={{marginLeft:"20px", marginRight:"20px"}}>Nasi lemak is a dish originating in Malay cuisine that consists of fragrant rice cooked in coconut milk and pandan leaf.
It is the national dish of Malaysia. </p>
                
<div style={{display:"flex"}}>
                <div style={{border:"0px", borderRadius:"50px", backgroundColor:"white", width:"25px", color:"black", paddingLeft:"7px", marginRight:"10px"}}>M</div>
                <div style={{border:"0px", borderRadius:"50px", backgroundColor:"white", width:"25px", color:"black", paddingLeft:"7px"}}>N</div>
                </div>

                </div>
            </div>

            <div className="card bg-dark text-white ps-2px ps-2 pe-2">
                <div className="card-head">
                    <div className="card-title">
<h4>Thosai................................................................. India</h4>
                    </div>
                </div>
                <div className="card-body">
<p style={{marginLeft:"20px", marginRight:"20px"}}> Thosai is a thin batter-based dish originating from South India, made from a fermented batter predominantly consisting of lentils and rice. </p>
                
<div style={{display:"flex"}}>
                <div style={{border:"0px", borderRadius:"50px", backgroundColor:"white", width:"25px", color:"black", paddingLeft:"7px", marginRight:"10px"}}>S</div>
                <div style={{border:"0px", borderRadius:"50px", backgroundColor:"white", width:"25px", color:"black", paddingLeft:"7px"}}>K</div>
                </div>

                </div>
            </div>
        </div>



        <div className="card-group bg-dark" style={{marginBottom:"20px", paddingBottom:"20px", paddingTop:"20px"}}>
        <div className="card bg-dark text-white ps-2px ps-2 pe-2">
                <div className="card-head">
                    <div className="card-title">
<h4>Laddu(Dessert)..................................................... India</h4>
                    </div>
                </div>
                <div className="card-body">
<p style={{marginLeft:"20px", marginRight:"20px"}}>Laddu or laddoo is a spherical sweet originating from India. Laddus are primarily made from flour, fat and sugar. Laddus are often made of gram flour but can also be made with semolina.  </p>
                
<div style={{display:"flex"}}>
                <div style={{border:"0px", borderRadius:"50px", backgroundColor:"white", width:"25px", color:"black", paddingLeft:"6px", marginRight:"10px"}}>O</div>
                <div style={{border:"0px", borderRadius:"50px", backgroundColor:"white", width:"25px", color:"black", paddingLeft:"7px"}}>U</div>
                </div>

                </div>
            </div>

            <div className="card bg-dark text-white ps-2px ps-2 pe-2">
                <div className="card-head">
                    <div className="card-title">
<h4>Kheer(Payasam).................................................... India</h4>
                    </div>
                </div>
                <div className="card-body">
<p style={{marginLeft:"20px", marginRight:"20px"}}>Kheer is a sweet dish and a type of wet pudding popular in the Indian subcontinent, usually made by boiling milk, sugar or jaggery, and rice, although rice.  </p>
                
<div style={{display:"flex"}}>
                <div style={{border:"0px", borderRadius:"50px", backgroundColor:"white", width:"25px", color:"black", paddingLeft:"7px", marginRight:"10px"}}>V</div>
                <div style={{border:"0px", borderRadius:"50px", backgroundColor:"white", width:"25px", color:"black", paddingLeft:"7px"}}>X</div>
                </div>

                </div>
            </div>
        </div>


        
        </div>
        </div>
        <Food2/>
        
        </>
    )
}
export default Food;