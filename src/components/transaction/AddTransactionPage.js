import React from 'react'
import TransactionForm from './TransactionForm'

export const AddTransactionPage = () => (
    <div>
        <div className="page-header">
            <div className="content-container">
                <h1>Add a new transaction</h1>
            </div>
        </div>
        <div className="content-container">
            <TransactionForm />
        </div>
    </div>
)

export default AddTransactionPage;