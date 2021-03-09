import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Home';

const App = () => {
	// const [loading, setLoading] = useState(false);

	// useEffect(() => {
	// 	setTimeout(() => {
	// 		setLoading(true);
	// 	}, 9000);
	// });

	// return loading ? (
	// 	<Router>
	// 		<Switch>
	// 			<Route path="/" exact component={Home} />
	// 			<Route path="/about" component={About} />
	// 			<Route path="/projects" component={Projects} />
	// 			<Route path="/single-project-id" exact component={SingleProject} />
	// 		</Switch>
	// 	</Router>
	// ) : (
	// 	<Transition />
	// );
	return <Home />;
};

export default App;
