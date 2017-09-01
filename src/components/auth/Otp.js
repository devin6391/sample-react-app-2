import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Field, reduxForm, SubmissionError} from 'redux-form';
import {connect} from "react-redux";
import TextField from 'material-ui/TextField';
import {renderField as textField} from '../../form-ui/InputField';
import {validateOtpForm as validate} from '../.././helpers/validator';
import {getInitVal} from "../../actions/appState";
import {submitOtp} from "../../actions/userState";
import {changeRoute} from "../../actions/appState";
import Terms from './Terms';
import FlatButton from 'material-ui/FlatButton'

const formSubmit = (values, dispatch, props) => {
  dispatch(submitOtp(values, props.history));
}

const mapStateToProps = (state, ownProps) => {
  return {app: state.app, user: state.user}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    editMobile: () => {
      dispatch(changeRoute(ownProps.history, "/login", "loginForm"))
    }
  }
}

@connect(mapStateToProps, mapDispatchToProps)
@reduxForm({form: 'otpForm', validate, onSubmit: formSubmit})
class Otp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      disabledState: true,
      secondsRemaining: 30
    }
    this.focusNext = this.focusNext.bind(this)
  }

  removeDisabled() {
    this.setState({disabledState: false})
  }

  setDisabled() {
    this.setState({disabledState: true})
  }

  tick() {
    this.setState({
      secondsRemaining: this.state.secondsRemaining - 1
    });
    if (this.state.secondsRemaining <= 0) {
      clearInterval(this.interval);
    }
  }
  componentDidMount() {
    this.setState({secondsRemaining: this.state.secondsRemaining});
    this.interval = setInterval(this.tick.bind(this), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  focusNext(event) {
    // if (event.target.value.length === event.target.maxLength) {
    //   debugger;
    //   this.refs[parseInt(event.target.id, 10) + 1].focus();
    // }
  }

  render() {
    const fullWidth = true;
    const self = this;
    const underlineStyle = {
      width: "34px"
    }
    const errorStyle ={
      display: "none"
    }

    setTimeout(this.removeDisabled.bind(this), 30000);
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <div className="card-box">
            <div className="head">
              <p>VERIFY</p>
            </div>
            <div className="body">
              <p className="text-center" onClick={this.props.editMobile}>Enter the OTP send to {self.props.user.mobileNumber}</p>
              <div className="otp-verification">
                <Field underlineStyle={underlineStyle} errorStyle={{width: "150px", position: "absolute", top: "50px"}} onChange={this.focusNext} name="digit1" id="1" ref="1" type="text" component={textField} maxLength="1"/>
                <Field underlineStyle={underlineStyle} errorStyle={errorStyle} onChange={this.focusNext} name="digit2" id="2" ref="2" type="text" component={textField} maxLength="1"/>
                <Field underlineStyle={underlineStyle} errorStyle={errorStyle} onChange={this.focusNext} name="digit3" id="3" ref="3" type="text" component={textField} maxLength="1"/>
                <Field underlineStyle={underlineStyle} errorStyle={errorStyle} onChange={this.focusNext} name="digit4" id="4" ref="4" type="text" component={textField} maxLength="1"/>
                <Field underlineStyle={underlineStyle} errorStyle={errorStyle} onChange={this.focusNext} name="digit5" id="5" ref="5" type="text" component={textField} maxLength="1"/>
                <Field underlineStyle={underlineStyle} errorStyle={errorStyle} onChange={this.focusNext} name="digit6" id="6" ref="6" type="text" component={textField} maxLength="1"/>
              </div>
            </div>
          </div>
          <FlatButton onClick={this.setDisabled.bind(this)} label={"Resend OTP" + (this.state.secondsRemaining > 0
            ? (" (0:" + this.state.secondsRemaining + ")")
            : "")} disabled={this.state.disabledState}/>
        </form>
        <Terms/>
      </div>
    )
  }
}
export default Otp;
