import React from 'react';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'; 
import {  Theme } from './../theme'; 
import CardComponent from '../Components/cardEmbossed';
// import Person from '@material-ui/icons/PersonRounded';
import {  Toolbar, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const styles = makeStyles(t => ({

    text: {
        color: "#fff",
        padding: '10vh 0'
    }

}))


const Login = (props) => {
    const sty = styles();
    const history = useHistory()
    const handleChange = (e) => {
        if (e == "qbook") {
            history.push('/upload/qbook')
        } if (e == "qbank") {
            history.push('/upload/qbank')
        }
    }

    const style = { style: { width: '80%', height: 'auto', cursor: 'pointer' } }
    return (
        <div style={{ minHeight: "100vh", backgroundColor: '#fff' }}>
            <Toolbar style={{ background: Theme.boxColor }} />

            <Grid container justify='space-around' alignItems='center' style={{ flexDirection: 'column', minHeight: 'calc(100vh - 65px)' }}>
                <CardComponent {...style} onClick={() => { handleChange('qbook') }}>
                    <Grid container justify='center' alignItem='center'>
                        <Typography className={sty.text} variant='h5'>Q-Book</Typography>
                    </Grid>
                </CardComponent>
                <CardComponent {...style} onClick={() => { handleChange('qbank') }}>
                    <Grid container justify='center' alignItem='center'>
                        <Typography className={sty.text} variant='h5'>Q-Bank</Typography>
                    </Grid>
                </CardComponent>
            </Grid>
        </div>
    );
};

export default withStyles(styles)(Login);
