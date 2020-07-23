import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Theme } from "../theme";
import {
  Box,
  Typography,
  Avatar,
  CircularProgress,
  FormControl,
  NativeSelect,
  Toolbar,
} from "@material-ui/core";
import ChartComponent from "../Components/barData";

const useStyles = makeStyles((t) => ({
  root: {
    flexGrow: 1,
  },
  dashboardbox: {
    borderWidth: "5px",
    height: "auto",
    width: "80%",
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: "20px",
    background: Theme.boxColor,
    borderRadius: "40px",
    boxShadow: Theme.boxShadow,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [t.breakpoints.down("md")]: {
      width: "95%",
      marginLeft: "2.5%",
      marginRight: "2.5%",
    },
  },
  avtarcontainer: {
    height: 100,
    width: 100,
    backgroundColor: Theme.buttonColor.color1,
    borderRadius: "50%",
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: Theme.outerBoxShadow,
  },
  avtar: {
    height: 80,
    width: 80,
  },
  avtarusername: {
    color: Theme.textColor.color1,
    fontSize: 25,
    letterSpacing: 0.95,
    textAlign: "center",
    marginTop: 15,
    fontWeight: "bold",
    [t.breakpoints.down("md")]: {
      fontSize: 20,
    },
  },
  dashboardscorebox: {
    width: "40vw",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    [t.breakpoints.down("md")]: {
      width: "50vw",
    },
    [t.breakpoints.down("sm")]: {
      width: "100vw",
    },
  },
  scoreboxciclecontainer: {
    width: 100,
    height: 100,
    borderRadius: "50%",
    backgroundColor: Theme.backgroundColor,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  Scoresub: {
    fontSize: 11,
    color: Theme.textColor.color1,
  },
  Scoreper: {
    fontSize: 13,
    color: Theme.textColor.color1,
  },
  contentinprogress: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Theme.textColor.lightheading,
    borderRadius: "50%",
    margin: 7,
    color: Theme.textColor.color1,
  },
  progresbar: {
    color: Theme.textColor.heading2,
  },
  barheading: {
    color: Theme.textColor.color2,
    marginTop: 20,
  },
  barcontainer: {
    width: "40vw",
    margin: 20,
    height: 240,
    backgroundColor: Theme.backgroundColor,
    borderRadius: 16,
    [t.breakpoints.down("sm")]: {
      width: "80vw",
    },
    [t.breakpoints.up("lg")]: {
      width: "35vw",
      backgroundColor: "#eee",
    },
  },
  selectorcontainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "90%",
    marginLeft: "5%",
  },
  formControl: {
    minWidth: "auto",
    color: Theme.textColor.heading,
    textDecoration: "none",
  },
  select: {
    color: Theme.textColor.heading,
  },
  bargraphcontainer: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  daynametext: {
    fontSize: 15,
    [t.breakpoints.down("sm")]: {
      fontSize: 15,
    },
  },
}));

const BarMapping = () => {
  const classes = useStyles();
  return (
    <Box className={classes.bargraphcontainer}>
      <ChartComponent />
    </Box>
  );
};

const BarContentRender = () => {
  const classes = useStyles();
  return (
    <Box className={classes.barcontainer}>
      <Box className={classes.selectorcontainer}>
        <Box>{WeekSelector()}</Box>
        <Box>{MonthSelector()}</Box>
      </Box>
      <Box>{BarMapping()}</Box>
    </Box>
  );
};

const weekData = [
  { day: "SUN", per: 30 },
  { day: "MON", per: 70 },
  { day: "TUE", per: 80 },
  { day: "WED", per: 50 },
  { day: "THU", per: 90 },
  { day: "FRI", per: 40 },
  { day: "SAT", per: 65 },
];

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
		<Toolbar style={{background:Theme.boxColor}}/>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box className={classes.dashboardbox}>
            <Box className={classes.avtarcontainer}>
              <Avatar
                className={classes.avtar}
                alt="Profile"
                src="https://aardvark.ghostpool.com/community/wp-content/uploads/avatars/72/5cbddabff083e-bpfull.jpg"
              />
            </Box>
            <Typography className={classes.avtarusername} variant="body2">
              DEALING JANA
            </Typography>
            <Box>{DashScoreBox()}</Box>
            <Typography className={classes.barheading} variant="h5">
              Hours this week:
            </Typography>
            <Box>{BarContentRender()}</Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <h1>Course</h1>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

const WeekSelector = () => {
  const [age, setAge] = React.useState("Week 2");
  const classes = useStyles();
  return (
    <FormControl className={classes.formControl}>
      <NativeSelect
        className={classes.select}
        defaultValue={20}
        disableUnderline={true}
        inputProps={{
          name: "name",
          id: "uncontrolled-native",
        }}
      >
        <option value={10}>Week 1</option>
        <option value={20}>Week 2</option>
        <option value={30}>Week 3</option>
      </NativeSelect>
    </FormControl>
  );
};

const MonthSelector = () => {
  const [age, setAge] = React.useState("Week 2");
  const classes = useStyles();
  return (
    <FormControl className={classes.formControl}>
      <NativeSelect
        className={classes.select}
        defaultValue={20}
        disableUnderline={true}
        inputProps={{
          name: "name",
          id: "uncontrolled-native",
        }}
      >
        <option value={10}>February 2020</option>
        <option value={20}>March 2020</option>
        <option value={30}>April 2020</option>
        <option value={30}>May 2020</option>
        <option value={30}>June 2020</option>
      </NativeSelect>
    </FormControl>
  );
};

const ScoreData = [
  { score: 50, sub: "Non Technical Score" },
  { score: 70, sub: "Non Technical Score" },
  { score: 100, sub: "Non Technical Score" },
];

const CircularProgressWithLabel = (props) => {
  const classes = useStyles();

  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress
        variant="static"
        {...props}
        size={90}
        className={classes.progresbar}
      />
      <Box className={classes.contentinprogress}>
        <Typography
          variant="h6"
          m={0}
          p={0}
          component="h4"
          className={classes.Scoreper}
        >{`${Math.round(props.value)}%`}</Typography>
        <Typography
          variant="p"
          component="div"
          color="textSecondary"
          align="center"
          className={classes.Scoresub}
        >
          {props.sub}
        </Typography>
      </Box>
    </Box>
  );
};

const DashScoreBox = () => {
  const classes = useStyles();

  return (
    <Box className={classes.dashboardscorebox}>
      {ScoreData.map((data) => {
        return (
          <Box className={classes.scoreboxciclecontainer}>
            <CircularProgressWithLabel value={data.score} sub={data.sub} />
          </Box>
        );
      })}
    </Box>
  );
};
