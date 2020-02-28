import { addAccount, setAccount } from '../../actions/accounts';
import accounts from '../fixtures/accounts';

test('should setup addAccount action object correctly', () => {
	const account = {
		name     : 'Revolut',
		amount   : 1000,
		type     : 'bank',
		currency : 'euro'
	};
	const action = addAccount(account);
	expect(action).toEqual({
		type    : 'ADD_ACCOUNT',
		account
	});
});

test('should setup setAccount action object correctly', () => {
	const action = setAccount(accounts);
	expect(action).toEqual({
		type     : 'SET_ACCOUNTS',
		accounts
	});
});
