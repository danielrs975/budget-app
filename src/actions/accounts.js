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
	return (dispatch, getState) => {
		dispatch(addAccount({ id: uuid(), ...account }));
		const accounts = getState().accounts;
		localStorage.setItem('accounts', JSON.stringify(accounts));
	};
};

/**
 * This action is set in the state the accounts that are saved
 * in the db
 * @param {*} accounts The accounts to set in the state
 */
export const setAccount = (accounts) => ({
	type     : 'SET_ACCOUNTS',
	accounts
});

export const startSetAccount = () => {
	return (dispatch) => {
		const accounts = JSON.parse(localStorage.getItem('accounts'));
		dispatch(setAccount(accounts || []));
	};
};
