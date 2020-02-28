/**
 * This is the reducer for the accounts
 * information
 * @author Daniel Rodriguez
 */

export default (state = [], action) => {
	switch (action.type) {
		case 'ADD_ACCOUNT':
			return [ ...state, action.account ];
		default:
			return state;
	}
};
