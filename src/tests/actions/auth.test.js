import { login, logout } from '../../actions/auth';

test('should setup login action object correclty', () => {
	const uid = '20390abc';
	const action = login(uid);
	expect(action).toEqual({
		type : 'LOGIN',
		uid
	});
});

test('should setup logout action object correctly', () => {
	const action = logout();
	expect(action).toEqual({
		type : 'LOGOUT'
	});
});
