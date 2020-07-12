import React, { useRef, useEffect } from 'react';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { pxToVh, pxToVw, Theme } from './../theme'; 
import Checkbox from '@material-ui/core/Checkbox';
import CardDepth from '../Components/cardDepth';
import CardComponent from '../Components/cardEmbossed';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Toolbar, Fab, makeStyles } from '@material-ui/core';

import Videojs from '../Components/videoPlayer';

const videoJsOptions = {
	autoplay: false,
	playbackRates: [0.3, 0.5, 1, 1.25, 1.5, 2, 2.5],
	width: 720,
	height: 300,
	controls: true,
	fluid: true,

	cacheEncryptionKeys:true,
	//   aspectRatio: '1:1',
	sources: [
		{
			src:'https://s3.ap-south-1.amazonaws.com/veido.thumbnail/spw/test.m3u8',
			// src: require('./cc.mkv'),
			// type: 'video/mp4',
			type:"application/x-mpegURL"
		},
	],
	html5: {
		vhs: {
		  withCredentials: true
		}
	  }
	// poster: require('../static/400.svg')

};

// import videoJs from 'video.js'
// import 'video.js/dist/video-js.min.css'; 
// import 'video.js/dist/video-js.css';

// City
// import '@videojs/themes/dist/city/index.css';

// Fantasy
// import '@videojs/themes/dist/fantasy/index.css';

// Forest
// import '@videojs/themes/dist/forest/index.css';

// Sea
// import '@videojs/themes/dist/sea/index.css'; 

const style = makeStyles(t => ({

	content: {
		width: '100%',
		// minHeight:'100vh',
		// backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 30,
		[t.breakpoints.down('xs')]: {
			padding: 12
		}
	},
	checkbox: {
		color: 'white',
	},
	button: {
		background: Theme.boxColor,
		marginBottom: 12,
		width: 150,
		boxShadow: `4px 4px 5px 1px rgba(00,00,00,0.2),-4px -4px 5px 1px rgba(255,255,255,0.2)`,
		[t.breakpoints.down('xs')]: {
			width: '90%'
		}
	},
	buttonLabel: {
		color: '#fff',
		textTransform: 'uppercase',
	},
	vedio: {
		boxShadow: `4px 4px 5px 1px rgba(00,00,00,0.2),-4px -4px 5px 1px rgba(255,255,255,0.2)`,
		borderRadius: pxToVh(80),
		border: 'solid 7px blueviolet',
		overflow: 'hidden',
		[t.breakpoints.down('xs')]: {
			borderRadius: pxToVh(60),

		}
	},
	options: {
		[t.breakpoints.down('xs')]: {
			flexDirection: 'column-reverse'

		}
	},
	checkboxCon: {
		height: '20%',
		width: '100%',
		display: 'flex',
		paddingLeft: '13%',
		boxSizing: 'border-box',
		alignItems: 'center',
		justifyContent: 'start',
		[t.breakpoints.down('xs')]: {
			paddingLeft: 12,

		}
	},
	question: {
		minHeight: '40%',
		width: '100%',
		alignItems: 'center',
		padding: '5% 5% 12px',
		[t.breakpoints.down('xs')]: {
			paddingBottom: 12,
			paddingLeft: '8%',
		}
	}
}))

const Practice = (props) => {


	const [state, setState] = React.useState({
		question: 'what is what is what is what is what is what is what is what is what is what is what is what is what is what is ',
		correctOption: 0,
		selectedOption: 0,
		option1: 'what is what is ',
		option2: 'what is cvhjkjkjkhjhgfgfghjhkjl hjl jhjh ghjkl kjh ghgjh kjl jhg gjhkjlk kjhfg hgjh ',
		option3: 'what is what is what is what is what is ',
		option4: 'hvjhvj',
		option5: 'cvghjk',
		id: 1,
	})

	const fetchQuestions = (id) => {
		// const data = {
		// 	questionId: 1,
		// 	question:
		// 		'If ‘A’ is the mother of ‘B’ and ‘C’; and ‘D’ is the husband of ‘C’, then what is ‘A’ to ‘D’?',
		// 	fkChapterId: 13,
		// 	hasOptions: true,
		// 	option1: 'Mother',
		// 	option2: 'Son-in-Law',
		// 	option3: 'Mother-in-Law',
		// 	option4: 'Aunt',
		// 	option5: 'Cannot be determined',
		// 	videoLink: null,
		// 	imageLink: null,
		// 	hint: null,
		// 	correctOption: 3,
		// 	deleted: false,
		// };

		id > 0 &&
			axios
				.get(`http://localhost:8089/api/question?id=${id}`)
				.then((res) => {
					setState({
						question: res.data.question,
						correctOption: res.correctOption,
						option1: res.data.option1,
						option2: res.data.option2,
						option3: res.data.option3,
						option4: res.data.option4,
						option5: res.data.option5,
						id: id,
					});
				})
				.catch((error) => console.log('Sign In Api Error', error));
	};
	const [loading, setLoading] = React.useState(false)

	const classes = style()
	const option = [
		state.option1,
		state.option2,
		state.option3,
		state.option4,
		state.option5,
	];
	return (
		<>
			<Toolbar style={{ background: Theme.boxColor }} />
			<Grid container className={classes.content}>

				<CardComponent >
					<Grid container className={classes.question} >
						<Typography variant='body1' style={{ color: 'white', }}>
							{state.question}
						</Typography>
					</Grid>

					<Grid container className={classes.options} alignItems='center' justify='space-between'>
						<Grid container item sm={6}
							style={{
								height: '40%',

							}}>
							{option.map(
								(value, index) =>
									value != null && (
										<div key={index} className={classes.checkboxCon} >
											<Checkbox
												classes={{
													root: classes.checkbox,
												}}
												style={{ color: 'white' }}
											/>
											<Typography variant='body1'
												style={{
													marginLeft: '1%',
													color: 'white',
												}}>
												{value}
											</Typography>
										</div>
									)
							)}
						</Grid>

						<Grid container item justify='center' style={{ padding: '5%' }} sm={6}>
							<Grid container className={classes.vedio} >
								<Videojs {...videoJsOptions} />
							</Grid>

						</Grid>
					</Grid>
					<Grid item container justify='space-evenly' style={{ paddingTop: '1%', paddingBottom: '5%' }} >
						<Fab variant='extended' type='submit' classes={{ label: classes.buttonLabel }} className={classes.button}>Previous{loading && <CircularProgress />}</Fab>
						<Fab variant='extended' type='submit' classes={{ label: classes.buttonLabel }} className={classes.button}>Save & Next{loading && <CircularProgress />}</Fab>
						<Fab variant='extended' type='submit' classes={{ label: classes.buttonLabel }} className={classes.button}>Skip{loading && <CircularProgress />}</Fab>

					</Grid>
				</CardComponent>

			</Grid>
		</>
	);
}

export default (Practice);
