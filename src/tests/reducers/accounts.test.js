import accountsReducer from '../../reducers/accounts';
import accounts from '../fixtures/accounts';

test('should add an account to the store correctly', () => {
	const state = accountsReducer([], {
		type     : 'SET_ACCOUNTS',
		accounts
	});
	expect(state).toEqual(accounts);
});
