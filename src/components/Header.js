import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<div>
				<h3>
					<center>
						Welcome to Todoist <small><i>creating todos made easy!</i></small>
					</center>
				</h3>
				<hr/>
				<Link to="/all">All todos</Link>
				&nbsp;&nbsp;
				<Link to="/add">Create todo</Link>
				&nbsp;&nbsp;
				<Link to="/completed">Completed todos</Link>
				<hr/>
			</div>
		);
	}
}

export default Header;
