import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CompletedTodos extends Component {

	getTodos() {
		if (this.props.todos.length < 1) {
			return <tr>
				<td></td>
				<td>No todo found</td>
				<td></td>
			</tr>
		} else {
			return this.props.todos.map((item, pos) => {
				if (item.status === 'completed') {
					return (
						<tr key={ item.id }>
							<td>
								{ item.id }
							</td>
							<td>
								{ item.title }
							</td>
							<td>
								{ item.status }
							</td>
							<td>
								<button onClick={ () => this.props.updateTodo(pos, { status: 'pending' }) }>
									Mark as unfinished
								</button>
								<button onClick={ () => this.props.deleteTodo(pos) } >
									Delete
								</button>
							</td>

						</tr>
					);
				}
			});
		}

	}

	render() {
		return (
			<div>
				<table>
					<thead>
					<tr>
						<th>
							S/N
						</th>
						<th>
							Task name
						</th>
						<th>
							Status
						</th>
						<th>
							Action
						</th>
					</tr>
					</thead>
					<tbody>
					{ this.getTodos() }
					</tbody>
				</table>
			</div>
		);
	}
}

CompletedTodos.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		title: PropTypes.string,
		status: PropTypes.string
	})).isRequired,
	deleteTodo: PropTypes.func.isRequired
};

export default CompletedTodos;
