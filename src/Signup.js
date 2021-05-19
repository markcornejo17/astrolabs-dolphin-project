import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// RegEx (Regular Expressions)
const validateEmail = (email) => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

const validatePassword = (password) => {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,16}$/;
    return re.test(password);
}

function Signup() {

    const [state, setState] = useState("initial");
    const [errorsState, setErrorsState] = useState([])

   // Declare undefined variables for later assignment (ref props)
   let departmentNameField;
   let emailField;
   let passwordField;


   // To instantiate a FormData object
   const formData = new FormData();

   const register = () => {

       const errors = [];

      

       // 1. Validate the fields
       if(departmentNameField.value.length == 0) {
           errors.push("Please enter your first name");
       }
       if(!validateEmail(emailField.value)) {
           errors.push("Please enter a valid email address");
       }
       if(!validatePassword(passwordField.value)) {
           errors.push("Please enter a valid password");
       }

       // 1.1 If there are errors, set the state to "validation error"
       if(errors.length > 0) {
           setState("validation error");
           setErrorsState(errors);
       }
       // 1.2 If there are no errors, set the state to "sending"
       else {
           setState("sending");
           setErrorsState([]);

           formData.append('department-name', departmentNameField.value);
           formData.append('email2', emailField.value);
           formData.append('password2', passwordField.value);
          
            // need to change the REACT_APP_API_ENDPOINT for the real backend file (FOR BACKEND PURPOSES)

            setState("successful")  // to remove this when connected to back-end

            /*  <<<--------   To remove comment when connected to back-end    

           fetch(`${process.env.REACT_APP_API_ENDPOINT}/user/add`, {
               method: 'POST',
               //headers: {"Content-Type": "application/json"},
               body: formData
           })
           // 2.1 If the submission is successful, set the state "successful"
           .then((backendResponse)=> backendResponse.json())
           .then((theJson)=>{
               console.log(theJson);
               setState("successful");
           })
           // 2.2 If the submission is unsuccessful, set the state "unsuccessful"
           .catch((error)=>{
               console.log(error);
               setState("unsuccessful")
           });    To remove comment when connected to back-end      ----->>>>> */ 
       }
   }


    return (
        <div className="text-center" id="names"> 
                <div className="spaces"></div>
                <h2>Welcome</h2>
                <h1>Blue Dolphin Engagement</h1>
                <div className=""></div>
                <h3>Sign Up</h3>
            <div className="names">
                <div className="spaces"></div>
                <input ref={ (elem)=> departmentNameField = elem }  type="text" placeholder="Department Name*" className="department-name"></input>
            </div>
                <div className="spaces"></div>
            <div>
                <input ref={ (elem)=> emailField = elem }  type="email" placeholder="Department Email*" className="email2"></input>
                <div className="spaces"></div>
                <input ref={ (elem)=> passwordField = elem }  type="password" placeholder="Password*" className='password2'></input>
             </div>
             <div className="little-space"></div>
             <div>
                 <input type="checkbox" className="checkbox"></input>
                 <p className="checkbox2">I want to receive updates and promotions via email</p>
             </div>   
             <div className="little-space"></div>

            {
                state !== "sending" && state !=="successful" &&
                <button 
                onClick={register}
                type="submit" className="btn btn-secondary" id="button2">Sign Up</button>
            }
             
             <div className="little-space"></div>

            {
                state !== "sending" && state !=="successful" &&
            <Link to="/login" style={{ textDecoration: 'none' }}>
                <p className="reminder">Already have an account? Log in</p>
             </Link>
            
            }    

            {
                state === "validation error" &&
                <div className="alert alert-danger" role="alert">
                <ul>
                   {
                       errorsState.map(
                        (error) => <li>{error}</li>
                       )
                   }
                   </ul>
                </div>
            }

            {
                state === "successful" &&
                <div className="alert alert-success" role="alert">
                 Registration successful.
                </div>
            }

            {   
                state === "unsuccessful" &&
                <div className="alert alert-danger" role="alert">
                 Internal error. Please try again later.
                </div>
            }

            { 
                state === "sending" &&
                <p>Loading...</p>
            }
        </div>
    )
}

export default Signup
