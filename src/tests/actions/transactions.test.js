/**
 * Tests for the transactions actions
 * @author Daniel Rodriguez
 */
import accounts from '../fixtures/accounts';
import { addTransaction, removeTransaction, editTransaction } from '../../actions/transactions';

test('should setup addTransaction action object correctly', () => {
    const transaction = {
        accountId: accounts[0].id,
        type: 'purchase',
        amount: 1000,
        date: new Date().toString(),
        description: 'My first purchase'
    };
    const action = addTransaction(transaction);
    expect(action).toEqual({
        type: 'ADD_TRANSACTION',
        transaction
    });
});

test('should setup removeTransaction object correctly', () => {
    const id = '1';
    const action = removeTransaction({ id });
    expect(action).toEqual({
        type: 'REMOVE_TRANSACTION',
        id
    });
});

test('should setup editTransaction object correctly', () => {
    const id = '1';
    const updates = {
        amount: 240192,
        description: 'I changed this'
    };
    const action = editTransaction(id, updates);
    expect(action).toEqual({
        type: 'EDIT_TRANSACTION',
        id,
        updates
    });
})