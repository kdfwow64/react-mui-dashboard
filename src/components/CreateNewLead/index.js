import React from 'react';
import clsx from 'clsx';
import 'date-fns';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import DateFnsUtils from '@date-io/date-fns';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ErrorIcon from '@material-ui/icons/Error';
import PhoneIcon from '@material-ui/icons/Phone';
import { emphasize, makeStyles, withStyles } from '@material-ui/core/styles';
import NewSelect from './NewSelect';
import NewSelectState from './NewSelectState';
import './style.css';

import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

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
export default class CreateNewLead extends React.Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        open: PropTypes.bool.isRequired,
        openDashboard: PropTypes.func.isRequired
    };
    constructor(props) {
        super(props);
        this.state = {
            selectedDate: null,
            phoneValue: '',
            phoneTempValue: '',
            formData: {
                email: '',
                password: '',
            },
            submitted: false,
        }
    }
    handleDateChange = (date) => {
        console.log(date);
        this.setState({
            selectedDate: date
        });
    }

    handleEmailChange = (event) => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }
    handlePhoneChange = (e) => {
        const onlyNums = e.target.value.replace(/[^0-9]/g, '');
        const onlyNumsTemp = this.state.phoneTempValue.replace(/[^0-9]/g, '');
        this.setState({
            phoneTempValue: e.target.value
        });
        var number = onlyNums;
        if (onlyNums.length > 0 && onlyNums.length <= 10) {
            switch(onlyNums.length) {
                case 1:
                    number = onlyNums.replace(/(\d{1})/, '($1');
                    break;
                case 2:
                    number = onlyNums.replace(/(\d{2})/, '($1');
                    break;
                case 3:
                    number = onlyNums.replace(/(\d{3})/, '($1) ');
                    break;
                case 4:
                    number = onlyNums.replace(/(\d{3})(\d{1})/, '($1) $2');
                    break;
                case 5:
                    number = onlyNums.replace(/(\d{3})(\d{2})/, '($1) $2');
                    break;
                case 6:
                    number = onlyNums.replace(/(\d{3})(\d{3})/, '($1) $2 - ');
                    break;
                case 7:
                    number = onlyNums.replace(/(\d{3})(\d{3})(\d{1})/, '($1) $2 - $3');
                    break;
                case 8:
                    number = onlyNums.replace(/(\d{3})(\d{3})(\d{2})/, '($1) $2 - $3');
                    break;
                case 9:
                    number = onlyNums.replace(/(\d{3})(\d{3})(\d{3})/, '($1) $2 - $3');
                    break;
                case 10:
                    number = onlyNums.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2 - $3');
                    break;
                default:
                    number = onlyNums.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2 - $3');
            }
            this.setState({ phoneValue: number });
        }
    }

    handleSubmit = () => {
        this.setState({ submitted: true }, () => {
            setTimeout(() => this.setState({ submitted: false }), 5000);
        });
    }
    render() {
        return (
            <main className={clsx(this.props.classes.content, "content-custom", this.props.open && "content-custom-open", !this.props.open && "content-custom-close")}>
                <Container className={clsx(this.props.classes.container, "container-custom")}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <ValidatorForm
                            ref="form"
                            onSubmit={this.handleSubmit}
                        >
                            <Grid container>
                                <Grid item xs={12} className="">
                                    <KeyboardDatePicker
                                        margin="normal"
                                        id="date-picker-dialog"
                                        label="MoveDate"
                                        format="yyyy/MM/dd"
                                        autoOk="true"
                                        value={this.state.selectedDate}
                                        onChange={this.handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                        className="calendar-div-custom"
                                    />
                                </Grid>
                                <Grid item xs={12} className="margin-top-12px">
                                    <PermIdentityIcon className="icon-textfield" />
                                    <TextField
                                        label="Name"
                                        className="text-field-custom"
                                        placeholder="Name"
                                    />
                                </Grid>
                                <Grid item xs={12} className="margin-top-12px">
                                    <MailOutlineIcon className="icon-textfield" />
                                    {/* <TextField
                                        label="Email"
                                        type="Email"
                                        className="text-field-custom"
                                        placeholder="Email"
                                        validators={['required', 'isEmail']}
                                        errorMessages={['this field is required', 'email is not valid']}
                                    /> */}
                                        <TextValidator
                                            label="Email"
                                            onChange={this.handleEmailChange}
                                            name="email"
                                            className="text-field-custom"
                                            value={this.state.formData.email}
                                            validators={['required', 'isEmail']}
                                            errorMessages={['this field is required', <ErrorIcon className="warning-svg-custom"/>]}
                                        />
                                </Grid>
                                <Grid item xs={12} className="margin-top-12px">
                                    <PhoneIcon className="icon-textfield" />
                                    <TextField
                                        label="Phone"
                                        className="text-field-custom"
                                        placeholder="(###) ### - ####"
                                        onChange={this.handlePhoneChange}
                                        value={this.state.phoneValue}
                                    />
                                </Grid>
                                <Grid item xs={12} className="margin-top-12px new-select-custom move-size">
                                    <NewSelect />
                                </Grid>


                                <h2 className="h1-custom">Moving From:</h2>
                                <Grid item xs={12} className="margin-top-12px">
                                    <span className="fixed-txt">Zipcode:</span>
                                    <TextField
                                        className="fixed-text-field-custom"
                                    />
                                </Grid>
                                <Grid item xs={12} className="margin-top-12px new-select-custom">
                                    <NewSelectState />
                                </Grid>
                                <Grid item xs={12} className="margin-top-12px">
                                    <span className="fixed-txt">City:</span>
                                    <TextField
                                        className="fixed-text-field-custom city-custom"
                                    />
                                </Grid>

                                
                                <h2 className="h1-custom">Moving To:</h2>
                                <Grid item xs={12} className="margin-top-12px">
                                    <span className="fixed-txt">Zipcode:</span>
                                    <TextField
                                        className="fixed-text-field-custom"
                                    />
                                </Grid>
                                <Grid item xs={12} className="margin-top-12px new-select-custom">
                                    <NewSelectState />
                                </Grid>
                                <Grid item xs={12} className="margin-top-12px">
                                    <span className="fixed-txt">City:</span>
                                    <TextField
                                        className="fixed-text-field-custom city-custom"
                                    />
                                </Grid>
                                <Grid item xs={12} className="margin-top-12px" flex-end>
                                    <BootstrapButton variant="contained" disableRipple className={clsx(this.props.classes.margin, "btn-add-lead-custom margin-top-40px")}>
                                        ADD LEAD
                                    </BootstrapButton>
                                </Grid>
                            </Grid>
                        </ValidatorForm>
                    </MuiPickersUtilsProvider>
                    {/* <Button className="button-custom" onClick={this.props.openDashboard}>Create New Lead</Button> */}
                </Container>
            </main>
        );
    }
}