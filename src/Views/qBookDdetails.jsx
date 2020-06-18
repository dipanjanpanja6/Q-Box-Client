import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import { Toolbar, Grid, Fab } from '@material-ui/core';
import { Theme, pxToVh } from '../theme';

import Footer from '../Components/Footer' 
import CardComponent from '../Components/cardEmbossed';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const ExpansionPanel = withStyles({
  root: {
    background: 'initial',
    boxShadow: 'initial',
    color: '#fff',
    width: '100%',
    // border: '1px solid rgba(0, 0, 0, .125)',
    // boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    color: '#fff',
    padding: '0 32px',
    // backgroundColor: 'rgba(0, 0, 0, .03)',
    // borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}))(MuiExpansionPanelDetails);

const styles = makeStyles(t => ({
  heading: {
    textTransform: 'uppercase',
    textAlign: 'center',
    color: Theme.textColor.heading,
    fontWeight: 'bold',
    padding: '4% 0',
    [t.breakpoints.down('xs')]: {
      padding: '8vw 0',

    }
  },
  box: {
    // backgroundColor: Theme.backgroundColor
    padding: '2%',
    boxShadow: `inset 4px 4px 5px 1px rgba(00,00,00,0.2), inset -4px -4px 5px 1px rgba(255,255,255,0.2)`,
    height: '100%',
    width: '100%',
    borderRadius: pxToVh(80),
    [t.breakpoints.down('xs')]: {
      padding: '8vw',

    }
  },
  chapter: {
    margin: '1% 0'
  },
  button: {
    // background: Theme.textColor.heading,
    // background: Theme.boxColor,
    background:
      'transparent radial-gradient(farthest-corner at 100% 0%, #8a2be2 0%, #8a2be2 31%, #8a2be2 69%, #8a2be2 100%) 0% 0% no-repeat padding-box',

    margin: '12px 0',
    width: '100%',
    boxShadow: `4px 4px 5px 1px rgba(00,00,00,0.2),-4px -4px 5px 1px rgba(255,255,255,0.2)`,
  },

  buttonLabel: {
    padding: 12,
    color: '#fff',
    textTransform: 'uppercase',
  },
}))



export default function CustomizedExpansionPanels() {
  const sty = styles()
  const [expanded, setExpanded] = React.useState(0);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  var data = [
    {
      id:1,
      name: 'engineering mechanics',
      chapter: [
        "chapter 1", "chapter 2", "chapter 3"
      ]
    },
    {
      id:1,
      name: 'Mathematics',
      chapter: [
        "chapter 1", "chapter 2", "chapter 3", "chapter 4"
      ]
    },
    {
      id:1,
      name: 'heat transfer',
      chapter: [
        "chapter 1", "chapter 2",
      ]
    },
    {
      id:1,
      name: 'RAC',
      chapter: [
        "chapter 1", "chapter 2",
      ]
    },
    {
      id:1,
      name: 'M. Design',
      chapter: [
        "chapter 1", "chapter 2",
      ]
    },

  ]
  const style = { style: { margin: '12px 0px', } }


  const map = data ? data.map((p, i) => {
    return ( 
        <CardComponent key={p.id} item {...style} >
          <ExpansionPanel square expanded={expanded === i} onChange={handleChange(i)}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon style={{color:'#fff'}} />} aria-controls="panel1d-content" id="panel1d-header">
              <Typography>{p.name}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>

              <Grid container alignItems='center' justify='center' className={sty.box} >
                {p.chapter.map((p, i) => {
                  return (
                    <Fab key={i} variant='extended' type="submit" classes={{ label: sty.buttonLabel }} className={sty.button}>
                      <Typography variant='subtitle1' style={{ padding: 12 }}>{p}</Typography>
                    </Fab>
                  )
                })}

              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </CardComponent>

    )
  }) : ""

  // const radius =responsive?"": { style: { borderRadius: 111 } };
  return (
    <>
      <Toolbar style={{ background: Theme.boxColor, width: '100' }} />
      <Grid container justify='space-between' alignItems='center' style={{ padding: '12px 3% 3%' }}>
        <Grid item container justify='center' alignItems='center'>
          <Typography variant='h4' className={sty.heading}>mechanical engineering</Typography>
        </Grid>
        {map}

      </Grid>
      <Footer />
    </>
  );
}
