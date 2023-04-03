import React, {useState} from 'react';

function Hooks(){
    var state=useState();
    var[count,setCount]= useState(0)
    
    function Sanjhivvan(){
        setCount(count+1);
    };

    return(
        <>
        <div className="text-center">
            <h1 className="display-1">{count}</h1>
            <button type="button" className="btn btn-success btn-lg" onClick={Sanjhivvan}>
            Click Here
            </button>
        </div>
        </>
    );
};
export default Hooks;