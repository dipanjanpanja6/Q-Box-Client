import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { pxToVh, pxToVw, Theme } from './../theme';
import CardComponent from '../Components/cardEmbossed';
import Footer from '../Components/Footer';
// import SlideOne from '../static/Studying_bro.svg';
import SlideOne from '../static/home.svg';
import SlideTwo from '../static/Virtual_reality.svg';
// import SlideThreeA from '../static/On_the_way.svg';
import SlideThreeA from '../static/success.svg';
import SlideFourA from '../static/Press_play.svg';
import SlideFourB from '../static/Online_shopping.svg';
import SlideFourC from '../static/Live_collaboration.svg';
import SlideFiveA from '../static/Documents_bro.svg';
import SlideFiveB from '../static/Reading_list.svg';
import SlideSix from '../static/Report.svg';
import BigLogo from '../static/logo4.svg';
import FreeCourse from '../static/Gift-bro.svg';
import Laptop from '../static/laptop.png';
import Mobile from '../static/mobile.png';

import { makeStyles, Fab, Toolbar } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const styles = makeStyles((t) => ({
  root: {
    width: '100%',
    backgroundColor: Theme.backgroundColor,
    height: '100%',
  },
  screenDivisionStyles: {
    height: '100%',
    width: '100%',
  },
  scrollStyles: {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  firstSlideParent: {
    minHeight: 600,
    [t.breakpoints.down('xs')]: {
      flexDirection: 'column',
      height: 'auto',
      minHeight: 500,
      paddingBottom: 40,
    },
  },
  firstSlideText: {
    minHeight: 500,
    width: pxToVw(868),
    alignSelf: 'center',
    flexDirection: 'column',
    [t.breakpoints.down('xs')]: {
      width: 'auto',
      minHeight: 'auto',
      flexDirection: 'row',
      // marginTop: 100,
      height: 'auto',
    },
  },
  search1st: {
    height: pxToVh(69),
    width: pxToVw(749),
    boxSizing: 'border-box',
    alignSelf: 'center',
    [t.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  secondSlideParent: {
    // minHeight: 600,
  },
  secondImg: {
    width: '100%',
    maxHeight: 500,
    [t.breakpoints.down('xs')]: {
      height: '100vw',
      width: '75vw',
    },
  },
  baseStyle: {
    paddingLeft: pxToVw(20),
  },
  input: {
    padding: 0,
    margin: 0,
    height: '100%',
    '&::placeholder': {
      color: Theme.textColor.placeholder,
      fontFamily: 'Poppins',
      fontSize: pxToVw(22),
      fontWeight: 'light',
      opacity: '1',
      padding: 0,
      margin: 0,
      height: '100%',
    },
  },
  thirdSlideParent: {
    // minHeight: '90vh',
    width: '100%',
    background: Theme.boxColor,
    display: 'flex',
    [t.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
  thirdText: {
    width: pxToVw(1011),
    padding: `0 ${pxToVw(170)}`,
    [t.breakpoints.down('xs')]: {
      width: '100%',
      padding: '3%',
    },
  },
  fourthSlideParent: {
    padding: `50px ${pxToVw(47)}`,
  },
  fifthSlideParent: {
    padding: 25,
    [t.breakpoints.down('xs')]: { flexDirection: 'column-reverse' },
  },
  fifthSlideParent2: {
    padding: 25,
    flexDirection: ' row-reverse',
    [t.breakpoints.down('xs')]: { flexDirection: 'column-reverse' },
  },
  sixthSlideParent: {
    height: pxToVh(1050),
    width: '100%',
    padding: `100px ${pxToVw(47)}`,
    boxSizing: 'border-box',
  },
  released: {
    boxShadow: `4px 4px 5px 1px rgba(00,00,00,0.2),-4px -4px 5px 1px rgba(255,255,255,0.2)`,
    // background: Theme.buttonColor.color1,
    background: Theme.boxColor,
  },
  label: {
    color: Theme.textColor.color2,
    // fontSize: pxToVw(22),
    // fontFamily: 'Poppins',
    fontWeight: 'thin',
  },
  pressed: {
    boxShadow: `inset 4px 3px 7px #C6CCE1 ,
inset -3px -4px 7px white`,
    background: Theme.buttonColor.color1,
  },
  searchField: {
    backgroundColor: Theme.backgroundColor,
  },
  heading: {
    color: Theme.textColor.color1,
    letterSpacing: pxToVw(0.9),
    lineHeight: 1.5,
    fontFamily: 'Poppins',
    fontWeight: 600,
    textAlign: 'center',
    paddingLeft: 25,
    paddingRight: 25,
    [t.breakpoints.down('xs')]: {
      padding: '30px 10% 0',
      fontSize: 20,
    },
  },
  heading2: {
    color: Theme.textColor.color1,
    letterSpacing: pxToVw(0.9),
    lineHeight: 1.5,
    textAlign: 'center',
    paddingLeft: 50,
    paddingRight: 50,
    [t.breakpoints.down('xs')]: {
      padding: '30px 5%',
      fontSize: 15,
      paddingBottom: 30,
    },
  },
  firstImg: {
    width: '100%',
    maxHeight: 500,
    [t.breakpoints.down('xs')]: {
      height: 'auto',
      width: '70vw',
    },
  },
  thirdImg: {
    width: '80%',
    maxHeight: 500,
    [t.breakpoints.down('xs')]: {
      height: '50vh',
      width: '75vw',
      paddingTop: 50,
    },
  },
  fourthCard: {
    height: '90%',
    width: `${100 / 3.2}%`,
    [t.breakpoints.down('xs')]: {
      width: '100%',
      padding: '20px 0',
    },
  },
  successText: {
    color: Theme.textColor.heading,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 60,
    [t.breakpoints.down('xs')]: {
      paddingTop: 90,
      paddingBottom: 0,
    },
  },
  whyText: {
    color: Theme.textColor.heading,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: '60px 0 30px',
    [t.breakpoints.down('xs')]: {
      paddingTop: 90,
      paddingBottom: 0,
    },
  },
  d3: {
    padding: '0 3%',
  },
}));

const firstSlide = (classes, register) => {
  return (
    <div style={{ background: Theme.boxColor }}>
      <Toolbar />
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.firstSlideParent}
      >
        <Grid
          item
          sm={5}
          xs={12}
          container
          justify="center"
          alignItems="center"
          style={{
            height: '100%',
            padding: '5%',
          }}
        >
          <img className={classes.firstImg} src={SlideOne} alt="" />
        </Grid>

        <Grid
          item
          sm={7}
          xs={12}
          container
          className={classes.firstSlideText}
          spacing={2}
          alignItems="center"
          justify="space-evenly"
        >
          <Typography variant="h4" className={classes.heading}>
            Join India's 1<sup>st</sup> practicing platform for competitive
            exams
          </Typography>
          <Typography variant="h6" className={classes.heading2}>
            Enroll in our course & start practicing for your upcoming
            competitive exams with Qriocty Box
          </Typography>

          {/* <div className={classes.search1st}>
					<CardDepth
						classes={{
							baseStyle: classes.baseStyle,
							root: classes.searchField,
						}}>
						<Input
							classes={{ input: classes.input }}
							disableUnderline
							fullWidth
							autoComplete="off"
							placeholder="Search for Subjects, Chapters, Topics, Courses"
						/>
					</CardDepth>
				</div>
				 */}
          <Grid
            container
            justify="center"
            style={{
              // height: pxToVh(94),
              width: '100%',
              alignSelf: 'flex-end',
            }}
          >
            <Fab
              variant="extended"
              onClick={register}
              classes={{ label: classes.label }}
              className={classes.released}
            >
              Register for free
            </Fab>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
const secondSlide = (classes) => {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.secondSlideParent}
    >
      <Grid
        item
        sm={7}
        container
        justify="center"
        alignItems="center"
        className={classes.secondText}
        style={{ padding: '0 5%' }}
      >
        <CardComponent style={{ padding: '26px 0' }}>
          <Grid
            container
            alignItems="center"
            justify="center"
            style={{ flexDirection: 'column' }}
          >
            {/* <div style={{ height: pxToVh(193), width: pxToVw(744) }}> */}
            <Typography
              variant="body1"
              style={{
                color: Theme.textColor.color1,
                padding: `50px ${pxToVw(150)}`,
                fontWeight: 600,
                lineHeight: 2,
                textAlign: 'center',
              }}
            >
              Explore 10,000+ Handpicked Questions along with <br />
              Video Solutions, Mock Tests,
              <br /> Quiz, Q-BOOK, Doubt Solutions
              <br /> and much more
            </Typography>
            {/* </div> */}

            <Fab
              variant="extended"
              classes={{ label: classes.label }}
              className={classes.released}
            >
              Get Started
            </Fab>
          </Grid>
        </CardComponent>
      </Grid>
      <Grid
        item
        sm={5}
        style={{ padding: '4%' }}
        container
        alignItems="center"
        justify="center"
      >
        <img src={SlideTwo} className={classes.secondImg} alt="" />
      </Grid>
    </Grid>
  );
};
const thirdSlide = (classes) => {
  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      className={classes.thirdSlideParent}
    >
      <Grid
        item
        sm={6}
        container
        style={{ padding: '4%' }}
        alignItems="center"
        justify="flex-end"
      >
        <img src={SlideThreeA} className={classes.thirdImg} alt="" />
      </Grid>
      <Grid
        container
        item
        sm={6}
        justify="center"
        alignItems="center"
        className={classes.thirdText}
      >
        <Grid
          justify="space-around"
          container
          alignItems="center"
          style={{
            minHeight: 600,
            flexDirection: 'column',
            color: '#fff',
            padding: ' 0 7vw',
            textAlign: 'center',
          }}
        >
          <Typography variant="h6">STEP 1</Typography>
          <Typography variant="body1">
            Start practicing Tier 1 Questions
          </Typography>
          <Typography variant="h6">STEP 2</Typography>
          <Typography variant="body1">
            Open after finishing Tier 1. Start practicing Tier 2 Questions
          </Typography>
          <Typography variant="h6">STEP 3</Typography>
          <Typography variant="body1">
            Start Critical Thinking Zone after completing Tier 2 Questions
          </Typography>
          <Typography variant="h6">STEP 4</Typography>
          <Typography variant="body1">
            Goodies Unlocked Free Mock Tests
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
const fourthData = [
  {
    title: 'Exploring Video Sessions',
    desc:
      'Videos that help you explore each concept, making it easier to catch. Concept clarity leads to success.',
    img: SlideFourA,
  },
  {
    title: 'Unlimited practice with	conceptual discussing',
    desc:
      'Unlimited practice sets & videos	(with monitoring for each question)	to clear every doubts in every chapter.',
    img: SlideFourB,
  },
  {
    title: 'Unique One-One doubt clearing sessions',
    desc:
      'Unique course related questions for Newtonian minds using smart interactive classrooms to provide detailed solutions.',
    img: SlideFourC,
  },
];
const fourthSlide = (classes) => {
  const fourMap = fourthData
    ? fourthData.map((p, i) => {
        return (
          <div key={i} className={classes.fourthCard}>
            <CardComponent
              style={{ padding: '50px 0 0' }}
              children={
                <Grid
                  container
                  justify="center"
                  alignItems="center"
                  style={{
                    height: '500px',
                    width: '86%',
                    textAlign: '-webkit-center',
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      fontWeight: 'bold',
                      padding: '12px 10%',
                    }}
                  >
                    {p.title}
                  </Typography>
                  <Typography
                    style={{
                      fontWeight: 'light',
                    }}
                  >
                    {p.desc}
                  </Typography>
                  <div style={{ padding: '4%' }}>
                    <img
                      src={p.img}
                      style={{
                        width: '90%',
                        maxHeight: 400,
                      }}
                      alt=""
                    />
                  </div>
                </Grid>
              }
            />
          </div>
        );
      })
    : '';
  return (
    <Grid container justify="center" className={classes.fourthSlideParent}>
      {/* <CardComponent> */}
      <Grid
        container
        alignItems="center"
        justify="space-between"
        className={classes.scrollStyles}
        style={{
          color: '#fff',
          height: '100%',
          width: '95%',
          padding: '50px 0',
          lineHeight: '2 !important',
        }}
      >
        {fourMap}
      </Grid>
      {/* </CardComponent> */}
    </Grid>
  );
};
const fifthSlide = (classes, register) => {
  return (
    <>
      <Grid
        style={{
          padding: `70px ${pxToVw(150)}`,
        }}
      >
        <CardComponent>
          <Grid
            container
            alignItems="center"
            justify="center"
            className={classes.fifthSlideParent}
          >
            <Grid item sm={7} container justify="center" alignItems="center">
              <img src={BigLogo} style={{ height: 50, width: 50 }} />

              <Typography
                variant="h6"
                style={{
                  // fontFamily: 'Poppins',
                  // fontSize: Theme.fontSize.size2,
                  color: Theme.textColor.color1,
                  fontWeight: 'bold',
                }}
              >
                -Bank
              </Typography>
              <Typography
                variant="subtitle1"
                style={{
                  lineHeight: 2,
                  color: Theme.textColor.color1,
                  width: '100%',
                  textAlign: 'center',
                  padding: '10%',
                }}
              >
                Q-Bank has been created by the
                <br /> Qrious minds of every examiner.
                <br /> The questions have been handpicked
                <br /> from various books & previous competitve exams
                <br /> like GATE,IES,ISRO & other prestigious exams
              </Typography>

              <Fab
                variant="extended"
                onClick={register}
                classes={{ label: classes.label }}
                className={classes.released}
              >
                Getting Curious ?
              </Fab>
            </Grid>
            <Grid item sm={5} style={{ padding: '4%' }}>
              <img
                src={SlideFiveA}
                style={{ maxHeight: 500, width: '100%' }}
                alt=""
              />
            </Grid>
          </Grid>
        </CardComponent>
      </Grid>

      <Grid
        style={{
          padding: `70px ${pxToVw(150)}`,
        }}
      >
        <CardComponent>
          <Grid
            container
            alignItems="center"
            justify="center"
            className={classes.fifthSlideParent2}
          >
            <Grid item sm={7} container justify="center" alignItems="center">
              <img src={BigLogo} style={{ height: 50, width: 50 }} />

              <Typography
                variant="h6"
                style={{
                  color: Theme.textColor.color1,
                  fontWeight: 'bold',
                }}
              >
                -Book
              </Typography>
              <Typography
                variant="subtitle1"
                style={{
                  lineHeight: 2,
                  color: Theme.textColor.color1,
                  width: '100%',
                  textAlign: 'center',
                  padding: '10%',
                }}
              >
                Q-Book is the resource center where all
                <br />
                topics are represented by video or
                <br />
                animation with a proper description.
                <br />
                The Q-book has been curated for
                <br />
                competitive exam aspirants.
              </Typography>

              <Fab
                variant="extended"
                onClick={register}
                classes={{ label: classes.label }}
                className={classes.released}
              >
                Explore topics
              </Fab>
            </Grid>
            <Grid item sm={5} style={{ padding: '4%' }}>
              <img
                src={SlideFiveB}
                style={{ maxHeight: 500, width: '100%' }}
                alt=""
              />
            </Grid>
          </Grid>
        </CardComponent>
      </Grid>
    </>
  );
};

const sixthSlide = (classes, register) => {
  return (
    <Grid
      style={{
        padding: `70px ${pxToVw(150)} 140px`,
      }}
    >
      <CardComponent>
        <Grid
          container
          alignItems="center"
          justify="center"
          className={classes.fifthSlideParent}
        >
          <Grid item sm={6} container justify="center" alignItems="center">
            <Typography
              variant="h6"
              style={{
                color: Theme.textColor.color1,
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              Providing DEMO presentation
              <br /> at your campus
            </Typography>
            <Typography
              variant="subtitle1"
              style={{
                lineHeight: 2,
                color: Theme.textColor.color1,
                width: '100%',
                textAlign: 'center',
                padding: '13%',
              }}
            >
              Interested in learning more about Q-box?
              <br />
              Register below & we
              <br />
              may present you with a
              <br />
              seminar at your campus.
            </Typography>

            <Fab
              variant="extended"
              onClick={register}
              classes={{ label: classes.label }}
              className={classes.released}
            >
              Register for Seminar
            </Fab>
          </Grid>
          <Grid item sm={6} style={{ padding: '4%' }}>
            <img
              src={SlideSix}
              style={{ maxHeight: 500, width: '90%' }}
              alt=""
            />
          </Grid>
        </Grid>
      </CardComponent>
    </Grid>
  );
};
const freeCourseSlide = (classes, register) => {
  return (
    <Grid
      style={{
        padding: `70px ${pxToVw(150)} 140px`,
      }}
    >
      <CardComponent>
        <Grid
          container
          alignItems="center"
          justify="center"
          className={classes.fifthSlideParent}
        >
          <Grid item sm={6} style={{ padding: '4%' }}>
            <img
              src={FreeCourse}
              style={{ maxHeight: 500, width: '90%' }}
              alt=""
            />
          </Grid>

          <Grid item sm={6} container justify="center" alignItems="center">
            <Typography
              variant="h6"
              style={{
                color: Theme.textColor.color1,
                fontWeight: 'bold',
                width: '100%',
                textAlign: 'center',
                paddingBottom: '10%',
              }}
            >
              Register Now
              <br /> & get a course <br />
              of your choice for free !!
            </Typography>

            <Fab
              variant="extended"
              onClick={register}
              classes={{ label: classes.label }}
              className={classes.released}
            >
              Know more
            </Fab>
          </Grid>
        </Grid>
      </CardComponent>
    </Grid>
  );
};

const available = (sty) => {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ padding: `70px ${pxToVw(150)} 140px` }}
    >
      <Grid item sm={8} lg={8}>
        <div>
          <img
            src={Laptop}
            alt=""
            style={{
              borderRadius: 10,
              width: '100%',
              height: '100%',
            }}
          />
        </div>
      </Grid>
      <Grid item sm={4} lg={4}>
        <div>
          <img
            src={Mobile}
            alt=""
            style={{
              borderRadius: 10,
              width: '100%',
              height: '50%',
            }}
          />
        </div>
      </Grid>
    </Grid>
  );
};
const Courses = (sty) => {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ padding: `70px ${pxToVw(150)} 140px` }}
    >
      <Grid item sm={6} className={sty.d3}>
        <CardComponent>
          <div style={{ padding: '15%', color: '#fff' }}>
            <Typography
              variant="h4"
              style={{ color: '#fff', textAlign: 'center' }}
              className={sty.heading}
            >
              What we provide
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ lineHeight: 2, paddingTop: 22 }}
            >
              1. Unlimited industrial and specific government exam questions
              with video solutions.
              <br />
              <br />
              2. Concept Book.
              <br />
              <br />
              3. Free Mock Test.
              <br />
              <br />
              4. Quiz every week.
              <br />
              <br />
              5. Gift box containing coding or design technologies based on the
              preference of the student.
              <br />
              <br />
              6. Effort based report.
            </Typography>
          </div>
        </CardComponent>
      </Grid>
      <Grid item sm={6} className={sty.d3}>
        <CardComponent>
          <div style={{ padding: '15%', color: '#fff' }}>
            <Typography
              variant="h4"
              style={{ color: '#fff', textAlign: 'center' }}
              className={sty.heading}
            >
              What we provide
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ lineHeight: 2, paddingTop: 22 }}
            >
              1. Unlimited industrial and specific government exam questions
              with video solutions.
              <br />
              <br />
              2. Concept Book.
              <br />
              <br />
              3. Free Mock Test.
              <br />
              <br />
              4. Quiz every week.
              <br />
              <br />
              5. Gift box containing coding or design technologies based on the
              preference of the student.
              <br />
              <br />
              6. Effort based report.
            </Typography>
          </div>
        </CardComponent>
      </Grid>
    </Grid>
  );
};

