import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import headerStyle from '../../assets/jss/headerStyle';
import './style.css';

class Header extends Component {
  render() {
    const { classes, open, isOpenDashboard, anchor, onClickDrawerOpen, onClickDrawerClose, onClickOpenDashboard } = this.props;

    return (
      <AppBar
        className={classNames(classes.appBar, "header-custom", {
          [classes.appBarShift]: open,
          [classes[`appBarShift-${anchor}`]]: open,
        })}>
        <Toolbar disableGutters={!open}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={isOpenDashboard ? !open ? onClickDrawerOpen : onClickDrawerClose : onClickOpenDashboard }
            className={classNames(classes.menuButton)}
          >
            {
              isOpenDashboard ?
              <MenuIcon />
              :
              <CloseIcon />
            }
          </IconButton>
          <Typography variant="title" color="inherit" noWrap>
            {
              isOpenDashboard ?
              "Dashboard"
              :
              "Create New Lead"
            }
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  anchor: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  onClickDrawerOpen: PropTypes.func.isRequired
};

export default withStyles(headerStyle, { withTheme: true })(Header);