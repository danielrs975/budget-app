import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import accountsReducer from '../reducers/accounts';
import transactionsReducer from '../reducers/transactions';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Store creation
export default () => {
	const store = createStore(
		combineReducers({
			auth     : authReducer,
			accounts : accountsReducer,
			transactions: transactionsReducer
		}),
		composeEnhancers(applyMiddleware(thunk))
	);

	return store;
};
