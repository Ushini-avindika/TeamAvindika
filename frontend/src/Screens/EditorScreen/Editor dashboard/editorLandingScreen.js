import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Form, Table, Row, Col } from 'react-bootstrap';
import Loader from '../../../components/Loader/loader.js'
import Message from '../../../components/Message/message.js'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card'
import { mainListItems, secondaryListItems } from './listitems1';
import CardColumns from 'react-bootstrap/CardColumns'
import { Link } from "react-router-dom";


// function Copyright() {
//       return (
//             <Typography variant="body2" color="textSecondary" align="center">
//                   {'Copyright © '}
//                   <Link color="inherit" href="">
//                         Madusanka Gajadeera
//                   </Link>{' '}
//                   {new Date().getFullYear()}
//                   {'.'}
//             </Typography>
//       );
// }

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
      root: {
            display: 'flex',
      },
      toolbar: {
            paddingRight: 24, // keep right padding when drawer closed
      },
      toolbarIcon: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: '0 8px',
            ...theme.mixins.toolbar,
      },
      appBar: {
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(['width', 'margin'], {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.leavingScreen,
            }),
      },
      appBarShift: {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.enteringScreen,
            }),
      },
      menuButton: {
            marginRight: 36,
      },
      menuButtonHidden: {
            display: 'none',
      },
      title: {
            flexGrow: 1,
      },
      drawerPaper: {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.enteringScreen,
            }),
      },
      drawerPaperClose: {
            overflowX: 'hidden',
            transition: theme.transitions.create('width', {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.leavingScreen,
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up('sm')]: {
                  width: theme.spacing(9),
            },
      },
      appBarSpacer: theme.mixins.toolbar,
      content: {
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
      },
      container: {
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(4),
      },
      paper: {
            padding: theme.spacing(2),
            display: 'flex',
            overflow: 'auto',
            flexDirection: 'column',
      },
      fixedHeight: {
            height: 240,
      },
}));


export default function EditorLanding({ history }) {
      const classes = useStyles();
      const [open, setOpen] = React.useState(true);
      const handleDrawerOpen = () => {
            setOpen(true);
      };
      const handleDrawerClose = () => {
            setOpen(false);
      };
      const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);


      return (
            <div className={classes.root}>
                  <CssBaseline />
                  <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                        <Toolbar className={classes.toolbar}>
                              <IconButton
                                    edge="start"
                                    color="inherit"
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={handleDrawerOpen}
                                    className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                              >
                                    <MenuIcon />
                              </IconButton>
                              <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                                    Editor Dashboard
                              </Typography>
                              <IconButton color="inherit">
                                    <Badge badgeContent={4} color="secondary">
                                          <NotificationsIcon />
                                    </Badge>
                              </IconButton>
                        </Toolbar>
                  </AppBar>
                  <Drawer
                        variant="permanent"
                        classes={{
                              paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                        }}
                        open={open}
                  >
                        <div className={classes.toolbarIcon}>
                              <IconButton onClick={handleDrawerClose}>
                                    <ChevronLeftIcon />
                              </IconButton>
                        </div>
                        <Divider />
                        <List>{mainListItems}</List>
                        <Divider />
                        <List>{secondaryListItems}</List>

                  </Drawer>
                  <main className={classes.content}>
                        <div className={classes.appBarSpacer} />
                        <Container maxWidth="lg" className={classes.container}>
                              <CardColumns>
                                    <Link to="/editor">
                                          <Card bg="primary" text="white">
                                                <Card.Body>
                                                      <Card.Title>CONFERENCE DETAILS LIST</Card.Title>
                                                      <Card.Text>
                                                            <h2 >View All The Conference Details List</h2>

                                                      </Card.Text>

                                                </Card.Body>
                                          </Card>
                                    </Link>
                                    <Link to="/">
                                          <Card className="p-3">
                                                <blockquote className="blockquote mb-0 card-body">
                                                      <p>
                                                            Vist the landing page of International Conference Application Frameworks
                                                      </p>
                                                      <footer className="blockquote-footer">
                                                            <h3 className="text-muted">ICAF Landing page</h3>
                                                      </footer>
                                                </blockquote>
                                          </Card>
                                    </Link>
                                    <Link to="/newslist">
                                          <Card>

                                                <Card.Body>
                                                      <Card.Title><h3>NEWS DETAILS LIST</h3></Card.Title>
                                                      <Card.Text>
                                                            <h6 className="text-muted"> View All The News Details </h6>
                                                      </Card.Text>
                                                </Card.Body>
                                                <Card.Footer>

                                                </Card.Footer>
                                          </Card>
                                    </Link>
                                    <Link to='/appNews'>
                                          <Card bg="primary" text="white" className="text-center p-3">
                                                <blockquote className="blockquote mb-0 card-body">
                                                      <h3>APPROVED NEWS DETAILS LIST</h3>
                                                      <h5>View All The News Details</h5>
                                                </blockquote>
                                          </Card>
                                    </Link>
                                    <Link to="/unapplist">
                                          <Card className="text-center">
                                                <Card.Body>
                                                      <Card.Title><h3>UNAPPROVED CONFERENCE DETAILS LIST</h3></Card.Title>
                                                      <Card.Text>
                                                            <h6 className="text-muted"> View All The Unapproved Details</h6>
                                                      </Card.Text>
                                                </Card.Body>
                                          </Card>
                                    </Link>

                                    <Link to="/applist">
                                          <Card bg="primary" text="white" className="text-right">
                                                <blockquote className="blockquote mb-0 card-body">
                                                      <h4>APPROVED CONFERENCE DETAILS LIST</h4>
                                                      <h6>
                                                            View all the approved conference details
                                                      </h6>


                                                </blockquote>
                                          </Card>
                                    </Link>
                                    <Link to="/unappNews">
                                          <Card>
                                                <Card.Body>
                                                      <Card.Title><h3>UNAPPROVED NEWS DETAILS LIST</h3></Card.Title>
                                                      <Card.Text>
                                                            <h5 className="text-muted">View All The Unapproved Details</h5>
                                                      </Card.Text>
                                                      <Card.Text>

                                                      </Card.Text>
                                                </Card.Body>
                                          </Card>
                                    </Link>
                              </CardColumns>

                        </Container>
                  </main>

            </div>
      );
}