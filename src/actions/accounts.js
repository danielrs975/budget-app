/**
 * This script contain all the actions about the
 * accounts information
 * @author Daniel Rodriguez
 */
import uuid from 'uuid';

/**
 * This action add an account to the database
 * @param {*} account all the info about the account
 */
export const addAccount = (account) => ({
	type    : 'ADD_ACCOUNT',
	account
});

export const startAddAccount = (account) => {
	return (dispatch) => {
		dispatch(addAccount({ id: uuid(), ...account }));
	};
};
