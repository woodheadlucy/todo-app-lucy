import React, { Component } from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

//render is lifecycle method 
//render returns JSX
//have to use className in JSX
class Todos extends Component {


    render() {

        return this.props.todos.map(todo => <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />)
    }
}

//proptypes
Todos.propTypes = {

    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default Todos;
