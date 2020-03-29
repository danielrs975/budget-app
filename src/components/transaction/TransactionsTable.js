/**
 * Component that contain the table with all
 * the transactions
 */
import React from 'react'

const transactions = [
    {
        id: 1,
        amount: "12.00",
        description: "bread",
        typeOfTransaction: "purchase",
        date: "11/12/2020"
    },
    {
        id: 2,
        amount: "12.00",
        description: "to revolut",
        typeOfTransaction: "transfer",
        from: "revolut",
        to: "societe",
        date: "11/12/2020"
    }
]

export const TransactionsTable = (props) => (
    <div>
        <div className="content-container">
            { transactions.map((transaction) => (
                <div key={transaction.id}>
                    <h3>{transaction.description}</h3>
                    <p>Amount: {transaction.amount}</p>
                </div>
            )) }
        </div>
    </div>
)

export default TransactionsTable;