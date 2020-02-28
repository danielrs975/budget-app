import React from 'react';

export default class AccountForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name     : '',
			amount   : '',
			type     : 'bank',
			currency : 'euro',
			error    : undefined
		};
	}
	onNameChange = (e) => {
		const name = e.target.value;
		this.setState(() => ({ name }));
	};
	onAmountChange = (e) => {
		const amount = e.target.value;
		if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
			this.setState(() => ({ amount }));
		}
	};
	onTypeChange = (e) => {
		const type = e.target.value;
		this.setState(() => ({ type }));
	};
	onCurrencyChange = (e) => {
		const currency = e.target.value;
		this.setState(() => ({ currency }));
	};
	saveAccount = (e) => {
		e.preventDefault();
		if (!this.state.name || !this.state.currency) {
			this.setState(() => ({ error: 'A name for the account must be provided' }));
		} else {
			this.setState(() => ({ error: undefined }));
			this.props.onSubmit({
				name     : this.state.name,
				amount   : parseFloat(this.state.amount) * 100,
				type     : this.state.type,
				currency : this.state.currency
			});
		}
	};
	render() {
		return (
			<form onSubmit={this.saveAccount}>
				{this.state.error && <p>{this.state.error}</p>}
				<input type="text" placeholder="Name of account" value={this.state.name} onChange={this.onNameChange} />
				<input
					type="text"
					placeholder="Initial amount"
					value={this.state.amount}
					onChange={this.onAmountChange}
				/>
				<select placeholder="Type" value={this.state.type} onChange={this.onTypeChange}>
					<option value="bank">Bank</option>
					<option value="cash">Cash</option>
				</select>
				<select placeholder="Currency" value={this.state.currency} onChange={this.onCurrencyChange}>
					<option value="euro">Euro</option>
					<option value="dollar">Dollar</option>
				</select>
				<button>Save account</button>
			</form>
		);
	}
}
