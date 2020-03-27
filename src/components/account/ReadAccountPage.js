/**
 * Component that show the details of an
 * account
 * @author Daniel Rodriguez
 */
import React from 'react';
import { connect } from 'react-redux';

const ReadAccountPage = ({ account }) => {
    return (
        <div>
            <div className="page-header">
                <div className="content-container">
                    <h1>{account.name}</h1>
                </div>
            </div>
            <div className="content-container">
                <p>Remaining Amount: {account.amount / 100}</p>
            </div>
        </div>
    );
}

const mapStateToProps = (state, props) => ({
    account: state.accounts.find((account) => account.id === props.match.params.id)
});

export default connect(mapStateToProps)(ReadAccountPage);