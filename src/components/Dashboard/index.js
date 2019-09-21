import React from 'react';
import { createMuiTheme, withStyles, makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PhoneForwardedIcon from '@material-ui/icons/PhoneForwarded';
import './style.css';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {/* {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'} */}
      This is Dashboard
    </Typography>
  );
}
const BootstrapButton = withStyles({
    root: {
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 16,
      padding: '6px 12px',
      border: '1px solid',
      lineHeight: 1.5,
      backgroundColor: '#007bff',
      borderColor: '#007bff',
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
      },
      '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
      },
    },
  })(Button);
export default class Dashboard extends React.Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        open: PropTypes.bool.isRequired,
        openNewLead: PropTypes.func.isRequired,
        onClick: PropTypes.func.isRequired
    };
    render() {
        return (
            <div className="content-main-div">
                <main className={clsx(this.props.classes.content, "content-custom", this.props.open && "content-custom-open", !this.props.open && "content-custom-close")}>
                    <Container maxWidth="lg" className={clsx(this.props.classes.container, "container-custom")}>
                        <BootstrapButton onClick={(e) => {return this.props.openNewLead(false);}} variant="contained" disableRipple className={clsx(this.props.classes.margin, "btn-custom")}>
                            <PhoneForwardedIcon style={{marginRight: '10px'}} />
                            CREATE NEW LEAD
                        </BootstrapButton>
                        {/* <Button className="button-custom">Create New Lead</Button> */}
                    </Container>
                    <div className="overlay" onClick={this.props.onClick}/>
                    {/* <Copyright /> */}
                </main>
            </div>
        );
    }
}
