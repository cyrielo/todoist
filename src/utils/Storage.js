class Storage {
	constructor() {
		this.STORE_KEY = 'todo';
		this.store = window.localStorage;
		const isStorageCreated = this.store.getItem(this.STORE_KEY);
		if(!isStorageCreated) {
			this.store.setItem(this.STORE_KEY, JSON.stringify({todos:[]}));
		}
	}

	create(data) {
		const allTodos = this.get();
		allTodos.todos.push(data);
		this.store.setItem(this.STORE_KEY, JSON.stringify(allTodos));
	}

	get(pos = null) {
		const allTodos = JSON.parse(this.store.getItem(this.STORE_KEY));
		if(!pos) {
			return allTodos
		}
		return allTodos.todos[pos];
	}

	update(pos, update) {
		const allTodos = this.get();
		Object.assign(allTodos.todos[pos], update);
		this.store.setItem(this.STORE_KEY, JSON.stringify(allTodos));
	}

	delete(pos) {
		const allTodos = this.get();
		allTodos.todos.splice(pos, 1);
		this.store.setItem(this.STORE_KEY, JSON.stringify(allTodos));
	}
}

export default Storage;
