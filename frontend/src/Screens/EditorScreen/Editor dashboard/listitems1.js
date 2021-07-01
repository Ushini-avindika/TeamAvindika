import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Link } from 'react-router-dom'

export const mainListItems = (
      <div>
            <ListSubheader inset>CONFERENCE</ListSubheader>
            <Link to="/editorLanding">
                  <ListItem button>
                        <ListItemIcon>
                              <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                  </ListItem>
            </Link>
            <Link to="/editor">
                  <ListItem button>
                        <ListItemIcon>
                              <BarChartIcon />
                        </ListItemIcon>
                        <ListItemText primary="All Conferecne Details list" />
                  </ListItem>
            </Link>
            <Link to="/applist">
                  <ListItem button >
                        <ListItemIcon>
                              <AssignmentIcon />
                        </ListItemIcon>

                        <ListItemText primary="Approved Con details" />
                  </ListItem>
            </Link>
            <Link to="/unapplist">
                  <ListItem button>
                        <ListItemIcon>
                              <AssignmentIcon />
                        </ListItemIcon>
                        <ListItemText primary="Unapproved con details" />
                  </ListItem>
            </Link>
      </div>
);

export const secondaryListItems = (
      <div>
            <ListSubheader inset>NEWS </ListSubheader>
            <Link to="/newslist">
                  <ListItem button>
                        <ListItemIcon>
                              <BarChartIcon />
                        </ListItemIcon>
                        <ListItemText primary="All News list" />
                  </ListItem>
            </Link>
            <Link to='/appNews'>
                  <ListItem button>
                        <ListItemIcon>
                              <AssignmentIcon />
                        </ListItemIcon>
                        <ListItemText primary="Approveed News List" />
                  </ListItem>
            </Link>
            <Link to="/unappNews">
                  <ListItem button>
                        <ListItemIcon>
                              <AssignmentIcon />
                        </ListItemIcon>
                        <ListItemText primary="Unapproved News List" />
                  </ListItem>
            </Link>
      </div>
);