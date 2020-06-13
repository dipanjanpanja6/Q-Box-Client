import React from 'react';
import { withStyles } from '@material-ui/styles';
import { pxToVh, pxToVw } from '../theme';
import Grid from '@material-ui/core/Grid';
import CardComponent from './cardEmbossed';
import CardDepth from './cardDepth';
// import './Loader.css';

const styles = () => ({
	root: {
		height: '100vh',
		width: '100vw',
		backgroundColor: '#F0F1F5',
	},
	radius: {
		borderRadius: '20px',
	},
	rotate: {
		transform: `rotate(0deg)`,
	},
	depthBackground: {
		animation: '$load linear 2s ',
		animationIterationCount: 1,
		animationFillMode: 'forwards',
	},
	'@keyframes load': {
		'0%': {
			background: '#F0F1F5',
			boxShadow: `inset 4px 3px 7px #C6CCE1 ,
inset -3px -4px 7px white`,
		},
		'100%': {
			background: 'crimson',
			boxShadow: `inset 0px 0px 0px #C6CCE1 ,
inset -0px -0px 0px white`,
		},
	},
	embossShadow: {
		animation: '$load2 linear 2s ',
		animationIterationCount: 1,
		animationFillMode: 'forwards',
	},
	'@keyframes load2': {
		'0%': {
			boxShadow: `4px 4px 7px 0px #C6CCE1,
  -4px -4px 7px 0px white`,
		},
		'100%': {
			boxShadow: `0px 0px 0px 0px #C6CCE1,
  -0px -0px 0px 0px white`,
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
				className={classes.root}>
				<div
					style={{ height: '314px', width: '314px' }}
					className={classes.rotate}>
					<CardDepth
						classes={{
							baseStyle: `${classes.radius}`,
							root: classes.depthBackground,
						}}>
						<div style={{ height: '90%', width: '90%' }}>
							<CardComponent
								classes={{
									baseStyle: classes.radius,
									root: classes.embossShadow,
								}}
							/>
						</div>{' '}
					</CardDepth>
				</div>
			</Grid>
		);
	}
}

export default withStyles(styles)(Loader);
