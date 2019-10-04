import React, { Component } from 'react';
import PropTypes from "prop-types";

class Todoitem extends Component {
    getStyle = () => {
    return {
        background:"#f4f4f4",
        borderBottom: '1px #ccc dotted',
        padding:'10px',
        textDecoration :this.props.todo.completed? 'line-through':'none'
    }

    }
 
       render() {
        const {id,title} = this.props.todo;
        return (
            <div style={this.getStyle()} >
                <p  >
                    <input type='checkbox' onChange={this.props.toggleCheck.bind(this,id)} />{" "}
                    {title} {" "}
                    <button className="deleteBtn" onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>x</button>
                </p>
            </div>
            
        )
    }
}


Todoitem.propTypes ={
    todo: PropTypes.object.isRequired
}

export default Todoitem;

const btnStyle =  {
    borderRadius:'50%',
    justifyContent:'center',
    background:'#ff0000',
    border:'none',
    cursor:'pointer',
    float:'right',
    padding:'5px 9px'
}

