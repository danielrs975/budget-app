/**
 * Tests for the transactions table component
 * @author Daniel Rodriguez
 */
import React from 'react'
import { shallow } from 'enzyme';
import { TransactionsTable } from '../../../components/transaction/TransactionsTable';

test('should render TransactionsTable correctly', () => {
    const wrapper = shallow(<TransactionsTable />);
    expect(wrapper).toMatchSnapshot();
})