import { ADD_TODO, VIEW_ALL, VIEW_COMPLETED, DELETE_TODO, UPDATE_TODO }
from '../actionTypes';
console.log('Type ADD_TODO = ', ADD_TODO);
const createTodo = (id, title) => {
	return {
		type: ADD_TODO,
		payload: { id, title }
	}
};

const	viewAllTodos = () => {
	return {
		type: VIEW_ALL
	}
};

const	viewCompleted = () => {
	return {
		type: VIEW_COMPLETED
	}
};

const	updateTodo = (pos, update) => {
	return {
		type: UPDATE_TODO,
		payload: { pos, update }
	}
};

const	deleteTodo = (pos) => {
	return {
		type: DELETE_TODO,
		payload: { pos }
	}
};

export {
	createTodo,
	viewAllTodos,
	viewCompleted,
	updateTodo,
	deleteTodo
};
