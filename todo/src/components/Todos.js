import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
	
	render() {
		return this.props.todos.map((todo) => (
			// above this we use this.props because it's been passed to this from another component. this.state
			// means it's native to that component i.e self referencing.
			// when you pass things and grab them, like here, it looks like you don't need to do this.state, you just use the
			// variable name.

			// Component - variable
			// You're giving TodoItem a variable, and it's being assigned a value/run whatever we set it as (in this case the result of the iteration).
            // key is giving a unique ID to the iterator. So we're using the ID from the todo array.
            //... not here? Once it's passed once is that it? It can't be...
			<TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} />
		));
	}
}

Todos.propTypes = {
	todos: PropTypes.array.isRequired
};

export default Todos;
