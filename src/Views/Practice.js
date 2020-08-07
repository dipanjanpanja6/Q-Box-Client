import React, { useRef, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { pxToVh, pxToVw, Theme } from "./../theme";
import CardComponent from "../Components/cardEmbossed";
import { Link } from "react-router-dom";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import {
  Toolbar,
  Fab,
  makeStyles,
  Box,
  IconButton,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";

import Videojs from "../Components/videoPlayer";

const videoJsOptions = {
  autoplay: false,
  playbackRates: [0.3, 0.5, 1, 1.25, 1.5, 2, 2.5],
  width: 720,
  height: 300,
  controls: true,
  fluid: true,

  cacheEncryptionKeys: true,
  //   aspectRatio: '1:1',
  sources: [
    {
      src: "https://s3.ap-south-1.amazonaws.com/veido.thumbnail/spw/test.m3u8",
      // src: require('./cc.mkv'),
      // type: 'video/mp4',
      type: "application/x-mpegURL",
    },
  ],
  html5: {
    vhs: {
      withCredentials: true,
    },
  },
  // poster: require('../static/400.svg')
};

const style = makeStyles((t) => ({
  content: {
    width: "100%",
    // minHeight:'100vh',
    // backgroundColor: 'white',
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
    [t.breakpoints.down("xs")]: {
      padding: 12,
    },
  },
  checkbox: {
    color: "white",
  },
  button: {
    background: Theme.textColor.color1,
    marginBottom: 12,
    width: 150,
    boxShadow: `4px 4px 5px 1px rgba(00,00,00,0.2),-4px -4px 5px 1px rgba(255,255,255,0.2)`,
    [t.breakpoints.down("xs")]: {
      width: "90%",
    },
  },
  buttonLabel: {
    color: Theme.textColor.heading,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  options: {
    [t.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
    },
  },

  question: {
    minHeight: "40%",
    width: "100%",
    alignItems: "center",
    padding: "5% 5% 12px",
    [t.breakpoints.down("xs")]: {
      paddingBottom: 12,
      paddingLeft: "8%",
    },
  },
  directionIcon: {
    color: Theme.textColor.color1,
    fontSize: 40,
    cursor: "pointer",
    padding: 0,
    margin: 0,
  },
  questionNumberStyle: {
    display: "flex",
    alignItems: "center",
  },
  practiceNumberStyle: {
    display: "flex",
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
  },
  numOfQueStyle: {
    color: Theme.textColor.color1,
    [t.breakpoints.down("sm")]: {
      fontSize: 15,
      margin: 0,
      padding: 0,
    },
  },
  radioButtonStyle: {
    color: Theme.textColor.color1,
    backgroundColor: "#fff",
    marginRight: 15,
    padding: 0,
  },
  radioGroupStyle: {
    padding: 0,
    width: "100%",
  },
  optionContainer: {
    padding: "50px 5% 50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [t.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  radioLabelStyle: {
    color: Theme.textColor.color1,
    marginTop: 15,
  },
  videoContainer: {
    width: "50%",
    backgroundColor: Theme.textColor.color1,
    borderRadius: 16,
    boxShadow: `4px 4px 5px 1px rgba(00,00,00,0.2),-4px -4px 5px 1px rgba(255,255,255,0.2)`,
    borderRadius: pxToVh(80),
    border: "solid 7px blueviolet",
    overflow: "hidden",
    [t.breakpoints.down("xs")]: {
      borderRadius: pxToVh(60),
    },
    [t.breakpoints.down("md")]: {
      marginTop: "25px",
      width: "60%",
    },
    [t.breakpoints.down("sm")]: {
      width: "95%",
    },
  },
}));

const Practice = (props) => {
  const [state, setState] = React.useState({
    question:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    correctOption: 0,
    selectedOption: 0,
    option1: "This is Option 1",
    option2:
      "what is cvhjkjkjkhjh gfgfghjhkj lcvhjkjkjkh jhgfgfghjhkjl cvhjkjkjkhjhg fgfghjhkjl cvhjkjkj khjhgfgfghjhkjl cvhjkjkjkhjhgfgfghjhkjl hjl jhjh ghjkl kjh ghgjh kjl jhg gjhkjlk kjhfg hgjh ",
    option3: "what is what is what is what is what is ",
    option4: "hvjhvj",
    id: 1,
  });

  const fetchQuestions = (id) => {
    // const data = {
    // 	questionId: 1,
    // 	question:
    // 		'If ‘A’ is the mother of ‘B’ and ‘C’; and ‘D’ is the husband of ‘C’, then what is ‘A’ to ‘D’?',
    // 	fkChapterId: 13,
    // 	hasOptions: true,
    // 	option1: 'Mother',
    // 	option2: 'Son-in-Law',
    // 	option3: 'Mother-in-Law',
    // 	option4: 'Aunt',
    // 	option5: 'Cannot be determined',
    // 	videoLink: null,
    // 	imageLink: null,
    // 	hint: null,
    // 	correctOption: 3,
    // 	deleted: false,
    // };

    id > 0 &&
      axios
        .get(`http://localhost:8089/api/question?id=${id}`)
        .then((res) => {
          setState({
            question: res.data.question,
            correctOption: res.correctOption,
            option1: res.data.option1,
            option2: res.data.option2,
            option3: res.data.option3,
            option4: res.data.option4,
            option5: res.data.option5,
            id: id,
          });
        })
        .catch((error) => console.log("Sign In Api Error", error));
  };
  const [loading, setLoading] = React.useState(false);

  const classes = style();
  const option = [state.option1, state.option2, state.option3, state.option4];

  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <Toolbar style={{ background: Theme.boxColor }} />
      <Grid container className={classes.content}>
        <CardComponent>
          <Box container style={{ width: "90%", display: "flex" }} mt={2}>
            <Box className={classes.questionNumberStyle}>
              <IconButton style={{ margin: 0, padding: 0 }}>
                <ArrowLeftIcon className={classes.directionIcon} />
              </IconButton>
              <Typography variant="h5" className={classes.numOfQueStyle}>
                {"001"}
              </Typography>
              <IconButton style={{ margin: 0, padding: 0 }}>
                <ArrowRightIcon className={classes.directionIcon} />
              </IconButton>
            </Box>

            <Box className={classes.practiceNumberStyle}>
              <IconButton style={{ margin: 0, padding: 0 }}>
                <ArrowLeftIcon className={classes.directionIcon} />
              </IconButton>
              <Typography variant="h5" className={classes.numOfQueStyle}>
                {"Practice Set 001"}
              </Typography>
              <IconButton style={{ margin: 0, padding: 0 }}>
                <ArrowRightIcon className={classes.directionIcon} />
              </IconButton>
            </Box>
          </Box>

          <Box container className={classes.question}>
            <Typography variant="body1" style={{ color: "white" }}>
              {state.question}
            </Typography>
          </Box>

          <Box container className={classes.optionContainer}>
            <Box>
              <RadioGroup
                aria-label="gender"
                name="gender1"
                value={value}
                onChange={handleChange}
                className={classes.radioGroupStyle}
              >
                {option.map((data, index) => {
                  return (
                    <FormControlLabel
                      value={data}
                      className={classes.radioLabelStyle}
                      control={<Radio className={classes.radioButtonStyle} />}
                      label={data}
                    />
                  );
                })}
              </RadioGroup>
            </Box>
            <Box className={classes.videoContainer}>
              <Videojs {...videoJsOptions} />
            </Box>
          </Box>

          <Grid
            item
            container
            justify="space-evenly"
            style={{ paddingTop: "1%", paddingBottom: "5%" }}
          >
            <Fab
              variant="extended"
              type="submit"
              classes={{ label: classes.buttonLabel }}
              className={classes.button}
            >
              VIDEO{loading && <CircularProgress />}
            </Fab>
            <Fab
              variant="extended"
              type="submit"
              classes={{ label: classes.buttonLabel }}
              className={classes.button}
            >
              Q-BOOK{loading && <CircularProgress />}
            </Fab>
            <Fab
              variant="extended"
              type="submit"
              classes={{ label: classes.buttonLabel }}
              className={classes.button}
            >
              ONE TO ONE{loading && <CircularProgress />}
            </Fab>
            <Fab
              variant="extended"
              type="submit"
              classes={{ label: classes.buttonLabel }}
              className={classes.button}
            >
              REVIEW & Next{loading && <CircularProgress />}
            </Fab>
            <Fab
              variant="extended"
              type="submit"
              classes={{ label: classes.buttonLabel }}
              className={classes.button}
            >
              SAVE & NEXT{loading && <CircularProgress />}
            </Fab>
          </Grid>
        </CardComponent>
      </Grid>
    </>
  );
};

export default Practice;
