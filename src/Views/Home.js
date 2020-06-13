import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import { pxToVh, pxToVw, Theme } from './../theme';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import CardDepth from '../Components/cardDepth';
import ButtonComponent from '../Components/button';
import CardComponent from '../Components/cardEmbossed';
import SlideOne from '../static/Studying_bro.svg';
import SlideTwo from '../static/Virtual_reality.svg';
// import SlideThreeA from '../static/On_the_way.svg';
import SlideThreeA from '../static/success.svg';
import SlideFourA from '../static/Press_play.svg';
import SlideFourB from '../static/Online_shopping.svg';
import SlideFourC from '../static/Live_collaboration.svg';
import SlideFiveA from '../static/Documents_bro.svg';
import SlideFiveB from '../static/Reading_list.svg';
import SlideSix from '../static/Report.svg';
import BigLogo from '../static/logo4.svg';

import { makeStyles, Fab } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const styles = makeStyles(t => ({
	root: {
		width: '100%',
		backgroundColor: Theme.backgroundColor,
		height: '100%',
		// overflow: 'auto',
	},
	screenDivisionStyles: {
		height: '100%',
		width: '100%',
	},
	scrollStyles: {
		'&::-webkit-scrollbar': {
			display: 'none',
		},
	},
	firstSlideParent: {
		height: '100vh',
		minHeight: '50vw',
		background: Theme.boxColor,
		[t.breakpoints.down('xs')]: {

			height: 'auto',
			minHeight: '100vh'
		}

	},
	firstSlideText: {
		minHeight: pxToVh(649),
		width: pxToVw(868),
		alignSelf: 'center',
		flexDirection: 'column',
		[t.breakpoints.down('xs')]: {
			minHeight: 'auto',
			flexDirection: 'row',
			marginTop: 100,
			height: 'auto',
		}
	},
	search1st: {
		height: pxToVh(69),
		width: pxToVw(749),
		boxSizing: 'border-box',
		alignSelf: 'center',
		[t.breakpoints.down('xs')]: {
			display: 'none'
		}
	},
	secondSlideParent: {
		minHeight: '90vh',
	},
	secondImg: {
		height: pxToVh(700), width: pxToVw(700),
		[t.breakpoints.down('xs')]: {
			height: '100vw',
			width: '85vw',
		}
	},

	baseStyle: {
		paddingLeft: pxToVw(20),
	},
	input: {
		padding: 0,
		margin: 0,
		height: '100%',
		'&::placeholder': {
			color: Theme.textColor.placeholder,
			fontFamily: 'Poppins',
			fontSize: pxToVw(22),
			fontWeight: 'light',
			opacity: '1',
			padding: 0,
			margin: 0,
			height: '100%',
		},
	},
	thirdSlideParent: {
		minHeight: '90vh',
		width: '100%',
		display: 'flex',
	},
	thirdText: {
		width: pxToVw(1011),
		padding: `0 ${pxToVw(170)}`,
		[t.breakpoints.down('xs')]: {
			width: '100%',
			padding: '3%',

		}
	},
	fourthSlideParent: {
		minHeight: '100vh',
		padding: `${pxToVh(120)} ${pxToVw(47)} ${pxToVh(73)} ${pxToVw(70)}`,
	},
	fifthSlideParent: {
		// height: pxToVh(1930),
		width: '100%',
		// padding: `${pxToVh(125)} ${pxToVw(58)} 0 ${pxToVw(59)}`,
		// boxSizing: 'border-box',
	},
	sixthSlideParent: {
		height: pxToVh(1050),
		width: '100%',
		padding: `${pxToVh(125)} ${pxToVw(58)} 0 ${pxToVw(59)}`,
		boxSizing: 'border-box',
	},
	released: {
		boxShadow: `4px 4px 5px 1px rgba(00,00,00,0.2),-4px -4px 5px 1px rgba(255,255,255,0.2)`,
		// background: Theme.buttonColor.color1,
		background: Theme.boxColor,
	},
	label: {
		color: Theme.textColor.color2,
		// fontSize: pxToVw(22),
		// fontFamily: 'Poppins',
		fontWeight: 'thin',
	},
	pressed: {
		boxShadow: `inset 4px 3px 7px #C6CCE1 ,
inset -3px -4px 7px white`,
		background: Theme.buttonColor.color1,
	},
	searchField: {
		backgroundColor: Theme.backgroundColor,
	},
	heading: {
		color: Theme.textColor.color1,
		letterSpacing: pxToVw(0.9),
		lineHeight: 1.5,
		fontFamily: 'Poppins',
		fontWeight: 600,
		textAlign: 'center',
		// paddingLeft: 25, 
		[t.breakpoints.down('xs')]: {
			paddingLeft: 15,
			paddingTop: 30,
			paddingBottom: 30,
			fontSize: 30,

		}
	},
	heading2: {
		color: Theme.textColor.color1,
		letterSpacing: pxToVw(0.9),
		lineHeight: 1.5,
		// paddingBottom:50,
		textAlign: 'center',
		paddingLeft: 25,
		[t.breakpoints.down('xs')]: {
			paddingLeft: 15,
			display: 'none',
			paddingTop: 30,
			paddingBottom: 30,
			// fontSize: 25,

		}
	},
	firstImg: {
		height: 'auto', width: pxToVw(757), minWidth: 250,
		[t.breakpoints.down('xs')]: {
			height: '50vh',
			width: 'auto',
		}
	},
	thirdImg: {
		height: pxToVh(770), width: pxToVw(770),
		[t.breakpoints.down('xs')]: {
			height: '50vh',
			width: 'auto',
			paddingTop: 50
		}
	},
	fourthCard: {
		height: '90%', width: `${100 / 3.2}%`,
		[t.breakpoints.down('xs')]: {
			width: '100%',
			padding: '20px 0'
		}
	}
}))



