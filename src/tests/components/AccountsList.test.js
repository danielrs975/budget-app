import React from 'react';
import { shallow } from 'enzyme';
import AccountsList from '../../components/account/AccountsList';
import accounts from '../fixtures/accounts';

test('should render AccountsList correctly', () => {
	const wrapper = shallow(<AccountsList accounts={accounts} />);
	expect(wrapper).toMatchSnapshot();
});
