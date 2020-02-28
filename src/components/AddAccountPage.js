import React from 'react';
import { connect } from 'react-redux';
import AccountForm from './AccountForm';
import { startAddAccount } from '../actions/accounts';

class AddAccountPage extends React.Component {
	onSubmit = (account) => {
		this.props.startAddAccount(account);
		this.props.history.push('/dashboard');
	};
	render() {
		return (
			<div>
				<h1>Add a new account</h1>
				<AccountForm onSubmit={this.onSubmit} />
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	startAddAccount : (account) => dispatch(startAddAccount(account))
});

export default connect(undefined, mapDispatchToProps)(AddAccountPage);
