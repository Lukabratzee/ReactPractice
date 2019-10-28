import React, { Component } from 'react';
import Todos from './components/Todos';
import { runInThisContext } from 'vm';

class App extends Component {
	state = {
		todos: [
			{
				id: 1,
				title: 'Take out the GARBAGE',
				completed: false
			},
			{
				id: 2,
				title: 'Dinner with Grill',
				completed: true
			},
			{
				id: 3,
				title: 'Complete MediEvil',
				completed: false
			}
		]
  };
  
  markComplete = () => {
    console.log ('From app.js')
  }
//why this.state here for todos but...
// no this.state for markComplete here either, but there is props used down the tree
	render() {
		return (
			<div className="App">
				<Todos todos={this.state.todos} markComplete = {this.markComplete} />
			</div>
		);
	}
}

export default App;
