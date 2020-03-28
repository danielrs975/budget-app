/**
 * Tests for the AddTransactionPage component
 * @author Daniel Rodriguez
 */
import React from 'react'
import { shallow } from 'enzyme';
import { AddTransactionPage } from '../../../components/transaction/AddTransactionPage';

test('should render AddTransactionPage correctly', () => {
    const wrapper = shallow(<AddTransactionPage />);
    expect(wrapper).toMatchSnapshot();
})