import authReducer from '../../reducers/auth';

test('should login to the app', () => {
	const uid = '12345';
	const action = {
		type : 'LOGIN',
		uid
	};
	const state = authReducer({}, action);
	expect(state.uid).toBe(uid);
});

test('should logout from the app', () => {
	const uid = '12345';
	const action = {
		type : 'LOGOUT'
	};
	const state = authReducer({ uid }, action);
	expect(state.uid).toBeUndefined();
});
