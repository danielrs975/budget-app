/**
 * Component that show the details of an
 * account
 * @author Daniel Rodriguez
 */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TransactionsTable from '../transaction/TransactionsTable';

export const ReadAccountPage = ({ account }) => {
    return (
        <div>
            <div className="page-header">
                <div className="content-container">
                    <h1>{account.name}</h1>
                </div>
            </div>
            <div className="content-container">
                <p>Remaining Amount: {account.amount / 100}</p>
                <Link to="/transaction/create">Add a Transaction</Link>
            </div>
            <TransactionsTable />
        </div>
    );
}

const mapStateToProps = (state, props) => ({
    account: state.accounts.find((account) => account.id === props.match.params.id)
});

export default connect(mapStateToProps)(ReadAccountPage);