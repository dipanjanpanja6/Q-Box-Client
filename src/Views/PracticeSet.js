import React from 'react';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { pxToVh, pxToVw, Theme } from '../theme'; 
import CardDepth from '../Components/cardDepth';
import axios from 'axios';
import CardComponent from '../Components/cardEmbossed';
import { Link } from 'react-router-dom';
import { Toolbar } from '@material-ui/core';

const styles = () => ({
	root: {
		width: '100%',
		background: Theme.boxColor,
		height: '100%',
		overflow: 'auto',

	},
	scrollStyles: {
		'&::-webkit-scrollbar': {
			display: 'none',
		},
	},
	fourthSlideParent: {
		height: pxToVh(1080 - 99),
		width: '100%',
		padding: `${pxToVh(99)} ${pxToVw(47)} ${pxToVh(73)} ${pxToVw(70)}`,
		boxSizing: 'border-box',
	},
	link: {
		textDecoration: 'none',
	},
});



class Courses extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	getPracticeSet = () => {

		axios
			.get(`http://localhost:8089/api/getPracticeSet`)
			.then((res) => {
				console.log(res);
				console.log(res.data);
			})
			.catch((error) => alert('Practice Set Api Error'));
	};

	scrollableCards = (classes) => {
		return (
			<div className={classes.fourthSlideParent}>
				<div style={{ height: '74vh', width: '91vw' }}>
					<CardDepth>
						<Grid
							container
							alignItems="center"
							justify="space-between"
							className={classes.scrollStyles}
							style={{
								height: '100%',
								width: '95%',
								boxSizing: 'border-box',
							}}>
							<div
								style={{
									height: '90%',
									width: `${100 / 3.2}%`,
									cursor: 'pointer',
								}}>
								<CardComponent
									children={
										<Grid
											onClick={() => this.getPracticeSet()}
											container
											justify="center"
											alignItems="center"
											style={{
												height: '84%',
												width: '86%',
												textAlign: '-webkit-center',
											}}>
											<Link to="/practice" className={classes.link}>

												<Typography
													style={{
														color: Theme.textColor.color1,
														fontSize: pxToVw(30),
														fontFamily: 'Poppins',
														fontWeight: 'bold',
													}}>
													Practice Set 1
												</Typography>
											</Link>
											<Typography
												style={{
													color: Theme.textColor.color1,
													fontSize: pxToVw(20),
													fontFamily: 'Poppins',
													fontWeight: 'light',
												}}>
												Videos that help you explore each concept making it
												easier to catch. Concept clarity leads to success
											</Typography>
										</Grid>
									}
								/>
							</div>
							<div
								style={{
									height: '90%',
									width: `${100 / 3.2}%`,
								}}>
								<CardComponent
									children={
										<Grid
											container
											justify="center"
											alignItems="center"
											style={{
												height: '84%',
												width: '86%',
												textAlign: '-webkit-center',
											}}>
											<Typography
												style={{
													color: Theme.textColor.color1,
													fontSize: pxToVw(30),
													fontFamily: 'Poppins',
													fontWeight: 'bold',
												}}>
												Practice Set 2
											</Typography>
											<Typography
												style={{
													color: Theme.textColor.color1,
													fontSize: pxToVw(20),
													fontFamily: 'Poppins',
													fontWeight: 'light',
												}}>
												Unlimited test sets & videos (with monitoring for each
												question) to clear doubt in every chapter
											</Typography>
										</Grid>
									}
								/>
							</div>
							<div
								style={{
									height: '90%',
									width: `${100 / 3.2}%`,
								}}>
								<CardComponent
									children={
										<Grid
											container
											justify="center"
											alignItems="center"
											style={{
												height: '84%',
												width: '86%',
												textAlign: '-webkit-center',
											}}>
											<Typography
												style={{
													color: Theme.textColor.color1,
													fontSize: pxToVw(30),
													fontFamily: 'Poppins',
													fontWeight: 'bold',
												}}>
												Practice Set 3
											</Typography>
											<Typography
												style={{
													color: Theme.textColor.color1,
													fontSize: pxToVw(20),
													fontFamily: 'Poppins',
													fontWeight: 'light',
												}}>
												Unique course related questions for Newtonian minds
												using smart interactive classrooms
											</Typography>
										</Grid>
									}
								/>
							</div>
						</Grid>
					</CardDepth>
				</div>
			</div>
		);
	};

	render() {
		const { classes } = this.props;
		const card = [this.scrollableCards(classes)];
		return (
			<div className={`${classes.root} ${classes.scrollStyles}`}>
				<Toolbar />
				{card.map((value, index) => (
					<div key={index}>{value}</div>
				))}
			</div>
		);
	}
}

export default withStyles(styles)(Courses);
