import axios from 'axios';
import React, { useContext, useState } from 'react'
import { BsTypeH3 } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import './Signup.css'

const SignUp = () => {
   const [form , setForm] = useState({});
    const navigate = useNavigate();


    //importing global state from context
    const [userData, setUserData] = useContext(UserContext);
   
   

    const handelChange = (e) => {
 setForm({ ...form, [e.target.name]: e.target.value });
    };
   
    const handleSubmit = async(e) => {
      e.preverntDefault();
      try {
        // sending data to be registered in database 
        await axios.post('http://localhost:4000/api/users',form);

        //once registrerd the login automatically send the new user info to be logged in
        const loginRes = await axios.post('http:localhost:4000/api/users/login',{
          email: form.email,
          password: form.password
        });

        //set the global state with the new user info 
        setUserData({
          token: loginRes.data.token,
          user: loginRes.data.user
        });


        //set localstorage with the token 
        localStorage.setItem('auth-token', loginRes.data.token);
        
        //navigate to the homepage once the user is signed up 
        navigate("/");
      } catch (error) {
        console.log('problem ==>', error.response.data.msg);
      }
    }
  
  return (
    
    
    <div className="sign">
      <div className="signup">
        <h3>Join the net Works</h3>
        <p>Aleady have an account <a>Sign in</a></p>
        <form onSubmit={handleSubmit}>
          
          <input
            type="text"
            name="firstName"
            onChange={handelChange}
            placeholder="First Name"
          />
          

          <input
            type="text"
            name="lastName"
            onChange={handelChange}
            placeholder="Last Name"
          />
          <br />

          <input
            type="text"
            name="userName"
            onChange={handelChange}
            placeholder="User Name"
          />
          <br />

          <input
            type="text"
            name="email"
            onChange={handelChange}
            placeholder="Email"
          />
          <br />

          <input
            type="password"
            name="password"
            onChange={handelChange}
            placeholder="password"
          />
          <br />
          <button className="signup_button">Submit</button>
        </form>
        <Link to="/">Already have an account? </Link>
      </div>
      <div className="sign-networks">
        <h4>About</h4>
        <BsTypeH3>Evangadi Networks</BsTypeH3>
        <p>
          No matter what stage of life you are in, whether you’re just starting
          elementary school or being promoted to CEO of a Fortune 500 company,
          you have much to offer to those who are trying to follow in your
          footsteps. Wheather you are willing to share your knowledge or you are
          just looking to meet mentors of your own, please start by joining the
          network here.
        </p>
        <Link to="/login">
          <button>SIGN IN </button>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
