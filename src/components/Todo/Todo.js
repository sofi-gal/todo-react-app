import React from 'react';
import '../Todo/Todo.css';
import { TiDelete } from 'react-icons/ti';

const Todo = (props) => {
    return(
      <div className="list-item">
        {props.content}
        <button className="delete"><TiDelete className="icon" onClick= {() => {props.onDelete(props.id)}}/>
        </button>
      </div>
    );
  }

  export default Todo;