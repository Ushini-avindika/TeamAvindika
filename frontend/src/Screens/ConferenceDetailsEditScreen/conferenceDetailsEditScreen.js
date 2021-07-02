import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message/message'
import Loader from '../../components/Loader/loader'
import FromContainer from '../../components/FormContainer/formContainer.js'
import { getConferenceDetails, updateConDetails } from '../../action/conferenceAction'
import { CONFERENCE_DETAILS_UPDATE_RESET } from '../../constants/conferenceConstants'

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
import { mainListItems, secondaryListItems } from '../EditorScreen/Editor dashboard/listitems1.js';


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



const ConferenceDetailsUpdate = ({ match, history }) => {



      const classes = useStyles();
      const [open, setOpen] = React.useState(true);
      const handleDrawerOpen = () => {
            setOpen(true);
      };
      const handleDrawerClose = () => {
            setOpen(false);
      };
      const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);



      const conId = match.params.id

      const [conname, setConname] = useState('')
      const [description, setDescription] = useState('')
      const [organizer, setOrganizer] = useState('')
      const [phone, setPhone] = useState('')
      const [email, setEmail] = useState('')
      const [startDate, setStartDate] = useState('')
      const [endDate, setEndDate] = useState('')
      const [venue, setVenue] = useState('')
      const [isApproved, setIsApproved] = useState('false')

      const dispatch = useDispatch()

      const ConsDetails = useSelector((state) => state.ConsDetails)
      const { loading, error, conferencedetails } = ConsDetails

      const updateCon = useSelector((state) => state.updateCon)
      const {
            loading: loadingUpdate,
            error: errorUpdate,
            success: successUpdate,
      } = updateCon


      useEffect(() => {
            if (successUpdate) {
                  dispatch({ type: CONFERENCE_DETAILS_UPDATE_RESET })
                  history.push('/editor')
            } else {
                  if (!conferencedetails.conname || conferencedetails._id !== conId) {
                        dispatch(getConferenceDetails(conId))
                  } else {
                        setConname(conferencedetails.conname)
                        setDescription(conferencedetails.description)
                        setOrganizer(conferencedetails.organizer)
                        setPhone(conferencedetails.phone)
                        setEmail(conferencedetails.email)
                        setStartDate(conferencedetails.startDate)
                        setEndDate(conferencedetails.endDate)
                        setVenue(conferencedetails.venue)
                        setIsApproved(conferencedetails.isApproved)
                  }
            }
      }, [dispatch, history, conId, conferencedetails, successUpdate])

      const submitHandler = (e) => {
            e.preventDefault()
            dispatch(updateConDetails({ _id: conId, conname, description, organizer, phone, email, startDate, endDate, venue, isApproved }))
      }

      return (
            <>



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
                                    <Link to='/editor' className='btn btn-light my-3'>
                                          Go Back
                                    </Link>
                                    <FromContainer>
                                          <h1>Edit Conference Details</h1>
                                          {loadingUpdate && <Loader />}
                                          {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
                                          {loading ? (
                                                <Loader />
                                          ) : error ? (
                                                <Message variant='danger'>{error}</Message>
                                          ) : (
                                                <Form onSubmit={submitHandler}>
                                                      <Form.Group controlId='conname'>
                                                            <Form.Label>Conference Name</Form.Label>
                                                            <Form.Control
                                                                  type='conname'
                                                                  palceholder='Enter Conference Name'
                                                                  value={conname}
                                                                  onChange={(e) => setConname(e.target.value)}
                                                            ></Form.Control>
                                                      </Form.Group>

                                                      <Form.Group controlId='description'>
                                                            <Form.Label>Description</Form.Label>
                                                            <Form.Control
                                                                  type='text'
                                                                  placeholder='Enter description'
                                                                  value={description}
                                                                  onChange={(e) => setDescription(e.target.value)}
                                                            ></Form.Control>
                                                      </Form.Group>
                                                      <Form.Group controlId='organizer'>
                                                            <Form.Label>organizer</Form.Label>
                                                            <Form.Control
                                                                  type='text'
                                                                  placeholder='Enter organizer'
                                                                  value={organizer}
                                                                  onChange={(e) => setOrganizer(e.target.value)}
                                                            ></Form.Control>
                                                      </Form.Group>
                                                      <Form.Group controlId='phone'>
                                                            <Form.Label>phone</Form.Label>
                                                            <Form.Control
                                                                  type='number'
                                                                  placeholder='Enter phone'
                                                                  value={phone}
                                                                  onChange={(e) => setPhone(e.target.value)}
                                                            ></Form.Control>
                                                      </Form.Group>
                                                      <Form.Group controlId='email'>
                                                            <Form.Label>email</Form.Label>
                                                            <Form.Control
                                                                  type='email'
                                                                  placeholder='Enter email'
                                                                  value={email}
                                                                  onChange={(e) => setEmail(e.target.value)}
                                                            ></Form.Control>
                                                      </Form.Group>
                                                      <Form.Group controlId='startDate'>
                                                            <Form.Label>startDate</Form.Label>
                                                            <Form.Control
                                                                  type='date'
                                                                  placeholder='Enter startDate'
                                                                  value={startDate}
                                                                  onChange={(e) => setStartDate(e.target.value)}
                                                            ></Form.Control>
                                                      </Form.Group>
                                                      <Form.Group controlId='endDate'>
                                                            <Form.Label>endDate</Form.Label>
                                                            <Form.Control
                                                                  type='date'
                                                                  placeholder='Enter endDate'
                                                                  value={endDate}
                                                                  onChange={(e) => setEndDate(e.target.value)}
                                                            ></Form.Control>
                                                      </Form.Group>
                                                      <Form.Group controlId='venue'>
                                                            <Form.Label>venue</Form.Label>
                                                            <Form.Control
                                                                  type='text'
                                                                  placeholder='Enter venue'
                                                                  value={venue}
                                                                  onChange={(e) => setVenue(e.target.value)}
                                                            ></Form.Control>
                                                      </Form.Group>
                                                      {/* <input type="hidden" value='false' onChange={(e) => setIsApproved(e.target.value)}></input> */}

                                                      <Button type='submit' variant='primary'>
                                                            Update
                                                      </Button>
                                                </Form>
                                          )}
                                    </FromContainer>
                              </Container>
                        </main>

                  </div>









            </>
      )

}

export default ConferenceDetailsUpdate