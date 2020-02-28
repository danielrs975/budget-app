/**
 * This component is a container to contains all
 * the accounts and budgets registered
 * @Author: Daniel Rodriguez
 * @Email: danielrs9705@gmail.com
 */
import React from 'react';
import { connect } from 'react-redux';
import AccountsList from './AccountsList';

const BudgetAccountSection = (props) => (
	<div className="content-container">
		<div>
			<h1>Accounts</h1>
			<AccountsList accounts={props.accounts} />
		</div>
	</div>
);

const mapStateToProps = (state) => ({
	accounts : state.accounts
});

export default connect(mapStateToProps)(BudgetAccountSection);
