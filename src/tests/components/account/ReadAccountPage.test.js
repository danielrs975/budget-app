import React from 'react';
import { shallow } from 'enzyme';
import { ReadAccountPage } from '../../../components/account/ReadAccountPage';
import accounts from '../../fixtures/accounts';

test('should render ReadAccountPage correctly', () => {
    const wrapper = shallow(<ReadAccountPage account={accounts[0]} />)
    expect(wrapper).toMatchSnapshot();
})