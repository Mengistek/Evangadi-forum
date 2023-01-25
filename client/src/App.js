import { useContext, useEffect } from 'react';
import './App.css';
import { UserContext } from './context/UserContext';
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './Pages/SignUp/SignUp';
import Home from './Pages/Home/Home';
import  Login  from './Pages/Login/Login';
import Header from './Header'
import Footer from './Footer/Footer';
import Main from './Main.js/Main';

function App() {
  const [userData, setUserData] = useContext(UserContext);


  const checkLoggedIn = async () => {

    let token = localStorage.getItem('auth-token');
    if(token === null) {

      //token not in localStorege then set auth token empty
      localStorage.setItem('auth-token', '');
      token = "";
          } else {
            //if token exists in localStorege then use auth to verify token and get user info
            const userRes = await axios.get('http://localhost:4000/api/users',{
              headers: { 'x-auth-token': token }
            });

            //set the global state with user info
            setUserData({
              token ,
              user: {
                id: userRes.data.data.user_id,
                display_name: userRes.data.data.user_name
              }
            })
          }
  }
      const logout = () => {

        //set global state to undefined will logout user
        setUserData({
          token: undefined,
          user: undefined,
        });

        //resetting localstorege
        localStorage.setItem('auth-token', '');
      };
  useEffect(() => {
    //check if the user is logged in
    checkLoggedIn();
  }, []);
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route path="/" element={<Login />} />

          {/* passing logout function as props to home page */}
          <Route
            path="/"
            element={
              <>
                <Home logout={logout} />
                 <Header/>
              </>
            }
          />
        </Routes>

        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
