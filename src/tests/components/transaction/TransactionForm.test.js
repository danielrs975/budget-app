/**
 * Tests for the transaction form
 * @author Daniel Rodriguez
 */
import React from 'react';
import { shallow } from 'enzyme';
import { TransactionForm } from '../../../components/transaction/TransactionForm';

let wrapper;
beforeEach(() => {
    wrapper = shallow(<TransactionForm />);
})

test('should render TransactionForm correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should set type of transaction on select change', () => {
    const value = 'transfer';
    wrapper.find('select').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('typeOfTransaction')).toBe('transfer');
})

test('should render TransactionForm with transfer type transaction', () => {
    const value = 'transfer';
    wrapper.find('select').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper).toMatchSnapshot();
});

describe('Form when transfer type is selected', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<TransactionForm />);
        const value = 'transfer';
        wrapper.find('select').at(0).simulate('change', {
            target: { value }
        });
    });

    test('should set from account on select change', () => {
        const value = 'accountIid';
        wrapper.find('select').at(1).simulate('change', {
            target: { value }
        });
        expect(wrapper.state('from')).toBe(value);
    });

    test('should set to account on select change', () => {
        const value = 'accountIIid';
        wrapper.find('select').at(2).simulate('change', {
            target: { value }
        });
        expect(wrapper.state('to')).toBe(value);
    })
})


test('should set descritpion on input change', () => {
    const value = 'Some description';
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('description')).toBe(value);
});

test('should set date on input change', () => {
    const value = '12/12/2020';
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('date')).toBe(value);
});

test('should set amount on input change', () => {
    const value = '22.1';
    wrapper.find('input').at(2).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe(value);
})