const firstSlide = (classes, register) => {
	return (

		<Grid container className={classes.firstSlideParent}>
			<Grid sm={7} xs={12} container justify='center' className={classes.firstSlideText}
				container spacing={2}
				alignItems="center"
				justify='space-around'
			>
				<Typography variant='h4' className={classes.heading} >
					Join India's 1<sup>st</sup> practicing platform for
									competitive exams
								</Typography>
				<Typography variant='h6' className={classes.heading2} >
					Enroll in our course & start practicing for your upcoming
					competitive exams with Qriocity Box
								</Typography>

				{/* <div className={classes.search1st}>
					<CardDepth
						classes={{
							baseStyle: classes.baseStyle,
							root: classes.searchField,
						}}>
						<Input
							classes={{ input: classes.input }}
							disableUnderline
							fullWidth
							autoComplete="off"
							placeholder="Search for Subjects, Chapters, Topics, Courses"
						/>
					</CardDepth>
				</div>
				 */}
				<Grid
					container
					justify="center"
					style={{
						height: pxToVh(94),
						width: '100%',
						alignSelf: 'flex-end',
					}}>
					<Fab variant='extended' onClick={register} classes={{ label: classes.label, }} className={classes.released}>Register for free</Fab>
				</Grid>
			</Grid>
			<Grid sm={5} xs={12}
				container
				justify="center"
				alignItems="center"
				style={{
					height: '100%',
				}}>
				<img className={classes.firstImg}
					src={SlideOne}
					alt=""
				/>
			</Grid>
		</Grid>
	);
};
const secondSlide = (classes) => {
	return (
		<Grid container justify="center"
			alignItems="center" className={classes.secondSlideParent}>
			<Grid sm={5}
				container
				alignItems="center"
				justify="center"
			>
				<img
					src={SlideTwo} className={classes.secondImg} alt=""
				/>
			</Grid>

			<Grid
				sm={7}
				container
				justify="center"
				alignItems="center"
				className={classes.secondText}
				style={{ padding: '0 3%' }}
			>
				<CardComponent style={{ padding: '26px 0' }}>
					<Grid container alignItems="center" justify="center" style={{ flexDirection: 'column' }}>
						{/* <div style={{ height: pxToVh(193), width: pxToVw(744) }}> */}
						<Typography variant='body1'
							style={{
								color: Theme.textColor.color1,
								padding: `50px ${pxToVw(150)}`,
								fontWeight: 600,
								lineHeight: 2,
								textAlign: 'center',
							}}>
							Explore 10,000+ Handpicked Questions along with <br />Video
								Solutions, Mock Tests,<br /> Quiz, Q-BOOK, Doubt Solutions<br /> and
								much more
									</Typography>
						{/* </div> */}

						<Fab variant='extended' classes={{ label: classes.label, }} className={classes.released}>Get Started</Fab>
					</Grid>
				</CardComponent>
			</Grid>
		</Grid>
	);
};
const thirdSlide = (classes) => {
	return (
		<Grid container alignItems='center' justify='center' className={classes.thirdSlideParent}>
			<Grid container item sm={6} justify='center' alignItems='center' className={classes.thirdText}>

				<CardComponent>
					<Grid
						justify='space-around'
						container
						alignItems='center'
						style={{ minHeight: '90vh', flexDirection: 'column', color: '#fff', padding: ' 0 7vw', textAlign: 'center' }}>
						<Typography variant='h6'>
							STEP 1
								</Typography>
						<Typography variant='body1'>
							Start practicing
							Tier 1 Questions
								</Typography>
						<Typography variant='h6'>
							STEP 2
								</Typography>
						<Typography variant='body1'>
							Open after finishing Tier 1.
							Start practicing
							Tier 2 Questions
								</Typography>
						<Typography variant='h6'>
							STEP 3
								</Typography>
						<Typography variant='body1'>
							Start Critical Thinking Zone
							after completing
							Tier 2 Questions
								</Typography>
						<Typography variant='h6'>
							STEP 4
								</Typography>
						<Typography variant='body1'>
							Goodies Unlocked
							Free Mock Tests
								</Typography>

					</Grid>
				</CardComponent>


			</Grid>
			<Grid item sm={6} container alignItems="center" justify="center">
				<img src={SlideThreeA} className={classes.thirdImg} alt="" />
			</Grid>
		</Grid>
	);
};
const fourthData = [
	{
		title: "Exploring Video Sessions",
		desc: "Videos that help you explore each concept, making it easier to catch. Concept clarity leads to success.",
		img: SlideFourA
	},
	{
		title: "Unlimited practice with	conceptual discussing",
		desc: "Unlimited practice sets & videos	(with monitoring for each question)	to clear every doubts in every chapter.",
		img: SlideFourB
	},
	{
		title: "Unique One-One doubt clearing sessions",
		desc: "Unique course related questions for Newtonian minds using smart interactive classrooms to provide detailed solutions.",
		img: SlideFourC
	},

]

