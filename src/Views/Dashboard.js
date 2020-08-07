import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Theme, pxToVh, pxToVw } from "../theme";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  Box,
  Typography,
  Avatar,
  CircularProgress,
  FormControl,
  NativeSelect,
  Toolbar,
  IconButton,
  Fab,
} from "@material-ui/core";
import ChartComponent from "../Components/barData";
import PracticeTabs from "../Components/PracticeTabs";

import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";

const useStyles = makeStyles((t) => ({
  root: {
    flexGrow: 1,
    overflowX: "hidden",
  },
  dashboardbox: {
    borderWidth: "5px",
    height: "580px",
    width: "80%",
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: "10px",
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
    marginTop: 10,
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
    marginTop: 20,
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
  currentcoursestext: {
    color: Theme.textColor.heading,
    marginTop: 20,
    fontWeight: "bold",
    [t.breakpoints.down(960)]: {
      textAlign: "center",
    },
  },
  courseboxcontainer: {
    background: Theme.boxColor,
    borderRadius: 40,
    paddingBottom: 15,
    [t.breakpoints.down("md")]: {
      marginRight: 7.5,
      marginLeft: 7.5,
    },
  },
  coursenameincoursecontainer: {
    color: Theme.textColor.color1,
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
    [t.breakpoints.down(960)]: {
      fontSize: 16,
      textAlign: "center",
    },
  },
  coursedescincoursecontainer: {
    color: Theme.textColor.color1,
    fontSize: 16,
    marginTop: 10,
    [t.breakpoints.down(960)]: {
      fontSize: 15,
      textAlign: "center",
    },
  },
  practiceButtonBoxContainer: {
    display: "flex",
    justifyContent: "center",
  },
  practiceButton: {
    background: Theme.textColor.heading,
    color: Theme.textColor.color1,
    borderRadius: 16,
    padding: 0,
    width: 100,
    "&:hover": {
      backgroundColor: Theme.textColor.heading2,
    },
  },
  ExpandMoreIconStyle: {
    color: Theme.textColor.color1,
    padding: 0,
  },
  box: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
  },
}));

const RenderCourseBox = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(-1);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return CourseData.map((data, index) => {
    return (
      <ExpansionPanel
        square
        expanded={expanded === index}
        onChange={handleChange(index)}
        aria-controls="panel1d-content"
        id="panel1d-header"
        style={{
          background: Theme.boxColor,
          borderRadius: 40,
          marginTop: 10,
          paddingTop: 10,
          marginLeft: 10,
        }}
      >
        <ExpansionPanelSummary
          expandIcon={
            <ExpandMoreIcon
              style={{ color: "#fff" }}
              className={classes.ExpandMoreIconStyle}
            />
          }
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          {/*  */}

          <Box>
            <Typography
              variant="h5"
              className={classes.coursenameincoursecontainer}
            >
              {data.coursename}
            </Typography>
            <Typography
              variant="h5"
              className={classes.coursedescincoursecontainer}
            >
              {data.coursedesc}
            </Typography>
          </Box>

          {/*  */}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Box
            container
            alignItems="center"
            justify="center"
            className={classes.box}
          >
            <Box className={classes.practiceButtonBoxContainer}>
              <PracticeTabs PracticeData={data.practiceData} />
            </Box>
          </Box>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  });
};

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Toolbar style={{ background: Theme.boxColor }} />
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
          <Box mr={1}>
            <Typography className={classes.currentcoursestext} variant="h5">
              Current Courses:
            </Typography>
            <Box mb={2}>{RenderCourseBox()}</Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

// COURSE DATA
const CourseData = [
  {
    coursename: "Course Name One",
    coursedesc:
      "This is is description of course. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    practiceData: [
      {
        tabName: "Practice",
        tabData: [
          {
            subName: "English",
          },
          {
            subName: "Mathematics",
          },
          {
            subName: "History II",
          },
          {
            subName: "English",
          },
          {
            subName: "Mathematics",
          },
          {
            subName: "History II",
          },
          {
            subName: "English",
          },
          {
            subName: "Mathematics",
          },
          {
            subName: "History II",
          },
        ],
      },
      {
        tabName: "Weekly Test",
        tabData: [
          {
            subName: "Geography",
          },
          {
            subName: "General Knowledge",
          },
        ],
      },
      {
        tabName: "Monthly Test",
        tabData: [
          {
            subName: "English",
          },
        ],
      },
    ],
  },
  {
    coursename: "Course Name One",
    coursedesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    practiceData: [
      {
        tabName: "Practice",
        tabData: [
          {
            subName: "English",
          },
          {
            subName: "Mathematics",
          },
          {
            subName: "History II",
          },
        ],
      },
      {
        tabName: "Monthly Test",
        tabData: [
          {
            subName: "English",
          },
          {
            subName: "Mathematics",
          },
        ],
      },
    ],
  },
  {
    coursename: "Course Name One",
    coursedesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    practiceData: [
      {
        tabName: "Practice1",
        tabData: [
          {
            subName: "English",
          },
          {
            subName: "Mathematics",
          },
          {
            subName: "History II",
          },
        ],
      },
      {
        tabName: "Practice2",
        tabData: [
          {
            subName: "English",
          },
          {
            subName: "Mathematics",
          },
          {
            subName: "History II",
          },
        ],
      },
      {
        tabName: "Practice3",
        tabData: [
          {
            subName: "English",
          },
          {
            subName: "Mathematics",
          },
          {
            subName: "History II",
          },
        ],
      },
      {
        tabName: "Practice4",
        tabData: [
          {
            subName: "English",
          },
          {
            subName: "Mathematics",
          },
          {
            subName: "History II",
          },
        ],
      },
      {
        tabName: "Practice5",
        tabData: [
          {
            subName: "English",
          },
          {
            subName: "Mathematics",
          },
          {
            subName: "History II",
          },
        ],
      },
    ],
  },
];

const BarMapping = () => {
  const classes = useStyles();
  return (
    <Box className={classes.bargraphcontainer}>
      <ChartComponent />
    </Box>
  );
};

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

const ExpansionPanel = withStyles({
  root: {
    color: "#fff",
    // width: "100%",
    // border: '1px solid rgba(0, 0, 0, .125)',
    // boxShadow: 'none',
    // "&:not(:last-child)": {
    //   borderBottom: 0,
    // },
    // "&:before": {
    //   display: "none",
    // },
    // "&$expanded": {
    //   margin: "auto",
    // },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    // minHeight: 56,
    "&$expanded": {
      minHeight: 0,
    },
  },
  content: {
    "&$expanded": {},
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles((theme) => ({
  root: {},
}))(MuiExpansionPanelDetails);

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
