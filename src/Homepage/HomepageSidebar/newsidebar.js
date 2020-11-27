import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AssessmentIcon from "@material-ui/icons/Assessment";
import GamesIcon from "@material-ui/icons/Games";
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import TrackChangesIcon from "@material-ui/icons/TrackChanges";
import Toolbar from "@material-ui/core/Toolbar";
import "./sidebar.css";
import {Link} from "react-router-dom";

const drawerWidth = 335;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    marginTop: 16,
    backgroundColor: "#ffd9d6",
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div className="wholesidebarrrrrrrrrrrrrr">
      <div className={classes.root}>
        <Toolbar>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <Toolbar />
            <div className="customizeourcss">
              <div className={classes.drawerContainer}>
                <List>
                  <ListItem button key="Assessment" href="www.google.com">
                    <ListItemIcon>
                      <AssessmentIcon />
                    </ListItemIcon>
                    <ListItemText primary="Assessment" />
                  </ListItem>
                  
                    <ListItem button key="Therapies and Games">
                      <ListItemIcon>
                        <GamesIcon />
                      </ListItemIcon>
                      <ListItemText primary="Therapies and Games" />
                    </ListItem>
                  

                  {/* <Link to="/post/1"> */}
                    <ListItem button key="Blogs">
                      <ListItemIcon>
                        <ChromeReaderModeIcon />
                      </ListItemIcon>
                      <ListItemText primary="Blogs" />
                    </ListItem>
                  {/* </Link> */}
                  
                    <ListItem button key="Doctors">
                      <ListItemIcon>
                        <LocalHospitalIcon />
                      </ListItemIcon>
                      <ListItemText primary="Doctors" />
                    </ListItem>
                 

                  <ListItem button key="Track your Medication">
                    <ListItemIcon>
                      <AssessmentIcon />
                    </ListItemIcon>
                    <ListItemText primary="Track your Medication" />
                  </ListItem>
                  {/* <Link to="/welcome"> */}
                    <ListItem button key="Self Assessment">
                      <ListItemIcon>
                        <TrackChangesIcon />
                      </ListItemIcon>
                      <ListItemText primary="Self Assessment" />
                    </ListItem>
                  {/* </Link> */}
                </List>
              </div>
            </div>
          </Drawer>
        </Toolbar>
      </div>
    </div>
  );
}