const fourthSlide = (classes) => {
	const fourMap = fourthData ? fourthData.map((p, i) => {
		return (
			<div className={classes.fourthCard} >
				<CardComponent style={{ background: '#fff', padding: '50px 0' }}
					children={
						<Grid
							container
							justify="center"
							alignItems="center"
							style={{
								height: '500px',
								width: '86%',
								textAlign: '-webkit-center',
							}}>
							<Typography variant='h6'
								style={{
									// color: Theme.textColor.color1,
									// fontSize: pxToVw(30),
									fontWeight: 'bold',
									padding: '12px 10%'
								}}>
								{p.title}
							</Typography>
							<Typography
								style={{
									// color: Theme.textColor.color1,
									// fontSize: pxToVw(20),
									// fontFamily: 'Poppins',
									fontWeight: 'light',
								}}>{p.desc}
							</Typography>
							<img
								src={p.img}
								style={{
									width:'100%',
									// width: pxToVw(368.47),
								}}
								alt=""
							/>
						</Grid>
					}
				/>
			</div>

		)
	}) : ''
	return (
		<Grid container className={classes.fourthSlideParent}>
			<CardComponent>
				<Grid
					container
					alignItems="center"
					justify="space-evenly"
					className={classes.scrollStyles}
					style={{
						color: Theme.textColor.heading,
						height: '100%',
						width: '95%', padding: '50px 0', lineHeight: '2 !important'
					}}>
					{fourMap}

				</Grid>
			</CardComponent>

		</Grid>
	);
};
const fifthSlide = (classes, register) => {
	return (
		<>
			<Grid style={{
				padding: `${pxToVh(120)} ${pxToVw(47)} ${pxToVh(73)} ${pxToVw(70)}`,
			}}>
				<CardComponent>
					<Grid container alignItems="center" justify="center" style={{ padding: 25 }} >
						<Grid
							item sm={7}
							container
							justify="center"
							alignItems="center">

							<img src={BigLogo} style={{ height: 50, width: 50 }} />

							<Typography variant='h6'
								style={{
									// fontFamily: 'Poppins',
									// fontSize: Theme.fontSize.size2,
									color: Theme.textColor.color1,
									fontWeight: 'bold',
								}}>
								-Bank
											</Typography>
							<Typography variant='body2'
								style={{
									lineHeight: 2,
									color: Theme.textColor.color1,
									width: '100%',
									textAlign: 'center',
									padding: '15%',
								}}>
								Q-Bank has been created by the
												<br /> Qrious minds of every examiner.
												<br /> The questions have been handpicked
												<br /> from various books & previous competitve exams
												<br /> like GATE,IES,ISRO & other prestigious exams
											</Typography>

							<Fab variant='extended' onClick={register} classes={{ label: classes.label, }} className={classes.released}>
								Getting Curious ?</Fab>

						</Grid>
						<Grid item sm={5}>
							<img
								src={SlideFiveA}
								style={{ height: pxToVh(587.47),width:'100%', maxWidth: '90vw' }}
								alt=""
							/>
						</Grid>
					</Grid>
				</CardComponent>
			</Grid>

			<Grid style={{
				padding: `${pxToVh(120)} ${pxToVw(47)} ${pxToVh(73)} ${pxToVw(70)}`,
			}}>
				<CardComponent>
					<Grid container alignItems="center" justify="center" style={{ padding: 25, flexDirection: ' row-reverse' }} >
						<Grid
							item sm={7}
							container
							justify="center"
							alignItems="center">

							<img src={BigLogo} style={{ height: 50, width: 50 }} />

							<Typography variant='h6'
								style={{
									color: Theme.textColor.color1,
									fontWeight: 'bold',
								}}>
								-Book
											</Typography>
							<Typography variant='body2'
								style={{
									lineHeight: 2,
									color: Theme.textColor.color1,
									width: '100%',
									textAlign: 'center',
									padding: '15%',
								}}>
								Q-Book is the resource center where all
								<br />topics are represented by video or
								<br />animation with a proper description.
								<br />The Q-book has been curated for
								<br />competitive exam aspirants.
								</Typography>

							<Fab variant='extended' onClick={register} classes={{ label: classes.label, }} className={classes.released}>
								Explore topics</Fab>

						</Grid>
						<Grid item sm={5}>
							<img
								src={SlideFiveB}
								style={{ height: pxToVh(587.47),width:'100%', maxWidth: '90vw' }}
								alt=""
							/>
						</Grid>
					</Grid>
				</CardComponent>
			</Grid>

			<Grid style={{
				padding: `${pxToVh(120)} ${pxToVw(47)} ${pxToVh(73)} ${pxToVw(70)}`,
			}}>
				<CardComponent>
					<Grid container alignItems="center" justify="center" style={{ padding: 25, }} >
						<Grid
							item sm={6}
							container
							justify="center"
							alignItems="center"> 
							<Typography variant='h6'
								style={{
									color: Theme.textColor.color1,
									fontWeight: 'bold',
									textAlign:'center'
								}}>
								Providing DEMO
								presentation<br/> at your
								campus
											</Typography>
							<Typography variant='body2'
								style={{
									lineHeight: 2,
									color: Theme.textColor.color1,
									width: '100%',
									textAlign: 'center',
									padding: '15%',
								}}>
								Interested in learning more
								about Q-box?
								<br />Register below & we
								<br />may present you with a
								<br />seminar at your campus.
								</Typography>

							<Fab variant='extended' onClick={register} classes={{ label: classes.label, }} className={classes.released}>
								Register for Seminar</Fab>

						</Grid>
						<Grid item sm={6}>
							<img
								src={SlideSix}
								style={{ height: pxToVh(687.47), width:'100%', maxWidth: '90vw' }}
								alt=""
							/>
						</Grid>
					</Grid>
				</CardComponent>
			</Grid>


		</>

	);
};

