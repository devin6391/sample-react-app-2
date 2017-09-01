onClick={this.gotoSignup.bind(this)}

regex for mobile number
^[7-9]{1}\d{9}$/g


import React, {Component} from 'react';
import {Field, reduxForm, SubmissionError} from 'redux-form';
import {connect} from "react-redux";
import TextField from 'material-ui/TextField';
import {renderField} from '../../form-ui/InputField';
import {validate} from '../.././helpers/validator';
import {getInitVal} from "../../actions/appState";

import Terms from './Terms';

@connect(state => {
  return {initialValues: state.app.initData}
}, dispatch => {
  return {
    getInitVal: data => {
      dispatch(getInitVal(data))
    }
  }
})
@reduxForm({form: 'loginForm', validate, asyncBlurFields: ['username']})

class Login extends Component {
  gotoSignup() {
    this.props.history.push("/signup");
  }
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <Field name="username" type="text" component={renderField} label="Username" value="Vineet"/>
        <Field name="email" component={renderField} label="Email"/>
        <Field name="age" type="number" component={renderField} label="Age"/>
        <Field name="phone" type="text" component={renderField} label="Phone Number" normalize={value => {
          if (value.length && value.split(" ")[0] == "+91") {
            return value.split(" ")[1];
          } else {
            return value;
          }
        }}/>
        <div>
          <button type="button" disabled={this.props.pristine || this.props.submitting} onClick={this.props.reset}>
            Clear Values
          </button>
        </div>
      </form>
    )
  }

}
export default Login;
















import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import {validators} from '../.././helpers/validator';
import Terms from './Terms';

class Login extends Component {

  gotoSignup() {
    this.props.history.push("/signup");
  }

  render() {
    return (
      <div>
        <div className="card-box">
          <div className="head">
            <p>Login</p>
          </div>
          <div className="body">
            <TextField  floatingLabelText="Mobile Number" fullWidth={true} />
          </div>
        </div>
        <Terms/>
        <div className="fixed-btn" type="submit" label="Submit"><p>Submit</p></div>
      </div>
    )
  }
}
export default Login;
