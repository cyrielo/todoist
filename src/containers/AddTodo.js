import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AddTodo from '../pages/AddTodo';
import { createTodo } from '../actions/';
const mapStateToProps = (state) => {
	return { todos: state.todos }
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ createTodo }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
