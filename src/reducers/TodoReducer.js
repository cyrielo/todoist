import Storage from '../utils/Storage';
import { ADD_TODO, VIEW_ALL, VIEW_COMPLETED, DELETE_TODO, UPDATE_TODO } 
from '../actionTypes';

const DB = new Storage();
const defaultState = DB.get();
const TodoReducer = (state = defaultState, action) => {
	let allTodos;
	switch(action.type) {
		case ADD_TODO:
			const title = action.payload.title;
			if(typeof title === 'string') {
				const todoItem = {
					...action.payload,
					status: 'pending'
				};
				DB.create(todoItem);
				return {
					...state,
					todos: [
						...state.todos,
						todoItem
					]
				}
			}
			else {
				return state;
			}
		break;
		case VIEW_ALL:
		case VIEW_COMPLETED:
			return {
				...state,
				visibility: action.type
			}
		break;
		case DELETE_TODO:
			DB.delete(action.payload.pos);
			allTodos = DB.get();
			return {
				...state,
				todos: [
					...allTodos.todos
				]
			};
		break;
		case UPDATE_TODO:
			DB.update(action.payload.pos, action.payload.update);
			allTodos = DB.get();
			return {
				...state,
				todos: [
					...allTodos.todos
				]
			};
		break;
		default:
			return state;
		break;
	}
}

export default TodoReducer;
