import React from 'react';

export class TransactionForm extends React.Component {
    /**
     * Handler of the type of transaction
     * field
     */
    onTypeChange = (e) => {
        const typeOfTransaction = e.target.value;
        this.setState(() => ({ typeOfTransaction }))
    }

    /**
     * Handler of the description
     * field
     */
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    }

    /**
     * Handler of the date
     * field
     */
    onDateChange = (e) => {
        const date = e.target.value;
        this.setState(() => ({ date }));
    }
    
    /**
     * Handler of the amount
     * field
     */
    onAmountChange = (e) => {
		const amount = e.target.value;
		if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
			this.setState(() => ({ amount }));
		}
	};

    // This field are activated when the type of transaction is "transfer"
    /**
     * Handler of the from account
     * field
     */
    onFromChange = (e) => {
        const from = e.target.value;
        this.setState(() => ({ from }));
    }

    /**
     * Handler of the to account
     * field
     */
    onToChange = (e) => {
        const to = e.target.value;
        this.setState(() => ({ to }))
    }
    //--------------------------------------------------------------------

    /**
     * Handler of the submit
     * event
     */
    saveTransaction = (e) => {
        e.preventDefault();

        // Check for errors:
        //      - Amount is required
        //      - Date is required
        //      - In case of transfer: from and to are required

        let formValues = {
            typeOfTransaction: this.state.typeOfTransaction,
            description: this.state.description,
            date: this.state.date,
            amount: this.state.amount
        };
        if (this.state.typeOfTransaction === 'transfer') {
            formValues = {
                ...formValues,
                from: this.state.from,
                to: this.state.to
            }
        }

        // After we send the information to redux
        console.log(formValues);
    }

    constructor(props) {
        super(props);
        this.state = {
            typeOfTransaction: 'purchase',
            description: '',
            date: '',
            from: '',
            to: '',
            amount: '',
        };
    }
    
    render() {
        return (
            <div>
                <div className="content-container">
                    <form onSubmit={this.saveTransaction}>
                        <label>Type: </label>
                        <select value={this.state.typeOfTransaction} onChange={this.onTypeChange}>
                            <option value="purchase">Purchase</option>
                            <option value="transfer">Transfer</option>
                        </select>
                        <input 
                            type="text"
                            placeholder="Description"
                            value={this.state.description}
                            onChange={this.onDescriptionChange}
                        />
                        <input 
                            type="text"
                            placeholder="Date"
                            value={this.state.date}
                            onChange={this.onDateChange}
                        />
                        {/* This form is in case of transfer */}
                        { 
                            this.state.typeOfTransaction === 'transfer' 
                            && 
                            <div>
                                <label>From: </label>
                                <select value={this.state.from} onChange={this.onFromChange}>
                                    <option value="accountIid">Account I</option>
                                    <option value="accountIIid">Account II</option>
                                </select>
                                <label>To: </label>
                                <select value={this.state.to} onChange={this.onToChange}>
                                    <option value="accountIid">Account I</option>
                                    <option value="accountIIid">Account II</option>
                                </select>
                            </div>
                        }
                        <input 
                            type="text"
                            placeholder="Amount"
                            value={this.state.amount}
                            onChange={this.onAmountChange}
                        />
                        <button>Save transaction</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default TransactionForm;