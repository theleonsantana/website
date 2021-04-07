import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Header from './components/Header';

const App = () => {
	return (
		<Router>
			<Header />
			<div className="main-container">
				<Switch>
					<Route path="/" exact component={Home} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
