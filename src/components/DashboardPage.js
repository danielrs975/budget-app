import React from 'react';
import BudgetAccountSection from './BudgetAccountSection';
import TransactionsTable from './TransactionsTable';

const ExpenseDashboardPage = () => (
	<div>
		<BudgetAccountSection />
		<TransactionsTable />
	</div>
);

export default ExpenseDashboardPage;
