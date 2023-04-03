import React from "react";
function Form2(){
    return(
        <>
        <div style={{backgroundColor:"purple",paddingBottom:"20px", paddingTop:"20px", paddingLeft:"500px", paddingRight:"500px" }}>
        <form method="post" style={{width:"600px", color:"white"}} className="was-validated">
            <h1>User Registration</h1>

            <div className="mb-3 mt-3 " style={{width:"420px"}}>
            <label for="fname" className="form-label">Full Name:</label>
                <input type="text" className="form-control" id="fname" placeholder="Enter Full Name" name="fname" style={{ height:"40px"}} required />
            </div>

            <div className="mb-3 mt-3  " style={{width:"420px"}}>
                <label for="email" className="form-label">E-mail:</label>
                <input type="email" className="form-control" id="email" placeholder="Enter E-mail" name="email" style={{ height:"40px"}} required />
            
            <div className="valid-feedback">Valid Email</div>
            </div>

            <div className="mb-3 mt-3  " style={{width:"420px"}}>
                <label for="mn" className="form-label">Mobile No:</label>
                <input type="number" className="form-control" id="mn" placeholder="Enter Mobile Number" name="mn" style={{ height:"40px"}} required />
            
            <div className="valid-feedback">Valid Phone Number</div>
            </div>

            <div className="mb-3 mt-3  " style={{width:"220px"}}>
                <label for="dob" className="form-label">Date of Birth:</label>
                <input type="date" className="form-control" id="dob" placeholder="Enter Date of Birth" name="dob" style={{ height:"40px"}} required />
            </div>

            <div className="mb-3 mt-3 " style={{width:"420px"}}>
            <label for="uname" className="form-label">Username:</label>
                <input type="text" className="form-control" id="uname" placeholder="Enter Username" name="uname" style={{ height:"40px"}} required />
            
             <div className="valid-feedback">Valid Username</div>
            </div>

            <div className="mb-3 mt-3 " style={{width:"420px"}}>
            <label for="pwd" className="form-label">Password:</label>
                <input type="password" className="form-control" id="pwd" placeholder="Enter Password" name="pwd" style={{ height:"40px"}} required />
            
             <div className="valid-feedback">Valid Passwrod</div>
            </div>

            <div className="mb-3 mt-3 " style={{width:"420px"}}>
            <label for="cpwd" className="form-label">Confirm Password:</label>
                <input type="password" className="form-control" id="cpwd" placeholder="Confirm Password" name="cpwd" style={{height:"40px"}} required />
            </div>

            <div className="mb-3 mt-3 ms-2" >

                <label className="form-label" for="gender">Gender:</label>
                <br />
            <input type="radio" id="male" name="gender" className="form-check-input" value="male"/>
                <label for="male" className="form-check-label">Male</label>
                <br/>
                <input type="radio" id="female" name="gender" className="form-check-input" value="female"  required/>
                <label for="female" className="form-check-label">Female</label>
            </div>

            <div className="mb-3 mt-3 " style={{width:"420px"}}>
            <label for="pinc" className="form-label">Pincode:</label>
                <input type="number" className="form-control" id="pinc" placeholder="Enter Pincode" name="pinc" style={{ height:"40px"}} required />
            
            <div className="valid-feedback">Valid Pincode</div>
            </div>

            <div className="mb-3 mt-3 " style={{width:"420px"}}>
            <label for="country" className="form-label">Country:</label>
<br />
<select name="country" id="country" style={{width:"200px", height:"40px"}} required>
<option value="" disabled selected hidden>Select Country</option>
  <option value="China">China</option>
  <option value="India">India</option>
  <option value="Malaysia">Malaysia</option>
  <option value="Japan">Japan</option>
  <option value="Singapore">Singapore</option>
  <option value="South Korea">South Korea</option>
  <option value="Thailand">Thailand</option>
  <option value="Indonesia">Indonesia</option>
  <option value="Brunei">Brunei</option>
  <option value="Myanmar/Burma">Myanmar/Burma</option>
  <option value="Nepal">Nepal</option>
  <option value="Bhutan">Bhutan</option>
</select>
            </div>
            <br />

            <button type="submit" className="btn btn-outline-success me-3">Submit</button>
            <button type="reset" className="btn btn-outline-warning">Reset</button>
        </form>

        </div>


        </>

    );
};
export default Form2;

