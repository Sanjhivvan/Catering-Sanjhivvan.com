import React from "react";
import Cardgroup from "./Cardgroup";
import Carousel from "./Carousel";
import Navigationbar from "./Navigationbar";
import Subscribe from "./Subscribe";
function Home()
{
    return(
        <>
            <Navigationbar/>
            <Carousel/>
            <Cardgroup/>
            <Subscribe/>
        </>
    );
}
export default Home;