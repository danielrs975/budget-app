/**
 * Test suite to test the reducer for
 * the transactions
 * @author Daniel Rodriguez
 */
import transactions from '../fixtures/transactions';
import transactionsReducer from '../../reducers/transactions';
import moment from 'moment';

test('should add a new transaction to the state', () => {
    const transaction = {
        accountId: '2',
        amount: 1000,
        type: 'purchase',
        date: moment(),
        description: 'Something stupid'
    };
    const action = {
        type: 'ADD_TRANSACTION',
        transaction
    };
    const state = transactionsReducer(transactions, action);
    expect(state).toEqual([ ...transactions, transaction ]);
});

test('should remove a existing transaction of the list if the id exists', () => {
    const action = {
        type: 'REMOVE_TRANSACTION',
        id: '1'
    };
    const state = transactionsReducer(transactions, action);
    const realState = transactions.filter((transaction) => transaction.id != action.id);
    expect(state).toEqual(realState);
});

test('should have the same state if the id does not exists (Remove action)', () => {
    const action = {
        type: 'REMOVE_TRANSACTION',
        id: '29'
    };
    const state = transactionsReducer(transactions, action);
    expect(state).toEqual(transactions);
});

test('should edit an existing transaction of the list', () => {
    const id = '1'
    const updates = {
        amount: 23241,
        description: 'I changed this'
    };
    const action = {
        type: 'EDIT_TRANSACTION',
        id,
        updates
    };
    const state = transactionsReducer(transactions, action);
    expect(state[0]).toEqual({ ...transactions[0], ...updates});
});

test('should have the same state if the id to edit does not exists', () => {
    const id = '121'
    const updates = {
        amount: 23241,
        description: 'I changed this'
    };
    const action = {
        type: 'EDIT_TRANSACTION',
        id,
        updates
    };
    const state = transactionsReducer(transactions, action);
    expect(state).toEqual(transactions);
});