import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";

import Login from "views/Login/Login.js";
import Landing from "views/Landing/Lading";
import Profile from "views/Profile/Profile";
import Story from "views/Story/Story";
import Search from "views/Search/Search";
import SignUp from "views/Login/Register";
import JobCard from "views/Jobs/JobCard";
import Job from "views/Jobs/Job";
import ForgetPassword from "views/Login/ForgetPassword";
require('dotenv').config()
function App() {
    return (
        <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/landing" component={Landing} />
          <Route path="/profile" component={Profile} />
          <Route path="/search" component={Search} />
          <Route path="/story" component={Story} />
          <Route path="/job" component={Job} />
          <Route path="/forget-password" component={ForgetPassword} />
          <Route path="/Sign-up" component={SignUp} />
          <Redirect from="/" to="/login" />
        </Switch>
      </BrowserRouter>
    );
  }
  
  export default App;
  