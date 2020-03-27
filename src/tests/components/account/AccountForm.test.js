import React from 'react';
import { shallow } from 'enzyme';
import AccountForm from '../../../components/account/AccountForm';
import accounts from '../../fixtures/accounts';

let wrapper, onSubmit;
beforeEach(() => {
	onSubmit = jest.fn();
	wrapper = shallow(<AccountForm onSubmit={onSubmit} />);
});

test('should render AccountForm correctly', () => {
	expect(wrapper).toMatchSnapshot();
});

test('should render AccountForm with errors correctly', () => {
	const preventDefault = jest.fn();
	wrapper.find('form').simulate('submit', { preventDefault });
	expect(wrapper).toMatchSnapshot();
	expect(wrapper.state('error')).toBeDefined();
});

test('should render AccountForm with account correctly', () => {
	wrapper = shallow(<AccountForm onSubmit={onSubmit} account={accounts[0]} />);
	expect(wrapper).toMatchSnapshot();
});

test('should set name of the account on input change', () => {
	const value = 'Some name';
	wrapper.find('input').at(0).simulate('change', {
		target : { value }
	});
	expect(wrapper.state('name')).toBe(value);
});

test('should set amount on input change', () => {
	const value = '12.22';
	wrapper.find('input').at(1).simulate('change', {
		target : { value }
	});
	expect(wrapper.state('amount')).toBe(value);
});

test('should set the type of account on input change', () => {
	const value = 'cash';
	wrapper.find('select').at(0).simulate('change', {
		target : { value }
	});
	expect(wrapper.state('type')).toBe(value);
});

test('should set the currency of the account on input change', () => {
	const value = 'dollar';
	wrapper.find('select').at(1).simulate('change', {
		target : { value }
	});
	expect(wrapper.state('currency')).toBe(value);
});

test('should call the prop function when submit the form', () => {
	const preventDefault = jest.fn();
	wrapper = shallow(<AccountForm onSubmit={onSubmit} account={accounts[0]} />);
	wrapper.find('form').simulate('submit', { preventDefault });
	expect(onSubmit).toHaveBeenLastCalledWith({
		name     : accounts[0].name,
		amount   : accounts[0].amount * 100,
		type     : accounts[0].type,
		currency : accounts[0].currency
	});
});
