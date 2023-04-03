import React from "react";
function Form(){
    return(
        <>
        <form  className="form" method="post">
            <div className="mb-3 mt-3 ms-2 " style={{width:"420px"}}>
                <label for="fname" className="form-label">First Name:</label>
                <input type="text" className="form-control" id="fname" placeholder="Enter First Name" name="fname" />
            </div>
            <div className="mb-3 mt-3 ms-2 " style={{width:"420px"}}>
                <label for="lname" className="form-label">Last Name:</label>
                <input type="text" className="form-control" id="lname" placeholder="Enter Last Name" name="lname" />
            </div>
            <div className="mb-3 mt-3 ms-2 " style={{width:"420px"}}>
                <label for="email" className="form-label">E-mail:</label>
                <input type="email" className="form-control" id="email" placeholder="Enter E-mail" name="email" />
            </div>
            <div className="mb-3 mt-3 ms-2 " style={{width:"420px"}}>
                <label for="pwd" className="form-label">Password:</label>
                <input type="text" className="form-control" id="pwd" placeholder="Enter Password" name="pwd" />
            </div>
            <div className="mb-3 mt-3 ms-2 " style={{width:"420px"}}>
                <label for="age" className="form-label">Age:</label>
                <input type="number" className="form-control" id="age" placeholder="Enter Age" name="age" />
            </div>

            <div className="mb-3 mt-3 ms-2" >
                <label for="pp" className="form-check-label">Privacy Policy:</label>
                <input type="checkbox" className="form-check-input" id="pp" name="pp" />
            </div>

            <div className="mb-3 mt-3 ms-2" >
                <label for="tac" className="form-check-label">Terms and Conditions:</label>
                <input type="checkbox" className="form-check-input" id="tac" name="tac" />
            </div>

            <button type="submit" className=" ms-2 btn btn-outline-info btn-lg">Submit</button>
        </form>
        </>
    );
};
export default Form;