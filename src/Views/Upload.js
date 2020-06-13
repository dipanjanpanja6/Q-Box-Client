import React, { useState } from 'react';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import Input from '@material-ui/core/Input';
import { pxToVh, pxToVw, Theme } from './../theme';
import Header from '../Components/Header';
import CardDepth from '../Components/cardDepth';
import CardComponent from '../Components/cardEmbossed';
import Person from '@material-ui/icons/PersonRounded';
import { MenuItem, Checkbox, Toolbar } from '@material-ui/core';

const styles = (theme) => ({
	root: {
		// height: '100vh',
		// width: '100vw',
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
		color: Theme.textColor.placeholder,
		fontFamily: 'Poppins',
		fontSize: pxToVw(22),
		fontWeight: '500',

		paddingLeft: pxToVw(15),
		paddingRight: pxToVw(15),
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
		paddingTop: 12,

	},

	released: {
		boxShadow: '10px 10px 14px 1px rgba(00,00,00,0.2)',
		background: Theme.buttonColor.color2,
	},
	inputDiv: {
		height: pxToVh(51),
		width: pxToVw(564),
		padding: 12,

	},
	inputDivText: {
		height: '100%',
		width: pxToVw(1350),
		// margin: '22px 12px'
	},

});


const Login = (props) => {
	const { classes } = props;
	const [hasOption,setHasOption]=React.useState(false)
	const [option,setOption]=React.useState({})

	const handleChange=(e)=>{

	}
	const imageUpload=()=>{

	}
	const uploadVideo=()=>{

	}
	const submit=()=>{

	}

	return (
		<div className={classes.root}>
			<Toolbar/>

			<div className={classes.content}>
				<div
					style={{
						height: pxToVh(1000),
						// padding:'0 35px'
						width: '80vw',
					}}>
					<CardComponent>
						<div
							style={{

								width: '100%',
								display: 'grid',
								justifyContent: 'center',
								alignItems: 'flex-start',
								boxSizing: 'border-box',
								paddingTop: '1%',
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
															height: 'inherit',
															width: 'inherit',
														}}
													/>
												}
											/>
										</div>
									}
								/>
							</div>
						</div>

						<Grid container justify='space-around'>
							<Grid item>
								<div className={classes.inputDiv}>
									<CardDepth >
										<Input
											id="course"
											onChange={handleChange}
											select='true'
											disableUnderline
											fullWidth
											autoComplete="off"
											placeholder="Course"
											// inputComponent='select'

											classes={{ input: classes.input }}>

										</Input>
									</CardDepth></div>
								<div className={classes.inputDiv}>
									<CardDepth>
										<Input
											onChange={handleChange}
											id='subject'
											disableUnderline
											fullWidth
											autoComplete="off"
											placeholder="Subject"
											classes={{ input: classes.input }}></Input>
									</CardDepth></div>
							</Grid>

							<Grid item>
								<div className={classes.inputDiv}>

									<CardDepth>
										<Input
											id="stream"
											onChange={handleChange}
											disableUnderline
											fullWidth
											autoComplete="off"
											placeholder="Stream"
											classes={{ input: classes.input }}></Input>
									</CardDepth>
								</div>
								<div className={classes.inputDiv}>

									<CardDepth>
										<Input
											onChange={handleChange}
											id='chapters'
											disableUnderline
											fullWidth
											autoComplete="off"
											placeholder="Chapters"
											classes={{ input: classes.input }}></Input>
									</CardDepth></div>
							</Grid>
						</Grid>
						
						<Grid container justify='space-around'>

							<div
								onClick={imageUpload}
								style={{
									height: pxToVh(60),
									width: pxToVw(301),
									boxSizing: 'border-box',
									cursor: 'pointer',
									display: 'grid',
									textAlign: "center"
								}}>
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
										Image upload
									</Typography>
								</CardComponent>
							</div>
							<Grid item>
								<Grid container>
									<Checkbox disableRipple style={{ padding: '0 3px' }} /><Typography>Q-Book</Typography>
									<Checkbox disableRipple style={{ padding: '0 3px' }} /><Typography>Q-Bank</Typography>
								</Grid>
							</Grid>
						</Grid>
						<Grid item >
							<div className={classes.inputDivText}>

								<CardDepth style={{ borderRadius: 12 }}>
									<Input
										id="userEmail"
										disableUnderline
										fullWidth
										rowsMax={8}
										rows={8}
										multiline
										autoComplete="off"
										placeholder="Type your question here ..."
										classes={{ input: classes.input }}></Input>
								</CardDepth>
							</div>
						</Grid>
{hasOption &&
						<Grid container justify='space-around'>
							<Grid item>
								<div className={classes.inputDiv}>
									<CardDepth >
										<Input
											id="course"
											onChange={handleChange}
											select='true'
											disableUnderline
											fullWidth
											autoComplete="off"
											placeholder="Course"
											// inputComponent='select'

											classes={{ input: classes.input }}>

										</Input>
									</CardDepth></div>
								<div className={classes.inputDiv}>
									<CardDepth>
										<Input
											onChange={handleChange}
											id='subject'
											disableUnderline
											fullWidth
											autoComplete="off"
											placeholder="Subject"
											classes={{ input: classes.input }}></Input>
									</CardDepth></div>
							</Grid>

							<Grid item>
								<div className={classes.inputDiv}>

									<CardDepth>
										<Input
											id="stream"
											onChange={handleChange}
											disableUnderline
											fullWidth
											autoComplete="off"
											placeholder="Stream"
											classes={{ input: classes.input }}></Input>
									</CardDepth>
								</div>
								<div className={classes.inputDiv}>

									<CardDepth>
										<Input
											onChange={handleChange}
											id='chapters'
											disableUnderline
											fullWidth
											autoComplete="off"
											placeholder="Chapters"
											classes={{ input: classes.input }}></Input>
									</CardDepth></div>
							</Grid>
						</Grid>
						}

						<Grid container justify='space-evenly' style={{ paddingBottom: 22, paddingTop: 12 }} >


							<div
								onClick={uploadVideo}
								style={{
									height: pxToVh(60),
									width: pxToVw(301),
									boxSizing: 'border-box',
									cursor: 'pointer',
									display: 'grid',
									textAlign: "center"
								}}>
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
										Upload Video
									</Typography>
								</CardComponent>
							</div>

							<div
								onClick={submit}
								style={{
									height: pxToVh(60),
									width: pxToVw(301),
									boxSizing: 'border-box',
									cursor: 'pointer',
									display: 'grid',
									textAlign: "center"
								}}>
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
										Submit
									</Typography>
								</CardComponent>
							</div>
							<Grid item>
								<Grid container>
									<Checkbox disableRipple onChange={(e)=>{setHasOption(e.target.checked)}} style={{ padding: '0 3px' }} /><Typography>Has options</Typography>
								</Grid>
							</Grid>
						</Grid>


					</CardComponent>
				</div>

			</div>
		</div>
	);
};

export default withStyles(styles)(Login);
