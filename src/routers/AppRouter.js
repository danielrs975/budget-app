import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRouter';
import AddAccountPage from '../components/account/AddAccountPage';
import ReadAccountPage from '../components/account/ReadAccountPage';
import AddTransactionPage from '../components/transaction/AddTransactionPage';

export const history = createHistory();

const AppRouter = () => (
	<Router history={history}>
		<div>
			<Switch>
				<PublicRoute path="/" component={LoginPage} exact={true} />
				<PrivateRoute path="/dashboard" component={DashboardPage} exact={true} />
				<PrivateRoute path="/account/create" component={AddAccountPage} exact={true} />
				<PrivateRoute path="/account/:id" component={ReadAccountPage} />
				<PrivateRoute path="/transaction/create" component={AddTransactionPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</Router>
);

export default AppRouter;
