import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PrivateRoute = ({
	isAuth,
	component: Component,
	...otherProps
}) => {
	localStorage.setItem('lastPath', otherProps.location.pathname);
	return (
		<Route
			{...otherProps}
			component={(props) =>
				isAuth ? <Component {...props} /> : <Redirect to='/login' />
			}
		/>
	);
};
//funcional component es = a proptype.func
PrivateRoute.propTypes = {
	isAuth: PropTypes.bool.isRequired,
	component: PropTypes.func.isRequired,
};
