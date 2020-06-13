import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { pxToVh, Theme } from '../theme';
import Grid from '@material-ui/core/Grid';

const styles = {
	root: {
		background: Theme.boxColor,
		boxShadow: `10px 10px 14px 1px rgba(00,00,00,0.2)`,
	},
	baseStyle: {
		height: '100%',
		width: '100%',
		borderRadius: pxToVh(80),
	},
};

const CardComponent = (props) => {
	const { classes, id } = props;
	return (
		<Grid
		{...props}
			container
			justify="center"
			alignItems="center"
			className={`${classes.root} ${classes.baseStyle}`}
			id={id ? id : Math.random()}>
			{props.children}
		</Grid>
	);
};


export default withStyles(styles)(CardComponent);
