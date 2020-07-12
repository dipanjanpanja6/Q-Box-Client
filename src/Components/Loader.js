import React from 'react';
import { withStyles } from '@material-ui/styles';
import { pxToVh, pxToVw, Theme } from '../theme';
import Grid from '@material-ui/core/Grid';
import { SvgIcon, Typography } from '@material-ui/core';
import clsx from 'clsx'
import BigLogo from '../static/logo/BigLogo.png';

const styles = () => ({
	root: {
		height: '100vh',
		width: '100vw',
		flexDirection: 'column',
		background:Theme.boxColor
	},
	title:{
		color:'#fff',fontWeight:'bold',letterSpacing:1
	},
	logo:{
		height: 200, width: 200
	},
	radius: {
		borderRadius: '20px',
	},
	rotate: {
		animation:'$rotate 1.5s cubic-bezier(0, 1.01, 0.92, 1.34)',
	},
	fade: {
		animation: '$fade linear 1s ',
		animationIterationCount: 1,
		animationFillMode: 'forwards',
	},
	depthBackground: {
		animation: '$load linear 1s ',
		animationIterationCount: 1,
		animationFillMode: 'forwards',
	},
	'@keyframes load': {
		'0%': {
			background: '#F0F1F5', 
			
		},
		'95%': {
			background: '#8363ef',
			// boxShadow: `inset 0px 0px 0px #C6CCE1 ,inset -0px -0px 0px white`,
		},
		'96%': {
			background:'transparent radial-gradient(farthest-corner at 100% 0%, #8363ef 0%, #8363ef 31%, #8363ef 69%, #8363ef 100%) 0% 0% no-repeat padding-box',
			// boxShadow: `inset 0px 0px 0px #C6CCE1 ,inset -0px -0px 0px white`,
		},
		'97%': {
			background:'transparent radial-gradient(farthest-corner at 100% 0%, #8363ef 0%, #8363ef 31%, #8363ef 69%, #8D3DDC 100%) 0% 0% no-repeat padding-box',
			// boxShadow: `inset 0px 0px 0px #C6CCE1 ,inset -0px -0px 0px white`,
		},
		'98%': {
			background:'transparent radial-gradient(farthest-corner at 100% 0%, #8363ef 0%, #8363ef 31%, #8A51E4 69%, #8D3DDC 100%) 0% 0% no-repeat padding-box',
			// boxShadow: `inset 0px 0px 0px #C6CCE1 ,inset -0px -0px 0px white`,
		},
		'99%': {
			background:'transparent radial-gradient(farthest-corner at 100% 0%, #8363ef 0%, #8167F2 31%, #8A51E4 69%, #8D3DDC 100%) 0% 0% no-repeat padding-box',
			// boxShadow: `inset 0px 0px 0px #C6CCE1 ,inset -0px -0px 0px white`,
		},
		'100%': {
			// background: 'crimson',
			background: Theme.boxColor,
			// boxShadow: `inset 0px 0px 0px #C6CCE1 ,inset -0px -0px 0px white`,
		},
	},
	embossShadow: {
		animation: '$load2 linear 2s ',
		animationIterationCount: 1,
		animationFillMode: 'forwards',
	},
	'@keyframes load2': {
		'0%': {
			boxShadow: `4px 4px 7px 0px #C6CCE1,  -4px -4px 7px 0px white`,
		},
		'100%': {
			boxShadow: `0px 0px 0px 0px #C6CCE1,  -0px -0px 0px 0px white`,
		},
	},

	'@keyframes rotate': {
		'0%': {
			transform: `rotate(0deg)`,
		},
		'100%': {
			transform: `rotate(360deg)`,
		},
	},
	'@keyframes fade': {
		'0%': {
			color: `#c6cce100`,
		},
		'100%': {
			color: `#FFFFFF`,
		},
	},
});

class Loader extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { classes } = this.props;
		return (
			<Grid
				container
				alignItems="center"
				justify="center"
				className={clsx(classes.root,)}>
				<img src={BigLogo} alt="Qriocty Box"  className={clsx(classes.logo,classes.rotate)} />
				<Typography variant='h6' className={clsx(classes.fade,classes.title)}>
					Hunt for Curiosity
				</Typography>
			</Grid>
		);
	}
}


export default withStyles(styles)(Loader);
