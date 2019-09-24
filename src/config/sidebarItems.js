import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import PhoneForwardedIcon from '@material-ui/icons/PhoneForwarded';
import GroupIcon from '@material-ui/icons/Group';
import DvrIcon from '@material-ui/icons/Dvr';
import CallMadeIcon from '@material-ui/icons/CallMade';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Divider from '@material-ui/core/Divider';
import DescriptionIcon from '@material-ui/icons/Description';
import { Icon, InlineIcon } from '@iconify/react';
import monitorDashboard from '@iconify/icons-mdi/monitor-dashboard';
import avatar from '../assets/images/avatar.png';

export const mainListItems = (
  <div className="sidebar-href-div">
    <ListItem button className="avatar-btn">
      <ListItemIcon className="avatar-div">
        <img src={avatar}></img>
      </ListItemIcon>
      <ListItemText className="user-info-div">
        <div className="user-name">User Name</div>
        <div className="user-email">username@mail.com</div>
      </ListItemText>
    </ListItem>
    <Divider />
    <ListItem button>
      <ListItemIcon className="sidebar-href-svg-custom">
        <Icon icon={monitorDashboard} width="24px" height="24px" />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon className="sidebar-href-svg-custom">
        <span class="iconify" data-icon="mdi-phone-plus" data-inline="false" width="24px" height="24px"></span>
      </ListItemIcon>
      <ListItemText primary="Create New Lead" />
    </ListItem>
    <ListItem button>
      <ListItemIcon className="sidebar-href-svg-custom">
        <CallMadeIcon />
      </ListItemIcon>
      <ListItemText primary="Request a Lead" />
    </ListItem>
    <ListItem button>
      <ListItemIcon className="sidebar-href-svg-custom">
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="Sign Out" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div className="sidebar-href-div">
    <ListSubheader>Admin Controls: </ListSubheader>
    <ListItem button>
      <ListItemIcon className="sidebar-href-svg-custom">
        <GroupIcon />
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItem>
    <ListItem button>
      <ListItemIcon className="sidebar-href-svg-custom">
        <DescriptionIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
  </div>
);
