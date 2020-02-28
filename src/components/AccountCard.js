/**
 * This component contain a short information about an account
 * @author Daniel Rodriguez
 */
import React from 'react';

const AccountCard = ({ name, amount }) => (
	<div className="card-layout">
		<h3>{name}</h3>
		<p>{amount / 100}</p>
	</div>
);

export default AccountCard;
