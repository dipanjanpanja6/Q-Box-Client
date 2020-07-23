import React from 'react'; 
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { pxToVh, pxToVw, Theme } from './../theme';
import Footer from '../Components/Footer';
import CardDepth from '../Components/cardDepth'; 
import CardComponent from '../Components/cardEmbossed';
import Team from '../static/Team.svg';
import { makeStyles, Toolbar } from '@material-ui/core'; 

import BigLogo from '../static/logo/BigLogoText.png';
import { useEffect } from 'react';

const styles = makeStyles((t => ({
	root: {

		backgroundColor: Theme.backgroundColor,
		'&::-webkit-scrollbar': {
			display: 'none',
		},
	},
	frame: {
		minHeight: '88vh',
		paddingTop: 12,
		paddingBottom: 12,
		backgroundColor: Theme.backgroundColor,
		display: 'flex',
		[t.breakpoints.down('xs')]: {
			minHeight: 'auto'
		}
	},
	heading: {

		padding: '12px 0',
		color: Theme.textColor.heading,
		fontWeight: 'bold',
		marginBottom: 20,
	},
	para: {
		[t.breakpoints.down('xs')]: {
			fontSize: 20,
		},
		padding: '12px 0',
		color: Theme.textColor.heading,
		// fontWeight: 'bold',
		marginTop: 30,
		// fontSize: Theme.fontSize.size3,

	},
	d2: {
		margin: '30px 80px',
		width: '100%',
		[t.breakpoints.down('xs')]: {
			padding: 0,
			margin: 0,
		},
	},
	d3: {
		padding: '1% 6%',
		[t.breakpoints.down('xs')]: {
			padding: 12,

		},
	},
	ourU: {
		width: 500, padding: ' 50px 80px', textAlign: 'center', color: '#fff',
		[t.breakpoints.down('xs')]: {
			padding: '40px 25px',
		},
	}

})))


