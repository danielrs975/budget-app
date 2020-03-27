import React from 'react';
import AccountCard from './AccountCard';
import { Link } from 'react-router-dom';

const AccountsList = ({ accounts }) => (
	<div>
		{accounts.length > 0 &&
			accounts.map((account) => <AccountCard key={account.id} {...account} />)}
		<Link to="account/create">Add Account</Link>
	</div>
);

export default AccountsList;
