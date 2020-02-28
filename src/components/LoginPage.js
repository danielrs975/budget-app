import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
	<div className="box-layout">
		<div className="box-layout__box">
			<h1 className="box-layout__title">Budget App</h1>
			<p>Manage your expenses everywhere</p>
			<input type="text" placeholder="E-mail" />
			<input type="password" placeholder="Password" />
			<button className="button">Login</button>
			<p>or</p>
			<button onClick={startLogin} className="button">
				Login with Google
			</button>
		</div>
	</div>
);

const mapDispatchToProps = (dispatch) => ({
	startLogin : () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
