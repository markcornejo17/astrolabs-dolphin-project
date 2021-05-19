import React from 'react';
import { Link } from 'react-router-dom';

function LoginForm() {
    return (
    <div className="text-center position-absolute" id="text-center1"> 
    <img src="./dolphin-logo.jpeg" alt="logo" className="form-logo"/> 
    <div className="login-name">
    <h2>Log in to BDE</h2>
    <h6>using your BDE account</h6>
    </div>
    <div>
        <input type="email" placeholder="Email" className="email"></input>
        <div className="spaces"></div>
        <input type="password" placeholder="Password" className='password'></input>
     </div>
     <div className="little-space"></div>
     <div className="text-start">
         <input type="checkbox" className="checkbox"></input>
         <p className="checkbox">Remember me</p>
    </div>    
     <div className="little-space"></div>
     <button type="submit" className="btn btn-primary" id="button">Log in</button>
     <div className="little-space"></div>
     <Link to="/signup" style={{ textDecoration: 'none' }}>
     <p className="reminder">No account yet? Sign up</p>
     </Link>
     
</div>
    )
}

export default LoginForm

