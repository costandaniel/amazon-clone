import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import React, { useEffect } from 'react';
import { auth } from './components/firebase';
import { useStateValue } from './StateProvider';


function App() {
  const [{},dispatch] = useStateValue();
  useEffect(() => {
    //only run once when the app component loads
    auth.onAuthStateChanged(authUser => {
      console.log('The user is >>> ', authUser);

      if(authUser) {
        //the user just logged in / was logged in
          dispatch({
            type:'SET_USER',
            user:authUser
          })
      } else {
        //logged out
        dispatch({
          type:'SET_USER',
          user:null
        })

      }
    })
  }, []);
  return (
    // BEM
    <Router>
      <div className="app">
        <Routes>
          <Route path="/checkout" element={[<Header />, <Checkout />]} />
          <Route path="/" element={[<Header />, <Home />]} />
          <Route path="/login" element={[<Login />]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
