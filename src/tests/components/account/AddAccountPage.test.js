import React from 'react';
import { shallow } from 'enzyme';
import { AddAccountPage } from '../../../components/account/AddAccountPage';
import accounts from '../../fixtures/accounts';

let startAddAccount, history, wrapper;
beforeEach(() => {
	startAddAccount = jest.fn();
	history = { push: jest.fn() };
	wrapper = shallow(<AddAccountPage startAddAccount={startAddAccount} history={history} />);
});

test('should render AddAccountPage correctly', () => {
	expect(wrapper).toMatchSnapshot();
});

test('should handle the onSubmit from the form', () => {
	wrapper.find('AccountForm').prop('onSubmit')(accounts[0]);
	expect(history.push).toHaveBeenLastCalledWith('/dashboard');
	expect(startAddAccount).toHaveBeenLastCalledWith(accounts[0]);
});
