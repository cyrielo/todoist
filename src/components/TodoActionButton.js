import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoActionButton extends Component {
	render() {
		return (
			<button onClick= { () => this.props.onTodoClick(this.props.pos, { status: (this.props.status === 'completed') ? 'pending': 'completed' }) }>
				{ this.props.status === 'completed' ? 'Mark as unfinished'
					: 'Mark as finished'}
			</button>
		);
	}
}

TodoActionButton.propTypes = {
	status: PropTypes.string.isRequired,
	pos: PropTypes.number.isRequired,
	onTodoClick: PropTypes.func.isRequired
};

export default TodoActionButton;