import React, { useState, useEffect } from 'react';
import Loading from './Components/loading';
import QBook from './Views/qbook';

import Courses from './Views/course';
import About from './Views/About';
import Home from './Views/Home';

import Login from './Views/Login';
import SignUp from './Views/SignUpNew';
import SignUpOld from './Views/SignUp';
import Dashboard from './Views/Dashboard';
// import Header from './Components/Header';
// import Loader from './Components/Loader';
import Appbar from './Components/AppBar';

import E4 from './Views/E4';

import PracticeSet from './Views/PracticeSet';
import Practice from './Views/Practice';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { connect } from 'react-redux';
import { checkUser, logout } from './redux/actions/student';
import PropType from 'prop-types';
import Contact from './Views/contact';

const App = (props) => {
  useEffect(() => {
    props.checkUser();
    console.log('tiger');
  }, [props]);

  const out = () => {
    console.log('auth');
    props.logout();
  };
  console.log(props.auth);

  return (
    <div>
      <Router>
        <Appbar auth={props.auth} out={out} />
        <Switch>
          <Route
            exact
            path="/qbook"
            render={() =>
              props.auth === null ? (
                <Loading />
              ) : props.auth === true ? (
                <QBook />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            exact
            path="/dashboard"
            render={() =>
              props.auth === null ? (
                <Loading />
              ) : props.auth === true ? (
                <Dashboard />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            path="/practice"
            render={() =>
              props.auth === null ? (
                <Loading />
              ) : props.auth === true ? (
                <Practice />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            path="/practiceset"
            render={() =>
              props.auth === null ? (
                <Loading />
              ) : props.auth === true ? (
                <PracticeSet />
              ) : (
                <Redirect to="/login" />
              )
            }
          />

          <Route exact path="/test" component={Practice} />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/courses" component={Courses} />

          <Route
            exact
            path="/login"
            render={() =>
              props.auth === null ? (
                <Loading />
              ) : props.auth === false ? (
                <Login />
              ) : (
                <Redirect to="/dashboard" />
              )
            }
          />
          <Route exact path="/signupOld" component={SignUpOld} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/contact" component={Contact} />

          <Route exact component={E4} />
        </Switch>
      </Router>
      <ToastContainer />
    </div>
  );
};
App.prototype = {
  auth: PropType.object.isRequired,
  checkUser: PropType.func.isRequired,
  logout: PropType.func.isRequired,
};
const mapToProp = {
  logout,
  checkUser,
};
const mapToState = (state) => ({
  auth: state.admin.auth,
});
export default connect(mapToState, mapToProp)(App);
