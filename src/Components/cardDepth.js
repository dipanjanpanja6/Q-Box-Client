import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/styles';
import { pxToVh, Theme } from '../theme';

const styles = {
	root: {
		backgroundColor: Theme.backgroundColor,
		boxShadow: `inset 4px 3px 7px #C6CCE1 ,
inset -3px -4px 7px white`,
	},
	baseStyle: {
		height: '100%',
		width: '100%',
		borderRadius: pxToVh(80),
	},
};

const CardDepth = (props) => {
	const { classes } = props;
	return (
		<Grid
			{...props}
			container
			className={`${classes.root} ${classes.baseStyle}`}
			justify="center"
			alignItems="center">
			{props.children}
		</Grid>
	);
};

export default withStyles(styles)(CardDepth);
