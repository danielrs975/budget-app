/**
 * This is the reducer for the transactions
 * information
 * @author Daniel Rodriguez
 */
export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_TRANSACTION':
            return [ ...state, action.transaction ];
        case 'REMOVE_TRANSACTION':
            return state.filter((transaction) => transaction.id !== action.id);
        case 'EDIT_TRANSACTION':
            return state.map((transaction) => {
                if (transaction.id === action.id) {
                    return { ...transaction, ...action.updates };
                }
                return transaction;
            })
        default:
            return state;
    }
};