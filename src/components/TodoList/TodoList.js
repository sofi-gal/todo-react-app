import React from 'react';
import '../TodoList/TodoList.css';
import Todo from '../Todo/Todo';

const TodoList = (props) => {
    const todos = props.tasks.map((todo, index) => {
        return <Todo content={todo} key={index} id={index} onDelete={props.onDelete} />
    })
    return( 
      <div className='list-wrapper'>
        {todos}
      </div>
    );
  }

  export default TodoList;