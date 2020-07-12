import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import { url } from '../config/config'
import { pxToVh, pxToVw, Theme } from './../theme'; 
import CardDepth from '../Components/cardDepth';
import CardComponent from '../Components/cardEmbossed';
import Person from '@material-ui/icons/PersonRounded';
import { MenuItem, Checkbox, Toolbar, Fab } from '@material-ui/core';
import Footer from '../Components/Footer'
import Loading from '../Components/loading';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import E5 from '../Components/E5'


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
const Stream = ({ id }) => {
    const sty = styles()
    const history = useHistory()
    const [s, setStream] = React.useState()

    const styleProp = { style: { padding: '70px 20px' } }
    const stylePropSub = { style: { padding: `50px ${pxToVw(150)} ` } }
    useEffect(() => {
        axios.post(`${url}/api/getstream`,{courseValue:[id]}).then(d => {
            // console.log(d.data);
            if (d.data.success === true) {
                setStream(d.data.data)
            } if (d.data.error === true) {
                setStream([""])
                // toast.error(d.data.message)
            }
        })
    }, [id])
    const member = (id) => {
        history.push(`/signup`)
    }

    const bb = s ? s.map(p => {
        if(p==="" ){ return(
            <p style={{color:'#fff'}}>Currently no stream available.<br/> Come back letter.</p>
        )}else{
        return (
            <Grid key={p.name} item sm={6}{...stylePropSub}>
                <CardDepth >
                    <Grid container justify='center'>
                        <Typography className={sty.subHeader} variant='h5'>{p.name}</Typography>
                        <Typography className={sty.subDesc} variant='subtitle1'>{p.desc}</Typography>
                        <Fab classes={{ label: sty.buttonLabel }} onClick={() => { member(p.name) }} className={sty.button} variant='extended'>Free Membership</Fab>
                    </Grid>
                </CardDepth>
            </Grid>
        )}
    }) : <Loading />
    return (
        <>
            {bb}
        </>
    )
}


const Course = (props) => {
    const [course, setCourse] = React.useState()
    const sty = styles()
    useEffect(()=>{
	document.title="Free Courses for GATE aspirants | Qriocty Box"
    },[])
    useEffect(() => {
        axios.get(`${url}/api/course`).then(d => {
            // console.log(d.data);
            if (d.data.success === true) {
                setCourse(d.data.data)
            } if (d.data.error === true) {
                setCourse([""])
                // toast.error(d.data.message)
            }
        })

    }, [])

    const styleProp = { style: { padding: '70px 20px' } }
    const stylePropSub = { style: { padding: `50px ${pxToVw(150)} ` } }
    // console.log(course);



    const listRender = course ? course.map(p => {
        // console.log(data);
        if(p===""){
            return(
                <E5/>
            )
        }else{
        return (

            <Grid key={p.name} className={sty.root} container>
                <Grid item container justify='center' xs={12}>
                    <Typography className={sty.header} variant='h4'>{p.name}</Typography>
                </Grid>
                <Grid item container xs={12} justify='center' alignItems='center'>
                    <CardComponent >
                        <Stream id={p.name} />
                    </CardComponent>
                </Grid>
            <Toolbar />
            </Grid>


        )}
    }) : <Loading />

    return (
        <>
            <Toolbar style={{ background: Theme.boxColor }} />
            {listRender}
            <Footer />


        </>
    );
};

export default Course;
