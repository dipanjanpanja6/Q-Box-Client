import React, { useState } from 'react'; 
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import Input from '@material-ui/core/Input';
import {  pxToVw, Theme } from './../theme'; 
import CardDepth from '../Components/cardDepth'; 
import CardComponent from '../Components/cardEmbossed';
import Person from '@material-ui/icons/PersonRounded';
import SignUp from '../static/Mobile login-pana.svg';

import { Toolbar, makeStyles, Fab, InputAdornment, Link } from '@material-ui/core';
import { useHistory, Link as RouterLink } from 'react-router-dom';
import { useEffect } from 'react';
import { toast } from 'react-toastify'
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux';
import { signUp } from '../redux/actions/student'
import PropType from 'prop-types' 



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
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    button: {
        background: Theme.boxColor,
        marginBottom: 12,
        width: '40%',
        boxShadow: `4px 4px 5px 1px rgba(00,00,00,0.2),-4px -4px 5px 1px rgba(255,255,255,0.2)`,
        [t.breakpoints.down('xs')]: {
            width: '85%',

        }

    },
    buttonLabel: {
        color: '#fff',
        textTransform: 'uppercase',
    },
    res: {
        [t.breakpoints.down('xs')]: {
            display: 'contents'
        }
    }
}))


const SignUpS = (props) => {
    const [state, setState] = React.useState({ fkUserRoleId: 3, userName: '', userEmail: '', conPass: '', ph: '', password: '', pass: '' })
    const [ok, setOk] = React.useState(false) 

    const handleChange = e => {

        setState({ ...state, [e.target.id]: e.target.value })
    }
    const checkPass = () => {
        if (state.conPass !== state.pass) {
            toast.warn('Password does not match')
        } else if (state.pass === '') {
            toast.warn('Type a password first')

        } else if (state.pass.length < 6) {
            toast.error('Use minimum six letter Password')
        } else {
            setOk(true)
        }
    }
    const checkPh = () => {

        if (!state.ph.match(/^\d{10}$/)) {
            toast.warn('Enter correct phone number')
        } else if (parseInt(state.ph) < 4000000000) {
            toast.warn('Enter valid phone number')
        } else {
            setOk(true)
        }
    }
    const sty = styles()
    const [loading, setLoading] = React.useState(false)

    const history = useHistory()

    useEffect(() => {
        document.title = 'Create new account | Qriocty Box'
    }, [])

    useEffect(() => {
        console.log(props);
        if (props.auth) {
            setLoading(false)
            if (props.auth.success===true) {
                history.push('/dashboard')
            } else if (props.auth.error) {
                toast.error(props.auth.message)
                console.log(props.auth.message);

            }
        }
    }, [props,history])

    const SignUpUser = (e) => {
        e.preventDefault()
       if(ok===true){
           props.signUp(state)
           setLoading(true)
       }else{
           toast.error('Enter valid information')
       }

        console.log(state);
    }

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
                            <form onSubmit={SignUpUser} style={{ display: 'contents' }}>
                                <Grid container className={sty.inputArea} >

                                    <Grid container justify='center' className={sty.logInput}>
                                        <CardDepth>
                                            <Input
                                                id="userName"
                                                value={state.userName}
                                                disableUnderline
                                                onChange={handleChange}
                                                fullWidth
                                                required
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
                                                required

                                                type='email'
                                                placeholder="E-mail"
                                                classes={{ input: sty.input }}></Input>
                                        </CardDepth>
                                    </Grid>
                                    <Grid container justify='center' className={sty.logInput}>
                                        <CardDepth>
                                            <Input
                                                id="pass"
                                                value={state.pass}
                                                disableUnderline
                                                onChange={handleChange}
                                                fullWidth
                                                required
                                                type='password'
                                                placeholder="Password"
                                                classes={{ input: sty.input }}></Input>
                                        </CardDepth>
                                    </Grid>
                                    <Grid container justify='center' className={sty.logInput}>
                                        <CardDepth>
                                            <Input
                                                onBlur={checkPass}
                                                id="conPass"
                                                value={state.conPass}
                                                disableUnderline
                                                onChange={handleChange}
                                                fullWidth type='password'
                                                required
                                                placeholder="Confirm Password"
                                                classes={{ input: sty.input }}></Input>
                                        </CardDepth>
                                    </Grid>
                                    <Grid container justify='center' className={sty.logInput}>
                                        <CardDepth>
                                            <Input
                                                id="ph"
                                                value={state.ph}
                                                onBlur={checkPh}
                                                disableUnderline
                                                onChange={handleChange}
                                                fullWidth
                                                required
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
                                    {/* <Grid container justify='center' className={sty.logInput}>
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
                                </Grid> */}
                                </Grid>
                                <Grid container alignItems='center' style={{ flexDirection: 'column', color: '#fff' }} justify='center' xs={12}>
                                    {/* <Fab variant='extended' classes={{ label: sty.buttonLabel }} className={sty.button}>Sign Up</Fab> */}

                                    <Grid className={sty.res} justify='center' alignItems='center' container>

                                        <Fab variant='extended' type='submit' classes={{ label: sty.buttonLabel }} className={sty.button}>Sign Up {loading && <CircularProgress/>}</Fab>


                                        {/* <Typography variant='body2' style={{ color: '#fff', padding: '0 12px 12px' }} >OR</Typography> */}

                                        {/* <Fab variant='extended' classes={{ label: sty.buttonLabel }} className={sty.button}>Use Google</Fab> */}
                                    </Grid>
                                    <Link to='/login' color='inherit' component={RouterLink} >Existing user! Login here</Link>
                                </Grid>
                            </form>
                        </CardComponent>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};
SignUpS.prototype = {
    auth: PropType.object.isRequired,
    signUp: PropType.func.isRequired
}
const mapToProp = {
    signUp
}
const mapToState = (state) => ({
    auth: state.admin.login
})
export default connect(mapToState, mapToProp)(SignUpS);