const About = () => {
	const sty = styles()
	useEffect(() => {
		document.title = "About us | Qriocty Box"

	}, [])

	return (
		<div className={sty.root}>
			<Toolbar style={{ background: Theme.boxColor, minHeight: 64 }} />
			<Grid container alignItems="center"
				justify="center" className={sty.frame}>
				<Grid container justify='center' item sx={12} sm={6}
					style={{ height: '100%' }}>
					<img
						src={Team}
						alt=""
						style={{ height: '80%', width: '80%' }}
					/>
				</Grid>
				<Grid item sx={12} sm={6}
					style={{
						height: '100%',
						textAlign: '-webkit-center',
					}}>
					<Typography variant='h4' className={sty.heading} style={{ marginTop: 50 }}>
						About Us
						</Typography>
					<Typography variant='h6' className={sty.para}					>
						We are India's first economical<br /> ed-tech company providing practice
							platform<br /> handcrafted for curious students.<br /> Launched in 2020, we
							offer highly effective programs for<br /> practice of all competitive
							exam aspirants<br /> at affordable prices.
						</Typography>
				</Grid>
			</Grid>

			<Grid container style={{ padding: 30 }} >
				<Grid item sm={12} className={sty.d2} >
					<CardComponent  >
						<div className={sty.ourU} >
							<Typography variant='h4' style={{ color: '#fff' }} className={sty.heading} >Our Uniqueness</Typography>
							<Typography variant='subtitle1' style={{ lineHeight: 2 }}>

								In a world full of online education sites bragging about
								their teaching strength and tutorials, we at Q-box provide
								our students with the best practice platform as well as
								concept clearing lecture classes for each of the subjects.
									<br />
								<br />

									We provide a helping hand to each student to boost their
									morale and confidence as we believe in
									</Typography>
							<Typography variant='subtitle1' style={{ lineHeight: 2, paddingTop: 22 }}>
								<b>
									"Practice might not make us perfect
									but it reduces our imperfections over time"
									</b>
							</Typography>

							<Typography variant='subtitle1' style={{ lineHeight: 2, paddingTop: 22 }}>

								We back up our practice sets with proper video solutions
								for each question. Each question is further supported by
								our unique resources: Q-book & One-one sessions.<br /><br /> Q-book is one of the resources which helps the students understand the chronological order of the questions. Clicking on Q-book will redirect the students to concept-wise breakdown
								of a particular chapter.<br /><br />One-one session is provided to remove any remainingdoubts (if any) by a one to one interaction with the educator
								through a cross-platform messaging service.It will also allow students & educators to share images &documents for better clarification of the
								problem statement.
								</Typography>
						</div>
					</CardComponent></Grid>
			</Grid>
			<Grid container style={{ padding: 30 }} >
				<Grid item sm={12} className={sty.d2} >
					<CardComponent  >
						<div className={sty.ourU} >
							<Typography variant='h4' style={{ color: '#fff' }} className={sty.heading} >Best Education Associates<br />
										& their contents</Typography>
							<Typography variant='subtitle1' style={{ lineHeight: 2 }}>

								We provide students with a comprehensive learning
								experience. Our educators follow a planned teaching
								path for all aspirants to achieve success.
								</Typography>
						</div>
					</CardComponent>
				</Grid>
			</Grid>
			<Grid container style={{ padding: 30 }} >
				<Grid item sm={12} className={sty.d2} >
					<CardComponent  >
						<div className={sty.ourU} >
							<Typography variant='h4' style={{ color: '#fff' }} className={sty.heading} >Struggle towards success</Typography>
							<Typography variant='subtitle1' style={{ lineHeight: 2 }}>
								This is our small helping hand to the students
								where they practice for their respective exams
								without any worries & pave their
								paths toward success.
								</Typography>
						</div>
					</CardComponent>
				</Grid>
			</Grid>
			<Grid container justify='center' alignItems='center' style={{ padding: 30 }} >
				<img alt="" src={BigLogo} style={{ height: 100, paddingTop: 12, width: 90 }} />
				<Typography variant='h4' style={{
					color: Theme.textColor.heading,
					fontWeight: 'bold',
				}}>{' - Aim'}</Typography>
				<Grid justify='space-around' container >
					<Grid item sm={6} className={sty.d3}>
						<CardComponent   >
							<div style={{ padding: '15%', color: '#fff' }}>
								<Typography variant='h4' style={{ color: '#fff', textAlign: 'center' }} className={sty.heading} >What we provide</Typography>
								<Typography variant='subtitle1' style={{ lineHeight: 2, paddingTop: 22 }}>
									1. Unlimited industrial and
									specific government exam
									questions with video solutions.
										<br />
									<br />
										2. Concept Book.
										<br />
									<br />
										3. Free Mock Test.
										<br />
									<br />
										4. Quiz every week.
										<br />
									<br />
										5. Gift box containing coding
										or design technologies based
										on the preference of the
										student.
										<br />
									<br />
										6. Effort based report.
									</Typography>
							</div>
						</CardComponent>
					</Grid>
					<Grid item sm={6} className={sty.d3}>
						<CardComponent style={{ alignItems: 'inherit' }}  >
							<div style={{ padding: '15%', color: '#fff' }}>
								<Typography variant='h4' style={{ color: '#fff', textAlign: 'center' }} className={sty.heading} >What we expect</Typography>
								<Typography variant='subtitle1' style={{ lineHeight: 2, paddingTop: 22 }}>
									1. Practice at least 35 questions
									per day.
										<br />
									<br />
										2. Maximum of 180 minutes/ day practice session.
										<br />
									<br />
										3. Attempt mock tests after practicing 75% questions.
										<br />
									<br />
										4. Every quiz test is mandatory.

									</Typography>
							</div>
						</CardComponent>
					</Grid>
				</Grid>
			</Grid>
			
			<Footer />
		</div>
	);
}


export default (About);
