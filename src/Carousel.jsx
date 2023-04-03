import React from "react";
function Carousel(){
    return(
        <>
        
<h1 className='text-center'>Redefining Food and Event Production</h1>
<br/>
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://wallpaperaccess.com/full/767048.jpg" class="d-block w-100" alt="" height="700" width="100%"/>
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGVsaWNpb3VzJTIwZm9vZHxlbnwwfHwwfHw%3D&w=1000&q=80" class="d-block w-100"   height="700" width="100%" alt="..."  />
    </div>
    <div class="carousel-item">
      <img src="https://images-na.ssl-images-amazon.com/images/I/A1dpvHYpRJL.jpg"  height="700" width="100%" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

        </>
    );
}
export default Carousel;