import React, { useState } from 'react';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import Input from '@material-ui/core/Input';
import { pxToVh, pxToVw, Theme } from './../theme';
import Header from '../Components/Header';
import CardDepth from '../Components/cardDepth';
import ButtonComponent from '../Components/button';
import LoginImg from '../static/login.svg';
import CardComponent from '../Components/cardEmbossed';
import Person from '@material-ui/icons/PersonRounded';
import { Toolbar, makeStyles, Fab, Link } from '@material-ui/core';
import { useHistory, Link as RouterLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropType from 'prop-types'
import { login } from '../redux/actions/student'
import { useEffect } from 'react';
import { toast } from 'react-toastify'
import CircularProgress from '@material-ui/core/CircularProgress';



const styles = makeStyles(t => ({
	root: {
		height: `calc(100vh - 65px)`,
		alignItems: 'center',
		flexDirection: 'row-reverse',
		justifyContent: 'center',
		[t.breakpoints.down('xs')]: {
			// flexDirection:'row',

		}
	},
	baseStyle: {
		borderRadius: '50%',
	},
	boxStyle: {
		borderRadius: '0%',
	},
	input: {
		paddingLeft: 12,
		margin: 0,
		height: '100%',
		color: Theme.textColor.placeholder,
		fontWeight: 'bold',
		'&::placeholder': {
			color: Theme.textColor.placeholder,
			// fontFamily: 'Poppins',
			fontSize: 15,
			opacity: '.6',
			// paddingLeft: 12,
			margin: 0,
			height: '100%',
		},
	},
	content: {
		flexGrow: 1,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		backgroundColor: 'white',
	},

	released: {
		boxShadow: '10px 10px 14px 1px rgba(00,00,00,0.2)',
		background: Theme.buttonColor.color1,
	},
	login: {
		height: 500,
		width: pxToVw(600),
		[t.breakpoints.down('xs')]: {
			height: 400,
			width: 'auto',
			padding: 12,
		}
	},
	logInput: {
		width: pxToVw(464), minWidth: 200,
		[t.breakpoints.down('xs')]: {
			minWidth: '70vw',
		}
	},
	inputArea: {
		height: `30%`,
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	button: {
		background: Theme.boxColor,
		marginBottom: 12,
		width: '100%',
		boxShadow: `4px 4px 5px 1px rgba(00,00,00,0.2),-4px -4px 5px 1px rgba(255,255,255,0.2)`,


	},
	buttonLabel: {
		color: '#fff',
		textTransform: 'uppercase',
	},
}))



const LoginPage = (props) => {
	const [state, setState] = React.useState({ userEmail: '', password: '' })
    const [loading, setLoading] = React.useState(false)

	const handleChange = e => {
		setState({...state, [e.target.id]: e.target.value })
	}
	const sty = styles()
	const history = useHistory()

	useEffect(() => {
        document.title = 'Login | Qriocty Box'
    }, [])

    useEffect(() => {
        console.log(props);
        if (props.auth) {
            setLoading(false)
            if (props.auth.success) {
                history.push('/dashboard')
            } else if (props.auth.error) {
                toast.error(props.auth.message)
                console.log(props.auth.message);

            }
        }
    }, [props])

	const logInUser = (e) => {
		e.preventDefault()
		const reqParams = {
			userEmailId: state.userEmail,
			userPassword: state.password,
		};
		props.login(reqParams)
		setLoading(true)
	}

	return (
		<>
			<Toolbar style={{ background: Theme.boxColor }} />
			<Grid container className={sty.root} >
				<Grid item container justify='center' sm={6}>
					<img
						src={LoginImg}
						alt=""
						style={{ width: pxToVw(721) }}
					/>
				</Grid>

				<Grid item container justify='center' xs={12} sm={6} >
					<div className={sty.login}	>
						<CardComponent style={{
							paddingLeft: '10%',
							paddingRight: '10%',
							color: '#fff'
						}}>
							<div style={{
								paddingTop: '6%',

								height: 54,
								width: 54,
							}}>
								<CardComponent
									children={
										<div style={{
											height: '88%',
											width: '88%',
										}}>
											<CardDepth
												children={
													<Person style={{
														color: '#8d3ddc',
														height: 44,
														width: 44,
													}}
													/>
												}
											/>
										</div>
									}
								/>
							</div>
							<form onSubmit={logInUser} style={{display:'contents'}}><div className={sty.inputArea} >
								<Grid container justify='center' className={sty.logInput}>
									<CardDepth>
										<Input
											id="userEmail"
											required
											value={state.userEmail}
											disableUnderline
											onChange={handleChange}
											fullWidth
											type='email'
											autoComplete="off"
											placeholder="E-mail"
											classes={{ input: sty.input }}></Input>
									</CardDepth>
								</Grid>
								<Grid container justify='center' className={sty.logInput}>
									<CardDepth>
										<Input
											id="password"
											required
											value={state.password}
											onChange={handleChange}
											disableUnderline
											fullWidth
											type='password'
											autoComplete="off"
											placeholder="Password"
											classes={{ input: sty.input }}></Input>
									</CardDepth>
								</Grid>
							</div>

							<Fab variant='extended' type='submit'  classes={{ label: sty.buttonLabel }} className={sty.button}>Login{loading && <CircularProgress/>}</Fab>

</form>
							<Typography variant='body2' style={{ color: '#fff', padding: '0 12px 12px' }} >OR</Typography>

							<Fab variant='extended' classes={{ label: sty.buttonLabel }} className={sty.button}>Use Google</Fab>
							<Link to='/signup' component={RouterLink} color='inherit'>New User! Create account here.</Link>
							<Link to='/forgetpass' component={RouterLink} color='inherit'>Forget Password</Link>
						</CardComponent>
					</div>
				</Grid>
			</Grid>
		</>
	);
};
LoginPage.prototype = {
	auth: PropType.object.isRequired,
	login: PropType.func.isRequired
}
const mapToProp = {
	login
}
const mapToState = (state) => ({
	auth: state.admin.login
})
export default connect(mapToState, mapToProp)(LoginPage);