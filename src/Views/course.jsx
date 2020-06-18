import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import Input from '@material-ui/core/Input';
import { pxToVh, pxToVw, Theme } from './../theme';
import Header from '../Components/Header';
import CardDepth from '../Components/cardDepth';
import CardComponent from '../Components/cardEmbossed';
import Person from '@material-ui/icons/PersonRounded';
import { MenuItem, Checkbox, Toolbar, Fab } from '@material-ui/core';
import Footer from '../Components/Footer'
import Loading from '../Components/loading';


const styles = makeStyles(t => ({
    header: {
        color: Theme.textColor.heading,
        paddingTop: 20,
        paddingBottom: 40,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        letterSpacing: 2
    },
    subHeader: {
        color: Theme.textColor.heading,
        paddingTop: 40,
        paddingBottom: 20,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        // letterSpacing: 2
    },
    subDesc: {
        color: Theme.textColor.heading,
        paddingLeft: 25,
        paddingRight: 25,
        paddingBottom: 20,
        textTransform: 'capitalize',

    },
    root: {
        padding: 30,
        textAlign: 'center'
    },
    button: {
        background: Theme.boxColor,
        marginBottom: 12
    },
    buttonLabel: {
        color: '#fff',
        textTransform: 'uppercase',
    },
    loading: {

    }
}))

const data = [
    {
        id: 1,
        name: 'graduate technical game',
        data: [
            {
                name: 'mechanical',
                desc: "Video concepts (Q-Book) 200+ Practice sets with video (Q-Bank) One to one doubt solutions 12 Mock Test Weekly quiz test Attendance counting Quantitative Aptitude Logical Reasoning English Q- box Free Gift (C, C++, JAVA) Performance based Certificate"
            },
            { name: 'bio-technical' },
        ]
    },
    {
        id: 2,
        name: 'gate',
        data: [
            {
                name: 'mechanical',

            },
            { name: 'bio-technical' },
        ]
    },
]

const Course = (props) => {
    const sty = styles()
    const styleProp = { style: { padding: '70px 20px' } }
    const stylePropSub = { style: { padding: `50px ${pxToVw(150)} ` } }
    const listRender = data ? data.map(p => {
        return (

            <Grid key={p.id} className={sty.root} container>
                <Grid item container justify='center' xs={12}>
                    <Typography className={sty.header} variant='h4'>{data[0].name}</Typography>
                </Grid>
                <Grid item container xs={12} justify='center' alignItems='center'>
                    <CardComponent >
                        <Grid item sm={6}{...stylePropSub}>
                            <CardDepth >
                                <Grid container justify='center'>
                                    <Typography className={sty.subHeader} variant='h5'>{data[0].data[0].name}</Typography>
                                    <Typography className={sty.subDesc} variant='subtitle1'>{data[0].data[0].desc}</Typography>
                                    <Fab classes={{ label: sty.buttonLabel }} className={sty.button} variant='extended'>Let's Practice</Fab>
                                </Grid>
                            </CardDepth>
                        </Grid>
                        <Grid item sm={6}{...stylePropSub}>
                            <CardDepth >
                                <Grid container justify='center'>
                                    <Typography className={sty.subHeader} variant='h5'>{data[0].data[0].name}</Typography>
                                    <Typography className={sty.subDesc} variant='subtitle1'>{data[0].data[0].desc}</Typography>
                                    <Fab classes={{ label: sty.buttonLabel }} className={sty.button} variant='extended'>Let's Practice</Fab>
                                </Grid>
                            </CardDepth>
                        </Grid>


                    </CardComponent>
                </Grid>
            </Grid>


        )
    }) : <Loading />

    return (
        <>
            <Toolbar style={{ background: Theme.boxColor }} />
            {listRender}
            <Toolbar />
            <Footer />


        </>
    );
};

export default Course;
