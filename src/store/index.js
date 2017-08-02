import { createStore } from 'redux';
import Actions from '../actions';
import AllReducers from '../reducers';

const store = createStore(AllReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const unsubscribe = store.subscribe(() => {
	console.log('Current store state!!', store.getState());
});

console.log("initial state", store.getState());

export default store;
