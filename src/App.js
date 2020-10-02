import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Transition from './components/Transition';

import Home from './Home';
import About from './About';
import Projects from './Projects';
import SingleProject from './SingleProject';

const App = () => {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setLoading(true);
		}, 1000);
	});

	return loading ? (
		<Router>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/about" component={About} />
				<Route path="/projects" component={Projects} />
				<Route path="/single-project-id" exact component={SingleProject} />
			</Switch>
		</Router>
	) : (
		<Transition />
	);
};

export default App;
