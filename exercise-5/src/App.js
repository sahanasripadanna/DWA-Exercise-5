import React, {useEffect, useState} from 'react';
import { Route, BrowserRouter as Router, Redirect} from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import './App.css';

import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import Signup from './pages/Signup';
import Logout from './pages/Logout';
import Header from './components/Header';

var firebaseConfig = {
    apiKey: "AIzaSyA7SisiQzvtq5hnMJqYiZFWNv7ULbruXD4",
    authDomain: "dwa-exercise-five.firebaseapp.com",
    databaseURL: "https://dwa-exercise-five.firebaseio.com",
    projectId: "dwa-exercise-five",
    storageBucket: "dwa-exercise-five.appspot.com",
    messagingSenderId: "633910145408",
    appId: "1:633910145408:web:0986786d0c553f91221165"
  };


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  useEffect(() => {
    //initialize firebase
    if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
    }

    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .catch(function(error){
        console.log('error', error);
      });
  }, [firebaseConfig])

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user){
      if (user){
        setLoggedIn(true);
        setUser(user);
      } else {
        //no user is signed in
        setLoggedIn(false);
        setUser({});
      }
    });
  }, [])

  function signupFunction(e){
    e.preventDefault();
    let email = e.currentTarget.createEmail.value;
    let password = e.currentTarget.createPassword.value;
    
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function(response){
        setLoggedIn(true);
      })
      .catch(function(error){
        console.log('error', error);
      })
  }

  function loginFunction(e){
    e.preventDefault();

    let email = e.currentTarget.loginEmail.value;
    let password = e.currentTarget.loginPassword.value;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function(response){
        setLoggedIn(true);
      })
      .catch(function(error){
        console.log('error', error);
      })

  }

  function logoutFunction(){
    firebase.auth().signOut().then(function(){
      //sign out successful
      setLoggedIn(false);
    }).catch(function(error){
      console.log('error', error);
    })
  }


  return (
    <div className="App">
      <Header loggedIn={loggedIn} logoutFunction={logoutFunction}/>
      <Router>
        <Route exact path='/' component={UserProfile}>
          { loggedIn ? <UserProfile user={user}/>: <Redirect to="/login" />}
        </Route>
        <Route exact path='/login' component={Login}>
          { loggedIn ? <Redirect to="/" />: <Login loginFunction={loginFunction}/>}
          <Login/>
        </Route>
        <Route exact path='/sign-up' component={Signup}>
          { loggedIn ? <Redirect to="/" />: <Signup signupFunction={signupFunction}/>}
        </Route>
        
      </Router>
    </div>
  );
}

export default App;