const sixthSlide = (classes, register) => {
	return (
		<div className={classes.fourthSlideParent}>
			<CardDepth>
				<div style={{ height: pxToVh(770), width: pxToVw(1580) }}>
					<CardComponent
						children={
							<Grid
								container
								alignItems="center"
								justify="center"
								style={{ height: '100%', width: '100%' }}>
								<Grid
									item
									container
									justify="center"
									alignItems="center"
									xs={7}
									style={{ height: '100%' }}>
									<Grid
										container
										justify="center"
										style={{
											height: '100%',
											width: '100%',
											textAlign: '-webkit-center',
											padding: '6% 6%',
											boxSizing: 'border-box',
										}}>
										<Typography
											style={{
												fontFamily: 'Poppins',
												fontSize: Theme.fontSize.size2,
												color: Theme.textColor.color1,
												fontWeight: 'bold',
											}}>
											Providing DEMO<br />
											presentation at your
											campus
											</Typography>
										<Typography
											style={{
												padding: "50px 0",
												fontSize: Theme.fontSize.size4,
												color: Theme.textColor.color1,
												width: '100%',
												textAlign: 'center',
												// fontWeight: '500',
												lineHeight: 2
											}}>
											Interested in learning more
												<br /> about Q-box?
												<br /> Register below & we
												<br /> may present you with a
												<br /> seminar at your campus
											</Typography>

										<Fab variant='extended' onClick={register} classes={{ label: classes.label, }} className={classes.released}>
											Register for Seminar</Fab>
									</Grid>
								</Grid>
								<Grid item xs={5}>
									<img
										src={SlideSix}
										style={{ height: pxToVh(518), width: '100%' }}
										alt=""
									/>
								</Grid>
							</Grid>
						}
					/>
				</div>
			</CardDepth>
		</div>
	);
};

