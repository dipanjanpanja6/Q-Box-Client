import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { Theme } from "../theme";
import Box from "@material-ui/core/Box";
import { List, ListItem, ListItemText, Button } from "@material-ui/core";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={1.5}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    overflow: "auto",
    borderRadius: 16,
  },
  tabPanelStyling: {
    height: 200,
    overflow: "auto",
    padding: 0,
  },
  listItemStyling: {
    borderRadius: 8,
    border: "0.7px solid #aaa",
    marginBottom: 2.5,
    paddingLeft: 8,
    paddingRight: 8,
    display: "flex",
    justifyContent: "space-between",
  },
  testtakingbtn: {
    color: Theme.textColor.color1,
    background: Theme.boxColor,
    fontSize: 9,
  },
  coursename: {
    fontSize: 15,
    color: "#000",
    fontWeight: "500",
  },
}));

const PracticeTabs = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [PracticeData, setData] = React.useState(props.PracticeData);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          aria-label="full width tabs example"
        >
          {PracticeData.map((data, index) => {
            return <Tab label={data.tabName} {...a11yProps(index)} />;
          })}
        </Tabs>
      </AppBar>

      {PracticeData.map((data, index) => {
        return (
          <TabPanel
            value={value}
            index={index}
            dir={theme.direction}
            className={classes.tabPanelStyling}
          >
            {data.tabData.map((item, ind) => (
              <ListItem key={ind} className={classes.listItemStyling}>
                <Typography variant="h5" className={classes.coursename}>
                  {item.subName}
                </Typography>
                <Button
                  size="small"
                  variant="contained"
                  className={classes.testtakingbtn}
                  onClick={() => alert("Test")}
                >
                  Let's Go
                </Button>
              </ListItem>
            ))}
          </TabPanel>
        );
      })}
    </div>
  );
};

export default PracticeTabs;
