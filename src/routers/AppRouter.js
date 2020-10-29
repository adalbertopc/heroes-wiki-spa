import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';

import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';

import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {
	const {
		user: { logged },
	} = useContext(AuthContext);
	return (
		<Router>
			<div>
				<Switch>
					<PublicRoute
						exact
						isAuth={logged}
						path='/login'
						component={LoginScreen}
					/>
					<PrivateRoute
						isAuth={logged}
						path='/'
						component={DashboardRoutes}
					/>
				</Switch>
			</div>
		</Router>
	);
};
