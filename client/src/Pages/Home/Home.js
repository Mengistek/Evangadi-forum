
import React, { useContext, useEffect } from 'react'
import {  useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext'
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import { BsPersonCircle } from "react-icons/bs";


const Home = ({ logout }) => {
    const [ userData, setUserData] = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!userData.user) navigate('/login');
    }, [userData.user, navigate]);

  return (
    <div>
      <h1>Welcome  {userData.user?.display_name}</h1>
       <button onClick={logout}>Log out</button>
       <div>
        <h1>Questions</h1>
        <PersonRoundedIcon />
        < BsPersonCircle />
        <p></p>
       </div>
    </div>
  )
}

export default Home;
