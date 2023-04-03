import React from "react";
function Cardgroup(){
    return(
    <>
    
        <section className="mt-5 pt-5 pb-5" style={{backgroundColor:"black", color:"white"}} >
        <h1 className="mb-5 text-center">What makes us different?</h1>
<div className="container">
<div className="row">

        <div class="col-lg-4 col-md-12 col-sm-12">
<div class="card mb-5 px-3 "  style={{width: '100%', height: '150px', fontFamily: 'Lucida Sans', backgroundColor:"black", borderLeft:"1px solid white", 
borderRight:"1px solid white", fontFamily:"Verdana"}} >
    <div class="card-body ">
        <h2 class="card-title  ">Personal Touch</h2>
        <p class="">  We will work with you to create a menu that fits your taste, budget and style.</p>
    </div>
</div>
</div>

<div class="col-lg-4 col-md-6 col-sm-12">
<div class="card mb-5 px-3 " style={{width: '100%', height: '150px', fontFamily: 'Lucida Sans', backgroundColor:"black",  fontFamily:"Verdana"}}>
    <div class="card-body">
        <h2 class="card-title ">Devoted Team</h2>
        <p class="">Our team of professionals includes chefs, servers and bartenders committed to making your event spectacular.</p>
    </div>
</div>
</div>

<div class="col-lg-4 col-md-6 col-sm-12">
<div class="card mb-5 px-3 " style={{width: '100%', height: '150px', fontFamily: 'Lucida Sans', backgroundColor:"black", borderLeft:"1px solid white", 
borderRight:"1px solid white", fontFamily:"Verdana"}}>
    <div class="card-body">
        <h2 class="card-title  ">Unmatched Quality</h2>
        <p class="">Locally sourced produce and the freshest ingredients means food that is exceptional in taste.</p>
            </div>
            </div>
            </div>

            </div>
            </div>
    </section>
    </>
    );
}
export default Cardgroup;