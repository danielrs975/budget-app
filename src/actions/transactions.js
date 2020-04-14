/**
 * This script contains all the actions for
 * the transaction reducer
 * @author Daniel Rodriguez
 */
import uuid from 'uuid';

/**
 * The action to add a transaction
 * @param {*} transaction The transaction to add to the current state
 */
export const addTransaction = (transaction) => ({
    type: 'ADD_TRANSACTION',
    transaction,
});

/**
 * The action to remove a transaction
 * @param {} id the id of the transaction to remove
 */
export const removeTransaction = ({ id }) => ({
    type: 'REMOVE_TRANSACTION',
    id
});

/**
 * The action to change the info of a transaction
 * @param {*} id The id of the transaction to edit
 * @param {*} updates Changes
 */
export const editTransaction = (id, updates) => ({
    type: 'EDIT_TRANSACTION',
    id,
    updates
})