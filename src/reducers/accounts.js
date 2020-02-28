/**
 * This is the reducer for the accounts
 * information
 * @author Daniel Rodriguez
 */

/**
 * This is the reducer for the accounts
 * @param {} state The accounts that already are in the program
 * @param {} action the action the user want to dispatch
 */
export default (state = [], action) => {
	switch (action.type) {
		case 'ADD_ACCOUNT':
			return [ ...state, action.account ];
		case 'SET_ACCOUNTS':
			return action.accounts;
		default:
			return state;
	}
};
