import React from 'react';
import Grid from '@material-ui/core/Grid';
import { url } from '../config/config';
import { pxToVh, pxToVw, Theme } from './../theme';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles, IconButton, Input, Link, Fab } from '@material-ui/core';
import CardDepth from './cardDepth';
import ButtonComponent from './button';
import BigLogo from '../static/logo/BigLogoText.png';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import { useState } from 'react';
import { toast } from 'react-toastify';

const styles = makeStyles((t) => ({
  root: {
    display: 'flex',
    color: Theme.textColor.color1,
    flexDirection: 'column',
    padding: pxToVw(50),
    paddingBottom: 0,
    background: Theme.boxColor,
  },
  list: {
    '& p': {
      fontFamily: 'Poppins',
      fontSize: 18,
      lineHeight: 2,
      cursor: 'pointer',
    },
    paddingTop: 30,
    paddingBottom: 30,
  },
  social: {
    [t.breakpoints.down('xs')]: {
      justifyContent: 'center',
      textAlign: 'center',
    },
  },
  icon: {
    color: '#000',
    padding: 0,
  },
  inputBase: {
    borderRadius: 'inherit',
    color: Theme.textColor.placeholder,
  },
  input: {
    color: Theme.textColor.placeholder,
    borderRadius: 'inherit',
    fontFamily: 'Poppins',
    paddingLeft: 15,

    '&::placeholder': {
      color: Theme.textColor.placeholder,
      fontFamily: 'Poppins',
      fontSize: 15,
      opacity: '1',
    },
  },
  newsletter: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    [t.breakpoints.down('xs')]: {
      paddingTop: 50,
      alignItems: 'center',
    },
    '& p': {
      fontFamily: 'Poppins',
      fontWeight: 200,
    },
  },
  newsletterInput: {
    height: 30,
    width: pxToVw(464),
    paddingTop: 20,
    [t.breakpoints.down('xs')]: {
      minWidth: '60vw',
    },
  },

  pay: {
    paddingTop: pxToVh(60),
    textAlign: 'center',
  },
  copy: {
    textAlign: 'center',
  },
  released: {
    boxShadow: `4px 4px 5px 1px rgba(00,00,00,0.2),-4px -4px 5px 1px rgba(255,255,255,0.2)`,
    background: Theme.boxColor,
    height: 40,
    margin: '20px 0',
  },
  label: {
    color: Theme.textColor.color2,
    fontWeight: 'thin',
  },
  iconbutton: {
    left: '40%',
    bottom: '110px',
  },
  button: {
    borderRadius: '50%',
    padding: 8,
    background: Theme.boxColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: `4px 4px 5px 1px rgba(00,00,00,0.2),-4px -4px 5px 1px rgba(255,255,255,0.2)`,
  },
  innercircle: {
    borderRadius: '50%',
    padding: 5,
    border: '5px solid white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const Footer = () => {
  const sty = styles();
  const [state, setState] = useState({});
  const subscribe = (e) => {
    e.preventDefault();
    fetch(`${url}/subscribe`, {
      method: 'POST',
      body: JSON.stringify(state),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      res.json().then((d) => {
        console.log(d);
        d.success &&
          toast.success(
            'Successfully register in our database. We are in touch now'
          );
        d.error &&
          toast.error('Sorry ! Something went wrong. Please try again.');
      });
    });
  };
  const handleChange = (e) => {
    setState({ ...state, [e.target.id]: e.target.value });
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <Grid container justify="center" alignItems="center" className={sty.root}>
      <img src={BigLogo} alt="" style={{ height: 170, width: 150 }} />
      <IconButton
        onClick={scrollToTop}
        color="inherit"
        className={sty.iconbutton}
      >
        <div className={sty.button}>
          <div className={sty.innercircle}>
            <ArrowUpwardIcon />
          </div>
        </div>
      </IconButton>
      <Typography
        variant="subtitle1"
        style={{ padding: '12px 0', fontWeight: 'bold' }}
      >
        Hunt for Curiosity
      </Typography>

      <Grid
        alignItems="center"
        container
        style={{ padding: '12px 7%', flexDirection: 'column' }}
      >
        <Typography variant="h5">GATE</Typography>
        <br />
        <Typography variant="body2">
          GATE (Graduate Aptitude Test in Engineering) is a computer based
          examination conducted to test the applicant in engineering & science
          concepts in the under graduate program. This is a national level
          examination attempted by around 10 lakh candidates trying to secure a
          job at PSU's and/or to get admitted to prestigious institutes for
          Masters. The question papers are set by IISC & IIT's each year.
          <Link color="textSecondary" component={RouterLink} to="/courses/gate">
            {' '}
            know more
          </Link>
        </Typography>
        <br />
        <Typography variant="h5">TECHNICAL GAMES</Typography>
        <br />
        <Typography variant="body2">
          From statistical data it has been analyzed that almost 80 percent of
          the students who are in there final year of B. Tech are confused
          regarding should they pursue higher studies or grab a campus placement
          from their respective colleges Of Further survey it has been seen that
          most of the students starts scavenging the internet to acquire study
          materials for appearing in GATE IES etc. and other government exam and
          separately they buy study material for recruitment focused tests. This
          way of approach might seem to be correct but in reality, the students
          following this path gets lost in the middle and ends up Sacrifice one
          of the other and enters into a dilemma weather to focus on recruitment
          drives or government exams Help students from entering into this
          dilemma, we at QRIOCTY BOX have come up with this unique package
          called TECHNICAL GAME which has been designed to help students by
          providing a single game to tackle both recruitment exams and as well
          as the government exams this course covers all the pillars of
          recruitment exams involving aptitude logical reasoning and technical
          section which also includes interview specific core questions created
          by industry professionals.
          <Link
            color="textSecondary"
            component={RouterLink}
            to="/courses/techgame"
          >
            {' '}
            know more
          </Link>
        </Typography>
      </Grid>
      <br />

      <Grid className={sty.social} container>
        <Grid item className={sty.list} sm={4}>
          <Typography variant="body1">Terms & Conditions</Typography>
          <Typography variant="body1">Legal Notice</Typography>
          <Typography variant="body1">Privacy Policy</Typography>
          <Typography variant="body1">Contact</Typography>
        </Grid>
        <Grid item container justify="space-evenly" alignItems="center" sm={4}>
          <ButtonComponent
            style={{ height: 40, width: 40 }}
            onClick={() => {
              window.location = 'https://www.instagram.com/qrioctybox/';
            }}
          >
            <CardDepth style={{ height: '80%', width: '80%' }}>
              <IconButton className={sty.icon}>
                <InstagramIcon />
              </IconButton>
            </CardDepth>
          </ButtonComponent>

          <ButtonComponent
            style={{ height: 40, width: 40 }}
            onClick={() => {
              window.location = 'https://www.facebook.com/qrioctybox/';
            }}
          >
            <CardDepth style={{ height: '80%', width: '80%' }}>
              <IconButton className={sty.icon}>
                <FacebookIcon />
              </IconButton>
            </CardDepth>
          </ButtonComponent>
          <ButtonComponent
            style={{ height: 40, width: 40 }}
            onClick={() => {
              window.location =
                'https://www.youtube.com/channel/UCFI607_YfGNUmlw7E6HTu5g';
            }}
          >
            <CardDepth style={{ height: '80%', width: '80%' }}>
              <IconButton className={sty.icon}>
                <YouTubeIcon />
              </IconButton>
            </CardDepth>
          </ButtonComponent>
          <ButtonComponent style={{ height: 40, width: 40 }}>
            <CardDepth style={{ height: '80%', width: '80%' }}>
              <IconButton className={sty.icon}>
                <LinkedInIcon />
              </IconButton>
            </CardDepth>
          </ButtonComponent>
        </Grid>
        <Grid item className={sty.newsletter} sm={4}>
          <Typography variant="h5">Newsletter</Typography>

          <form style={{ display: 'contents' }} onSubmit={subscribe}>
            <div className={sty.newsletterInput}>
              <CardDepth>
                <Input
                  id="name"
                  required
                  onChange={handleChange}
                  value={state.name}
                  disableUnderline
                  fullWidth
                  autoComplete="off"
                  type="text"
                  placeholder="Name"
                  className={sty.inputBase}
                  classes={{ input: sty.input }}
                />
              </CardDepth>
            </div>
            <div className={sty.newsletterInput}>
              <CardDepth>
                <Input
                  className={sty.inputBase}
                  onChange={handleChange}
                  value={state.email}
                  id="email"
                  type="email"
                  required
                  disableUnderline
                  fullWidth
                  placeholder="E-mail"
                  classes={{ input: sty.input }}
                />
              </CardDepth>
            </div>
            <Fab
              variant="extended"
              type="submit"
              classes={{ label: sty.label }}
              className={sty.released}
            >
              Register for free
            </Fab>
          </form>
        </Grid>
        {/* <Grid item xs={12} className={sty.pay}>

				</Grid> */}
        <Grid item xs={12} className={sty.copy}>
          <p>
            {'© '}
            {new Date().getFullYear()} Qriocty Box Education Service. All rights
            reserved{' '}
          </p>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
