import React from 'react';
import { shallow } from 'enzyme';
import { BudgetAccountSection } from '../../components/BudgetAccountSection';
import accounts from '../fixtures/accounts';

test('should BudgetAccountSection component render correcctly', () => {
    const wrapper = shallow(<BudgetAccountSection accounts={accounts}/>);
    expect(wrapper).toMatchSnapshot();
})