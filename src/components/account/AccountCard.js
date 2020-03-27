/**
 * This component contain a short information about an account
 * @author Daniel Rodriguez
 */
import React from 'react';
import { Link } from 'react-router-dom';

const AccountCard = ({ name, amount, id }) => (
	<div className="card-layout">
		<Link to={`account/${id}`}><h3>{name}</h3></Link>
		<p>{amount / 100}</p>
	</div>
);

export default AccountCard;
