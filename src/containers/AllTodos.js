import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AllTodos from '../pages/AllTodos';
import { deleteTodo, updateTodo } from '../actions/';
const mapStateToProps = (state) => {
	return { todos: state.todos }
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ deleteTodo, updateTodo }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AllTodos);
