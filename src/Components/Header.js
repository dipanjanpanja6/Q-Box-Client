import React, { useState } from 'react';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Home from '@material-ui/icons/HomeRounded';
import Info from '@material-ui/icons/InfoRounded';
import Person from '@material-ui/icons/PersonRounded';
import MenuBook from '@material-ui/icons/MenuBookRounded';
import { pxToVh, pxToVw, Theme } from './../theme';
import Typography from '@material-ui/core/Typography';
import { Link, Redirect } from 'react-router-dom';

const styles = {
	root: {
		height: '100%',
		width: '20vw',
		backgroundColor: 'rgba(0,0,0,0.8)',
	},
	text: {
		fontSize: pxToVw(25),
		color: Theme.textColor.color2,
		fontFamily: 'poppins',
		fontWeight: '500',
	},
	link: {
		textDecoration: 'none',
	},
	menu: {
		height: `calc(1.6vh + 1.6vw)`,
		width: `calc(1.6vh + 1.6vw)`,
		borderRadius: '100px',
		backgroundColor: 'transparent',
		boxShadow: '-6px -5px 7px rgba(00,00,00,0.2)',
	},
	header: {
		height: pxToVh(99),
		width: '100vw',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		paddingRight: pxToVw(100),
		boxSizing: 'border-box',
	},
	button: {
		borderRadius: '50%',
		height: `calc(1.75vh + 1.75vw)`,
		width: `calc(1.75vh + 1.75vw)`,
		backgroundColor: '#00C9B7',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		boxShadow: `5px 6px 7px 1px rgba(00,00,00,0.2)`,
	},
};

const Button = (props) => {};

const Header = (props) => {
	const [active, setActive] = useState('Home');
	const [mode, setModes] = useState(0);

	const headerRightSection = ['HOME', 'ABOUT', 'COURSES', 'LOGIN', 'DASHBOARD'];
	const { classes } = props;
	return (
		<div className={classes.header}>
			<div
				style={{
					height: '100%',
					width: '25%',
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}>
				<Link to="/home" className={classes.link}>
					<div className={classes.button}>
						<Home style={{ color: 'white', cursor: 'pointer' }} />
					</div>
				</Link>
				<Link to="/about" className={classes.link}>
					<div className={classes.button}>
						<Info style={{ color: 'white' }} />
					</div>
				</Link>
				<Link to="/courses" className={classes.link}>
					<div className={classes.button}>
						<MenuBook style={{ color: 'white' }} />
					</div>
				</Link>
				<Link to="/login" className={classes.link}>
					<div className={classes.button}>
						<Person style={{ color: 'white' }} />
					</div>
				</Link>
			</div>
		</div>
	);
};

export default withStyles(styles)(Header);
