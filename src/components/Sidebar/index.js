import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink } from 'react-router-dom';
import sidebarStyle from '../../assets/jss/sidebarStyle';
import { mainListItems, secondaryListItems } from '../../config/sidebarItems';
import './style.css';
import logo from '../images/logo.png';

class Sidebar extends Component {
  render() {
    const { classes, theme } = this.props;

    return (
      <div>
        <Drawer
          variant="persistent"
          anchor={this.props.anchor}
          open={this.props.open}
          classes={{
            paper: classNames(classes.drawerPaper, "sidebar-custom"),
          }}>
          <div className="logo-div">
            <img src={logo}></img>
          </div>
          <Divider />
          <List className="padding-top-remove svg-color-custom">{mainListItems}</List>
          <Divider />
          <List className="svg-color-custom">{secondaryListItems}</List>
          <Divider />
        </Drawer>
      </div>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  anchor: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  routes: PropTypes.array.isRequired,
  onClickDrawerClose: PropTypes.func.isRequired
};

export default withStyles(sidebarStyle, { withTheme: true })(Sidebar);
