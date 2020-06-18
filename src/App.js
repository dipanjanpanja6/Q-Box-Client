import React from 'react';

import QBook from './Views/qbook';
import QBookDetails from './Views/qBookDdetails';


import Courses from './Views/course';
import About from './Views/About';
import Home from './Views/Home';

import TLogin from './Views/teacherLogin';
import Login from './Views/Login';
import SignUp from './Views/SignUpNew';
import SignUpOld from './Views/SignUp';
import Dashboard from './Views/Dashboard';
// import Header from './Components/Header';
import Loader from './Components/Loader';
import Appbar from './Components/AppBar';

import E4 from './Views/E4';

import PracticeSet from './Views/PracticeSet';
import Practice from './Views/Practice';
import { pxToVh, Theme } from './theme';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

import Upload from './Views/selectUpload'
import UploadBank from './Views/Upload'



const App = () => {
	return (
		<div>
			<Router>
				<Appbar />

				<Switch>

					<Route exact path="/upload/qbank" component={UploadBank} />
					<Route exact path="/upload" component={Upload} />
					<Route exact path="/test" component={Loader} />
					<Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} />
					<Route exact path="/courses" component={Courses} />

					<Route exact path="/qbook" component={QBook} />
					<Route exact path="/qbook/mce" component={QBookDetails} />


					{/* <Route exact path="/" render={() => <Redirect to='/home' />} /> */}

					<Route exact path="/teacher/login" component={TLogin} />
					<Route exact path="/login" component={Login} />

					<Route exact path="/signupOld" component={SignUpOld} />
					<Route exact path="/signup" component={SignUp} />
					<Route exact path="/dashboard" component={Dashboard} />

					<Route path="/practice" component={Practice} />
					<Route path="/practiceset" component={PracticeSet} />
					<Route exact component={E4} />


				</Switch>
			</Router>
			<ToastContainer />
		</div>

	);
}

export default (App);