const footer = (classes) => {
	return (
		<div
			style={{
				height: pxToVh(648),
				width: '100%',
				paddingTop: '13.8vh',
				boxSizing: 'border-box',
				paddingBottom: 0,
			}}>
			<Footer />
		</div>
	);
};

const successText = (classes) => {
	return (
		<Grid
			container
			alignItems="center"
			justify="center"
			style={{ minHeight: '20vh', width: '100%' }}>
			<Typography variant='h4'
				style={{
					color: Theme.textColor.heading,
					fontWeight: 'bold',
					// fontSize: pxToVw(50),
				}}>
				WAY TO SUCCESS
				</Typography>
		</Grid>
	);
};


const Home = () => {
	const history = useHistory()
	const [state, setState] = React.useState({ buttonState: true })

	const register = () => { history.push('/signup') }

	const classes = styles()
	const screenDivisions = [
		firstSlide(classes, register),
		secondSlide(classes),
		successText(classes),
		thirdSlide(classes),
		fourthSlide(classes),
		fifthSlide(classes),
		// sixthSlide(classes),
		footer(classes),
	];
	return (
		<div className={`${classes.root} ${classes.scrollStyles}`}>
			{screenDivisions.map((value, index) => (
				<div key={index}>{value}</div>
			))}
		</div>
	);
}
export default Home
