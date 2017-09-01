import React, {Component} from 'react'
import {connect} from 'react-redux'
import {submit} from 'redux-form'

const style = {
	padding: '10px 20px',
	width: 140,
	display: 'block',
	margin: '20px auto',
	fontSize: '16px'
}

@connect(state => {
	return {activeForm: state.app.activeForm}
}, dispatch => {
	return {
		submitForm: formName => {
			dispatch(submit(formName))
		}
	}
})
class RemoteSubmitButton extends Component {
	render() {
		return (
			<button
				className="fixed-btn"
        type="button"
        style={style}
        onClick={this.props.submitForm.bind(this, this.props.activeForm)}>
				<span>Submit</span>
			</button>
		)
	}
}

export default RemoteSubmitButton;
