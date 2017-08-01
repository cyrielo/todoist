import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './';
import AllTodos from '../containers/AllTodos';
import AddTodo from '../containers/AddTodo';
import CompletedTodos from '../containers/CompletedTodos';

class App extends React.Component {
	render() {
		return (
			
			<BrowserRouter>
				<Switch>
					<Home>
						<Route path="/all" component={AllTodos} />
						<Route path="/completed" component={CompletedTodos} />
						<Route path="/add" component={AddTodo} />
						<Route exact path="/" component={AllTodos} />
					</Home>
				</Switch>
			</BrowserRouter>
		)
	}
}


export default App;
