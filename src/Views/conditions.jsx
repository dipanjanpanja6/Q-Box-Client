import React, { Component } from 'react';
import { Toolbar, Grid, Typography } from '@material-ui/core';
import { Theme } from '../theme';
import { makeStyles } from '@material-ui/core/styles';
import CardComponent from '../Components/cardEmbossed';

const styles = makeStyles((t) => ({
  root: {
    backgroundColor: Theme.backgroundColor,
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  frame: {
    // paddingTop: 12,
    // paddingBottom: 12,
    backgroundColor: Theme.backgroundColor,
    display: 'flex',
    [t.breakpoints.down('xs')]: {
      minHeight: 'auto',
    },
  },
  heading: {
    padding: '12px 0',
    color: Theme.textColor.heading,
    fontWeight: 'bold',
    // marginBottom: 20,
  },
  item: {
    margin: '0px 20px',
    width: '100%',
    [t.breakpoints.down('xs')]: {
      padding: 0,
      margin: 0,
    },
  },
  item1: {
    // width: 500,
    padding: ' 50px 80px',
    // textAlign: 'center',
    color: '#fff',
    [t.breakpoints.down('xs')]: {
      padding: '40px 25px',
    },
  },
  backgroundcolor: {
    background: Theme.boxColor,
    boxShadow: `10px 10px 14px 1px rgba(00,00,00,0.2)`,
    height: '100%',
    width: '100%',
    borderRadius: 70,
    [t.breakpoints.down('xs')]: {
      borderRadius: 60,
    },
  },
}));

const Conditions = () => {
  const sty = styles();

  return (
    <div className={sty.root}>
      <Toolbar style={{ background: Theme.boxColor, minHeight: 64 }} />
      <Grid container className={sty.frame}>
        <Grid
          item
          sx={12}
          sm={6}
          style={{
            height: '100%',
            textAlign: '-webkit-center',
          }}
        >
          <Typography
            variant="h4"
            className={sty.heading}
            style={{ marginTop: 25 }}
          >
            Teams and conditions
          </Typography>
        </Grid>
      </Grid>
      <Grid container style={{ padding: 30 }}>
        <Grid item sm={12} className={sty.item}>
          <Grid container className={sty.backgroundcolor}>
            <div className={sty.item1}>
              <Typography
                variant="h5"
                style={{ color: '#fff' }}
                className={sty.heading}
              >
                AGREEMENT TO TERMS
              </Typography>
              <Typography variant="subtitle1" style={{ lineHeight: 2 }}>
                These Terms and Conditions constitute a legally binding
                agreement made between you, whether personally or on behalf of
                an entity (“you”) and [business entity name] (“we,” “us” or
                “our”), concerning your access to and use of the [website
                name.com] website as well as any other media form, media
                channel, mobile website or mobile application related, linked,
                or otherwise connected thereto (collectively, the “Site”).
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Conditions;
