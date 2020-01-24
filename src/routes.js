import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import User from "./Components/User/User"

export default (
	<Switch>
		<Route component={Home} exact path="/" />
		<Route component={User} exact path="/user/:user" />
	</Switch>
);
