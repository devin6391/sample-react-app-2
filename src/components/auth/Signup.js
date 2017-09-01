import React, {Component} from 'react';
import {Field, reduxForm, SubmissionError} from 'redux-form';
import {connect} from "react-redux";
import TextField from 'material-ui/TextField';
import {renderField as textField} from '../../form-ui/InputField';
import {validateSignupForm as validate} from '../.././helpers/validator';
import {getInitVal} from "../../actions/appState";

import Terms from './Terms';

const formSubmit = values => {
  console.log(values);
}

@connect(state => {
  return {initialValues: state.app.initData}
}, dispatch => {
  return {
    getInitVal: data => {
      dispatch(getInitVal(data))
    }
  }
})
@reduxForm({form: 'signupForm', validate, asyncBlurFields: ['username'], onSubmit: formSubmit})
class Signup extends Component {
  gotoSignup() {
    this.props.history.push("/signup");
  }
  constructor(props) {
    super(props);
  }

  render() {
    const fullWidth = true
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <div className="card-box">
            <div className="head">
              <p>SIGN UP</p>
            </div>
            <div className="body">
              <Field name="firstName" type="text" component={textField} label="First Name" fullWidth = {fullWidth} />
              <Field name="lastName" type="text" component={textField} label="Last Name" fullWidth = {fullWidth} />
            </div>
          </div>
        </form>
        <Terms/>
      </div>
    )
  }

}
export default Signup;
