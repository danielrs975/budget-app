import React from 'react';
import { shallow } from 'enzyme';
import accounts from '../../fixtures/accounts';
import AccountCard from '../../../components/account/AccountCard';

test('should render AccountCard correctly', () => {
	const wrapper = shallow(<AccountCard account={accounts[0]} />);
	expect(wrapper).toMatchSnapshot();
});
