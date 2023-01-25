import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import './Login.css'
// import { AiOutlineEyeInvisible } from "react-icons/bs";




const Login = () => {
  const [userData, setUserData] = useContext(UserContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  const handelChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventdefault();
    try {
      //sending user dat to dabse to be logged in
      const loginRes = await axios.post(
        "http://localhost:4000/api/users/login",
        {
          email: form.email,
          password: form.password,
        }
      );
      //updata global state with response from backend(user-info)
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });

      //set localstorage with the token
      localStorage.setItem("auth-token", loginRes.data.token);

      //navigate user to homepage
      navigate("/");
    } catch (err) {
      console.log("problem", err.response.data.msg);
      alert(err.response.data.msg);
    }
  };

  useEffect(() => {
    if (userData.user) navigate("/");
  }, [userData.user, navigate]);

  return (
    <div>
     
      <div className="main">
        <div className="login">
          <h3>Login to your account</h3>
          <form onSubmit={handleSubmit}>
            {/* <label>Email:</label> */}
            <input type="text" name="email" onChange={handelChange}  placeholder="Email"/> <br />
            {/* <labal>Password:</labal> */}
            <input
              type="password"
              name="password"
              onChange={handelChange}
              placeholder="password "
            />
            <br />
            
            <button className="login_button">submit</button>
          </form>
          <Link to="/signup">Create a new account</Link>
        </div>
        <div className="main-networks">
          <h4>About</h4>
          <h3>Evangadi Networks Q&A</h3>
          <p>
            No matter what stage of life you are in, whether you’re just
            starting elementary school or being promoted to CEO of a Fortune 500
            company, you have much to offer to those who are trying to follow in<br/><br/>
            your footsteps. Wheather you are willing to share your knowledge or
            you are just looking to meet mentors of your own, please start by
            joining the network here.
          </p>
          <Link to="/login">
            <button>SIGN IN </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