const availableText = (classes) => {
  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      style={{ width: '100%' }}
    >
      <Typography
        variant="h4"
        style={{
          color: Theme.textColor.heading,
          fontWeight: 'bold',
        }}
      >
        ALSO AVAILABLE ON :
      </Typography>
    </Grid>
  );
};
const coursesText = (classes) => {
  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      style={{ width: '100%' }}
    >
      <Typography
        variant="h4"
        style={{
          color: Theme.textColor.heading,
          fontWeight: 'bold',
        }}
      >
        COURSES
      </Typography>
    </Grid>
  );
};
const successText = (classes) => {
  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      style={{ width: '100%' }}
    >
      <Typography variant="h4" className={classes.successText}>
        WAY TO SUCCESS
      </Typography>
    </Grid>
  );
};
const whyusText = (classes) => {
  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      style={{ width: '100%' }}
    >
      <Typography variant="h4" className={classes.whyText}>
        WHY US?
      </Typography>
    </Grid>
  );
};

const Home = () => {
  const history = useHistory();
  useEffect(() => {
    document.title =
      "Qriocty Box | India's 1st practicing platform for competitive exams";
  }, []);
  const register = () => {
    history.push('/signup');
  };

  const classes = styles();
  const screenDivisions = [
    firstSlide(classes, register),
    whyusText(classes),
    secondSlide(classes),
    fourthSlide(classes),
    successText(classes),
    thirdSlide(classes),
    fifthSlide(classes),

    coursesText(classes),
    Courses(classes),
    availableText(classes),
    available(classes),

    freeCourseSlide(classes),
    sixthSlide(classes),
  ];
  return (
    <div className={`${classes.root} ${classes.scrollStyles}`}>
      {screenDivisions.map((value, index) => (
        <div key={index}>{value}</div>
      ))}
      <Footer />
    </div>
  );
};
export default Home;
