import React, { useState } from 'react';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import axios from 'axios';
import { pxToVh, pxToVw, Theme } from '../theme'; 
import CardDepth from '../Components/cardDepth';
import LoginImg from '../static/login.svg';
import CardComponent from '../Components/cardEmbossed';
import Person from '@material-ui/icons/PersonRounded';
import { Toolbar } from '@material-ui/core';

const styles = () => ({
	root: {
		height: '100vh',
		width: '100vw',
		display: 'flex',
		flexDirection: 'column',
		background: Theme.boxColor,
	},
	baseStyle: {
		borderRadius: '50%',
	},
	boxStyle: {
		borderRadius: '0%',
	},
	input: {
		paddingLeft: pxToVw(10),
		margin: 0,
		height: '100%',
		'&::placeholder': {
			color: Theme.textColor.placeholder,
			fontFamily: 'Poppins',
			fontSize: pxToVw(22),
			fontWeight: '500',
			opacity: '1',
			paddingLeft: pxToVw(10),
			margin: 0,
			height: '100%',
		},
	},
	content: {
		flexGrow: 1,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		backgroundColor: 'white',
	},

	released: {
		boxShadow: '10px 10px 14px 1px rgba(00,00,00,0.2)',
		background: Theme.buttonColor.color1,
	},
});

const signInUser = (props) => {
	const reqParams = {
		
		userName: document.getElementById("Name").value,
		fkUserRoleId: 2,
		userEmailId: document.getElementById("Email").value,
		userPassword: document.getElementById("Password").value,
		userCollege: document.getElementById("College").value,
		userStream: document.getElementById("Stream").value,
		userBranch: document.getElementById("Branch").value,
		userCourse: document.getElementById("Course").value,
		userPhoneNumber: document.getElementById("Mobile Number").value,
	};
	axios
		.post(`http://localhost:8089/api/signup`, reqParams)
		.then((res) => {
			console.log(res);
			console.log(res.data);
		})
		.catch((error) => console.log('Sign In Api Error', error));
};

const SignIn = (props) => {
	const textPlaceholders = [
		'Name',
		'Email',
		'Password',
		'Confirm Password',
		'College',
		'Stream',
		'Branch',
		'Course',
		'Mobile Number',
		'OTP',
	];
	const { classes } = props;
	return (
		<div className={classes.root}>
			<Toolbar/>
			<div className={classes.content}>
				<div
					style={{
						height: pxToVh(933),
						width: pxToVw(1079),
					}}>
					<CardComponent>
						<div
							style={{
								height: '100%',
								width: '100%',
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								justifyContent: 'center',
							}}>
							<div
								style={{
									height: pxToVh(188),
									width: '100%',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}>
								<div
									style={{
										height: 'calc(3vh + 3vw)',
										width: 'calc(3vh + 3vw)',
									}}>
									<CardComponent
										children={
											<div
												style={{
													height: '88%',
													width: '88%',
												}}>
												<CardDepth
													children={
														<Person
															style={{
																color: '#8d3ddc',
																height: '7vh',
																width: '7vw',
															}}
														/>
													}
												/>
											</div>
										}
									/>
								</div>
							</div>
							<div
								style={{
									flexGrow: 2,
									display: 'flex',
									flexWrap: 'wrap',
									alignItems: 'center',
									justifyContent: 'space-around',
								}}>
								{textPlaceholders.map((value) => (
									<div style={{ height: pxToVh(51), width: pxToVw(464) }}>
										<CardDepth>
											<Input
												id={value}
												disableUnderline
												fullWidth
												autoComplete="off"
												placeholder={value}
												classes={{ input: classes.input }}
											/>
										</CardDepth>
									</div>
								))}
							</div>
							<div
								style={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
								{' '}
								<div
									style={{
										height: pxToVh(60),
										width: pxToVw(201),
										boxSizing: 'border-box',
										cursor: 'pointer',
										display: 'grid',
									}}
									onClick={() => signInUser(props)}>
									<CardComponent
										classes={{
											root: classes.released,
										}}>
										<Typography
											style={{
												fontFamily: 'Poppins',
												fontSize: pxToVw(30),
												color: Theme.textColor.color2,
											}}>
											Sign In
										</Typography>
									</CardComponent>
								</div>
							</div>
						</div>
					</CardComponent>
				</div>
				<img
					src={LoginImg}
					alt=""
					style={{ height: pxToVh(547), width: pxToVw(563) }}
				/>
			</div>
		</div>
	);
};

export default withStyles(styles)(SignIn);
