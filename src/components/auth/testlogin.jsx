import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import {Field, reduxForm, SubmissionError} from 'redux-form';
import {connect} from "react-redux";

import {validators} from '../.././helpers/validator';
import Terms from './Terms';
import {getInitVal} from "../../actions/appState";

const {
	DOM: {
		input,
		select,
		textarea
	}
} = React

const validate = values => {
	const errors = {}
	if (!values.username) {
		errors.username = 'Required'
	} else if (values.username.length > 15) {
		errors.username = 'Must be 15 characters or less'
	}
	if (!values.email) {
		errors.email = 'Required'
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Invalid email address'
	}
	if (!values.age) {
		errors.age = 'Required'
	} else if (isNaN(Number(values.age))) {
		errors.age = 'Must be a number'
	} else if (Number(values.age) < 18) {
		errors.age = 'Sorry, you must be at least 18 years old'
	}
	if (!values.phone) {
		errors.phone = 'Required'
	} else if (!/^(0|[1-9][0-9]{9})$/i.test(values.phone)) {
		errors.phone = 'Please enter a valid phone number'
	}
	return errors
}

const warn = values => {
	const warnings = {}
	if (values.age < 19) {
		warnings.age = 'Hmm, you seem a bit young...'
	}
	return warnings
}

const renderField = ({
	input,
	label,
	type,
	meta: {
		touched,
		error,
		warning
	},
  custom
}) => {
	if (input.name == "phone" && input.value && typeof input.value == "string" && input.value.split(" ")[0] != "+91") {
		input.value = `+91 ${input.value}`;
  }
	return (
    <TextField
      floatingLabelText={label}
      errorText={touched && error}
      {...input}
      {...custom}
    />
	);
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const asyncValidate = (values, dispatch) => {
	return sleep(500).then(() => {
		// simulate server latency
		if (['dev', 'dipu'].includes(values.username)) {
			throw {username: 'That username is taken'}
		}
	})
}

const formSubmit = values => {
	sleep(1000).then(() => {
		if (!['vineet', 'dev', 'dipu'].includes(values.username)) {
			throw new SubmissionError({username: 'User does not exist', _error: 'Login failed!'})
		} else if (values.email !== 'vineet@dev.com') {
			throw new SubmissionError({password: 'Wrong password', _error: 'Login failed!'})
		} else {
			window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
		}
	}).catch((e) => console.log(e));
}

const dataInit = {
	username: 'vineet',
	age: 28,
	email: 'vineet@dev.com',
	phone: "0"
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
@reduxForm({
	form: 'loginForm',
	validate,
	warn,
	asyncValidate,
	asyncBlurFields: ['username'],
	enableReinitialize: true,
	initialValues: dataInit,
	onSubmit: formSubmit
})
class LoginForm extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.getInitVal({
			...dataInit,
			username: "Devin",
			phone: "8860340931"
		});
	}

	render() {
		return (
			<form onSubmit={this.props.handleSubmit}>
				<Field name="username" type="text" component={renderField} label="Username" value="Vineet"/>
				<Field name="email" component={renderField} label="Email"/>
				<Field name="age" type="number" component={renderField} label="Age"/>
				<Field name="phone" type="text" component={renderField} label="Phone Number" normalize={value => {
            if(value.length && value.split(" ")[0] == "+91") {
              return value.split(" ")[1];
            } else {
              return value;
            }
          }} />
				<div>
					<button type="button" disabled={this.props.pristine || this.props.submitting} onClick={this.props.reset}>
						Clear Values
					</button>
				</div>
			</form>
		)
	}
}

export default LoginForm;
