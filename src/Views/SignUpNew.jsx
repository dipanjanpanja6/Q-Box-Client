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
import SignUp from '../static/Mobile login-pana.svg';

import { Toolbar, makeStyles, Fab, InputAdornment, Link } from '@material-ui/core';
import { useHistory,Link as RouterLink } from 'react-router-dom';

const styles = makeStyles(t => ({
    root: {
        // height: `calc(100vh - 65px)`,
        alignItems: 'center',
        flexDirection: 'row-reverse',
        // justifyContent:'center',
        minHeight: 'calc(100vh - 66px)',
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
    inputPh: {
        paddingLeft: 0,
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
        width: pxToVw(1200),
        [t.breakpoints.down('xs')]: {
            minHeight: 500,
            height: 'auto',
            width: 'auto',
            padding: 12,
            // margin:'0 10px'
        }
    },
    logInput: {
        padding: 12,
        width: pxToVw(464), minWidth: 200,
        [t.breakpoints.down('xs')]: {
            minWidth: '70vw',
        }
    },
    inputArea: {
        // height: `30%`,
        // width: '100%',
        // display: 'flex',
        // flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    button: {
        background: Theme.boxColor,
        marginBottom: 12,
        width: '40%',
        [t.breakpoints.down('xs')]:{
            width: '85%',

        }

    },
    buttonLabel: {
        color: '#fff',
        textTransform: 'uppercase',
    },
    res:{
        [t.breakpoints.down('xs')]:{
            display:'contents'
        }
    }
}))

const logInUser = (props) => {
    const reqParams = {
        "username": document.getElementById("userEmail").value,
        "password": document.getElementById("password").value,
    };

    axios
        .post(`http://localhost:8089/api/login`, reqParams)
        .then((res) => {
            alert("Logged In")
            console.log(res);
            console.log(res.data);
        })
        .catch((error) => alert('Log In Api Error'));
};

const Login = (props) => {
    const [state, setState] = React.useState({ userEmail: '', password: '' })
    const handleChange = e => {
        setState({ [e.target.id]: e.target.value })
    }
    const sty = styles()
    const history = useHistory()
    return (
        <>
            <Toolbar style={{ background: Theme.boxColor }} />
            <Grid container className={sty.root} >
                <Grid item container justify='center' sm={4}>
                    <img
                        src={SignUp}
                        alt=""
                        style={{ width: pxToVw(621) }}
                    />
                </Grid>

                <Grid item container justify='center' alignItems='center' xs={12} sm={8} >
                    <Grid container alignItems='center' className={sty.login}	>
                        <CardComponent style={{
                            paddingLeft: '10%',
                            paddingRight: '10%',
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
                            <Grid container className={sty.inputArea} >
                                <Grid container justify='center' className={sty.logInput}>
                                    <CardDepth>
                                        <Input
                                            id="userName"
                                            value={state.userEmail}
                                            disableUnderline
                                            onChange={handleChange}
                                            fullWidth

                                            autoComplete="off"
                                            placeholder="Name"
                                            classes={{ input: sty.input }}></Input>
                                    </CardDepth>
                                </Grid>
                                <Grid container justify='center' className={sty.logInput}>
                                    <CardDepth>
                                        <Input
                                            id="userEmail"
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
                                            id="pass"
                                            value={state.userEmail}
                                            disableUnderline
                                            onChange={handleChange}
                                            fullWidth
                                            type='password'
                                            autoComplete="off"
                                            placeholder="Password"
                                            classes={{ input: sty.input }}></Input>
                                    </CardDepth>
                                </Grid>
                                <Grid container justify='center' className={sty.logInput}>
                                    <CardDepth>
                                        <Input
                                            id="conPass"
                                            value={state.userEmail}
                                            disableUnderline
                                            onChange={handleChange}
                                            fullWidth
                                            autoComplete="off"
                                            placeholder="Confirm Password"
                                            classes={{ input: sty.input }}></Input>
                                    </CardDepth>
                                </Grid>
                                <Grid container justify='center' className={sty.logInput}>
                                    <CardDepth>
                                        <Input
                                            id="ph"
                                            value={state.ph}
                                            disableUnderline
                                            onChange={handleChange}
                                            fullWidth
                                            type='number'
                                            autoComplete="off"
                                            placeholder="Phone Number"
                                            startAdornment={
                                                <InputAdornment position="start">
                                                    +91
                                                </InputAdornment>
                                            }
                                            classes={{ input: sty.inputPh }}></Input>
                                    </CardDepth>
                                </Grid>
                                <Grid container justify='center' className={sty.logInput}>
                                    <CardDepth>
                                        <Input
                                            id="otp"
                                            value={state.password}
                                            onChange={handleChange}
                                            disableUnderline
                                            fullWidth
                                            type='number'
                                            autoComplete="off"
                                            placeholder="OTP"
                                            classes={{ input: sty.input }}></Input>
                                    </CardDepth>
                                </Grid>
                            </Grid>
                            <Grid container alignItems='center' style={{ flexDirection: 'column',color:'#fff' }} justify='center' xs={12}>
                                {/* <Fab variant='extended' classes={{ label: sty.buttonLabel }} className={sty.button}>Sign Up</Fab> */}
                               
                                <Grid className={sty.res} justify='center' alignItems='center' container>

                                    <Fab variant='extended' onClick={() => { }} classes={{ label: sty.buttonLabel }} className={sty.button}>Sign Up</Fab>


                                    <Typography variant='body2' style={{ color: '#fff', padding: '0 12px 12px' }} >OR</Typography>

                                    <Fab variant='extended' classes={{ label: sty.buttonLabel }} className={sty.button}>Use Google</Fab>
                                </Grid>
                                <Link to='/login' color='inherit' component={RouterLink} >Existing user! Login here</Link>
                            </Grid>

                        </CardComponent>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default (Login);
