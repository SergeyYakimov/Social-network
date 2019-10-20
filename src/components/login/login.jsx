import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {Input} from './../common/FormControls/FormControls.js';
import {required} from './../../utils/validators/validators.js';

const LoginForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field placeholder={"login"} 
				validate={[required]}
				name={"login"} component={Input}/>
			</div>
			<div>
				<Field placeholder={"password"} 
				validate={[required]}
				name={"password"} component={Input}/>
			</div>
			<div>
				<Field type={"checkbox"} name={"rememberMe"} component={Input}/>remember me
			</div>
			<div>
				<button>Login</button>
			</div>
		</form>	
	)
}

const LoginReduxForm = reduxForm({
  // a unique name for the form
  form: 'login'
})(LoginForm)

const Login = (props) => {
	const onSubmit = (formData) => {
		console.log(formData);

	}

	return <div>
		<h1>Login</h1>
		<LoginReduxForm onSubmit={onSubmit} />
	</div>
}

export default Login;