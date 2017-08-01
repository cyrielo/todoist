import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todoTitle: ''
		};
		this.updateTitle = this.updateTitle.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	updateTitle(event) {
		const todoTitle = event.target.value;
		this.setState({
			todoTitle
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const randomId = Math.floor(Math.random() * 100);
		console.log(this.props);
		this.props.createTodo(randomId, this.state.todoTitle);
		this.setState({
			todoTitle: ' '
		})
	}

	render() {
		return (
			<div>
				<form>
					<div>
						<label htmlFor="todo-title">Title</label>
						<br />
						<input onChange={ this.updateTitle } type="text"
						       value={ this.state.todoTitle } name="title" id="todo-title" />
					</div>
					<br/>
					<div>
						<button onClick={ this.handleSubmit }>
							Create Todo
						</button>
					</div>
				</form>
			</div>
		);
	}
}


export default AddTodo;
