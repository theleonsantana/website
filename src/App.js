import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Home';

const App = () => {
	return (
		<Router>
			<div>
				<Switch>
					<Route path="/" exact component={Home} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
