import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
	getStyle = () => {
		return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            // this is a turnery operator. ? is asking if this is true, so if completed is true, then do this, else do that
            textDecoration: this.props.todo.completed ? 
            'line-through' :'none'
        }
    };
    
    markComplete = (e) => {
        console.log(this.props)
    } 

	render() {
		return (
			<div style={this.getStyle()}>
            <p>
                <input type="checkbox" onChange={this.props.markComplete} /> {' '}
            
			{this.props.todo.title}</p>
			</div>
		);
	}
}

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired
};



export default TodoItem;
