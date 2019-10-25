import React from 'react';
import {reduxForm} from 'redux-form';
import {Input} from './../common/FormControls/FormControls.js';
import {required} from './../../utils/validators/validators.js';
import {connect} from 'react-redux';
import {login} from './../../Redux/auth-reducer.js';
import {Redirect} from 'react-router-dom';
import style from './../../components/common/FormControls/FormControls.module.css';
import {createField} from './../common/FormControls/FormControls.js';

const LoginForm = ({handleSubmit, error}) => {
	return (
		<div>
			<form onSubmit={handleSubmit}>
				
				{createField("Email", "email", [required], Input)}
				{createField("Password", "password", [required], Input, {type: "password"})}	
				{createField(null, "rememberMe", [], Input, {type: "checkbox"}, "remember me")}
				
				{error && <div className={style.summaryError}>{error}
				</div>}
				<div>
					<button>Login</button>
				</div>
			</form>
			<div>
				<h2>Данные тестового аккаунта</h2>
				<p>Email: free@samuraijs.com</p>
				<p>Password: free</p>
			</div>
		</div>	
	)
}

const LoginReduxForm = reduxForm({
  // a unique name for the form
  form: 'login'
})(LoginForm)

const Login = (props) => {
	const onSubmit = (formData) => {
		props.login(formData.email, formData.password, formData.rememberMe);
	}

	if (props.isAuth) {
		return <Redirect to={"/profile"}/>
	}

	return <div>
		<h1>Login</h1>
		<LoginReduxForm onSubmit={onSubmit} />
	</div>
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth	
})

export default connect(mapStateToProps, {login})(Login);