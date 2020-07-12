import React, { useState } from 'react';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import { pxToVh, pxToVw, Theme } from './../theme'; 
import CardDepth from '../Components/cardDepth';
import LoginImg from '../static/login.svg';
import CardComponent from '../Components/cardEmbossed';
import Person from '@material-ui/icons/PersonRounded';
import { Toolbar, makeStyles } from '@material-ui/core';
import Loading from '../Components/loading';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { checkUser } from '../redux/actions/student'
import PropType from 'prop-types'
import { useHistory } from 'react-router-dom';


const styles =makeStyles (t=> ({
	root: {
		height: '100vh',
		width: '100vw',
		display: 'flex',
		flexDirection: 'column',
		background: Theme.boxColor,
	},
	content: {
		height: pxToVh(1080 - 99),
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		background: 'white',
	},
	custom: {
		background: 'white',
	},
	depth: {
		background: Theme.boxColor,
		boxShadow: `inset 4px 3px 7px rgba(0,0,0,0.2) ,
    inset -3px -4px 7px rgba(0,0,0,0.2)`,
	},
	released: {
		boxShadow: '10px 10px 14px 1px rgba(00,00,00,0.2)',
		background: Theme.boxColor,
	},
}))

const MyProfile = (props) => {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<Toolbar />
			<div className={classes.content}>
				<div style={{ height: pxToVh(914), width: pxToVw(712) }}>
					<CardComponent>
						<div
							style={{
								height: '100%',
								width: '100%',
								display: 'flex',
								flexDirection: 'column',
							}}>
							<div
								style={{
									height: pxToVh(188),
									width: '100%',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
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
																height: '7vh',
																width: '7vw',
															}}
														/>
													}
												/>
											</div>
										}
									/>
								</div>
							</div>
							<div style={{ flexGrow: 1.5 }}></div>
							<div style={{ flexGrow: 2 }}></div>
						</div>
					</CardComponent>
				</div>
				<div
					style={{
						height: pxToVh(799),
						width: pxToVw(1023),
						display: 'block',
						alignContent: 'space-between',
						justifyContent: 'center',
					}}>
					<div style={{ width: '100%', height: pxToVh(734) }}>
						<CardComponent>
							<div
								style={{
									height: '92%',
									width: pxToVw(918),
									display: 'grid',
									textAlign: 'center',
									alignContent: 'space-around',
									justifyContent: 'center',
								}}>
								<Typography
									style={{
										fontSize: pxToVw(30),
										fontWeight: 'medium',
										fontFamily: 'poppins',
										color: Theme.textColor.color1,
									}}>
									Current Courses
								</Typography>
								<div style={{ height: pxToVh(267), width: pxToVw(918) }}>
									<CardComponent classes={{ root: classes.custom }} />
								</div>
								<div style={{ height: pxToVh(267), width: pxToVw(918) }}>
									<CardComponent classes={{ root: classes.custom }} />
								</div>
							</div>
						</CardComponent>
					</div>
					<div
						style={{
							height: pxToVh(60),
							width: pxToVw(201),
							boxSizing: 'border-box',
							cursor: 'pointer',
							display: 'grid',
							marginTop: '4%',
							marginLeft: '42%',
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
								Practice
							</Typography>
						</CardComponent>
					</div>
				</div>
			</div>
		</div>
	);
};

const Player = (props) => {
	const { classes } = props;
	return(<><Toolbar style={{background:Theme.boxColor}} /><Loading/></>)
};

const Dashboard = (props) => {
	const  classes  = styles()
	const history=useHistory()
	const [switchState, setSwitchState] = useState(1);
	useEffect(()=>{props.checkUser()},[])
	useEffect(()=>{
		if(props.auth===true){
            setSwitchState(0)
        }
        if(props.auth===false){
            window.location='/login'
        }
        if(props.auth===null){
			setSwitchState(1)
        }
	},[props.auth])
	return switchState == 0 ? <MyProfile classes={classes} /> : <Player />;
};
Dashboard.prototype = {
    auth: PropType.object.isRequired, 
    checkUser: PropType.func.isRequired,  
}
const mapToProp = {
    checkUser
}
const mapToState = (state) => ({
    auth: state.admin.auth
})
export default connect(mapToState,mapToProp) (Dashboard);
