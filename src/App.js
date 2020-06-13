import React from 'react';

import Courses from './Views/course';
import About from './Views/About';
import Home from './Views/Home';

import Login from './Views/Login';
import SignUp from './Views/SignUpNew';
import SignUpOld from './Views/SignUp';
import Dashboard from './Views/Dashboard';
import Header from './Components/Header';
import Loader from './Components/Loader';
import Appbar from './Components/AppBar';

import E4 from './Views/E4';

import PracticeSet from './Views/PracticeSet';
import Practice from './Views/Practice';
import { withStyles } from '@material-ui/styles';
import { pxToVh, Theme } from './theme';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Upload from './Views/Upload'



const App = () => {
	return (
		// <div>
			<Router>
				<Appbar />

				<Switch>

					<Route exact path="/upload" component={Upload} />
					<Route exact path="/test" component={Loader} />
					<Route exact path="/home" component={Home} />
					<Route exact path="/about" component={About} />
					<Route exact path="/courses" component={Courses} />


					<Route exact path="/" render={()=><Redirect to='/home'/>} />
					<Route exact path="/login" component={Login} />
					
					<Route exact path="/signupOld" component={SignUpOld} />
					<Route exact path="/signup" component={SignUp} />
					<Route exact path="/dashboard" component={Dashboard} />

					<Route path="/practice" component={Practice} />
					<Route exact component={E4} />


				</Switch>

			</Router>
		// </div>

	);
}

export default (App);
