import React, {Component} from 'react';
import {Field, reduxForm, SubmissionError} from 'redux-form';
import {connect} from "react-redux";
import TextField from 'material-ui/TextField';
import CircularProgress from 'material-ui/CircularProgress';

import {renderField as textField} from '../../form-ui/InputField';
import {validateLoginForm as validate} from '../.././helpers/validator';
import {getInitVal} from "../../actions/appState";
import {submitLogin} from "../../actions/userState";
import ReactTooltip from 'react-tooltip';

import Terms from './Terms';

const formSubmit = (values, dispatch, props) => {
	dispatch(submitLogin(values, props.history));
}

const dataInit = {
	phone: ""
}

const mapStateToProps = (state, ownProps) => {
  return {
		initialValues: {phone: state.user.mobileNumber},
    app: state.app,
		user: state.user
  }
}

@connect(mapStateToProps)
@reduxForm({form: 'loginForm', validate, onSubmit: formSubmit, initialValues: dataInit})
class Login extends Component {

	setTooltipText(e) {
			this.setState({tooltipText: e.target.dataset.tootip})
	}

  constructor(props) {
    super(props);
		this.setTooltipText = this.setTooltipText.bind(this);
		this.state = {
			tooltipText: ""
		}
  }

  render() {
    const fullWidth = true;
		const self = this;
    return (
      <div>
				<CircularProgress size={80} thickness={5} style={{display: self.props.app.showSpinner ? "block" : "none"}} />
        <form onSubmit={this.props.handleSubmit}>
          <div className="card-box">
            <div className="head">
              <p>LOGIN</p>
            </div>
            <div className="body">
								<ReactTooltip id='globalTooltip' aria-haspopup='true' getContent={() => this.state.tooltipText }/ >
              <Field toolTiptext="leoleo" onFocus={this.setTooltipText} name="phone" type="text" component={textField} label="Mobile Number" fullWidth={fullWidth} normalize={value => {
                if (value.length && value.split(" ")[0] == "+91") {
                  return value.split(" ")[1];
                } else {
                  return value;
                }
              }}/>
            </div>
          </div>
        </form>
        <Terms/>
      </div>
    )
  }
}
export default Login;
