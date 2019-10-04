import React, { Component } from 'react';
import Todoitem from "../todoitem/Todoitem";
import PropTypes from "prop-types";

class Todos extends Component {
    render() {
        return this.props.todos.map((todo)=>
        (
            <Todoitem key={todo.id} todo={todo} toggleCheck={this.props.toggleCheck} delTodo={this.props.delTodo}/>
        ));
    }
}

//Proptypes
Todos.propTypes= {
    todos: PropTypes.array.isRequired
}
export default Todos;
