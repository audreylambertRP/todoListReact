import React from 'react'

const InputTodo = ({onAdd}) => {
  let DOMNode = null;
  const handleAdd = () => (e) => {
    e.preventDefault();
    onAdd(DOMNode.value);
    DOMNode.value = '';
  };
  return (
    <div>
      <input ref={(node) => {DOMNode = node}}/>
      <button onClick={handleAdd()}> Encore du travail </button>
    </div>
  )
}

const Todo = ({todo, onDelete, onModifyStatus}) => {
  const handleDelete = (id) => (e) => {
    e.preventDefault();
    onDelete(id);
  };
  const handleStatus = (id) => (e) => {
    e.preventDefault();
    onModifyStatus(id);
  };
  return (<li>{todo.text} <button onClick={handleStatus(todo.id)}> "Modify status" </button> <button onClick={handleDelete(todo.id)}> "Delete" </button> </li>)
}

const TodoList = ({todos, onDelete, onModifyStatus}) => {
  if (!todos.length) return <p>You have nothing to do, lucky you!</p>
  const list = todos.map((todo) => <Todo key={todo.id} todo={todo} onDelete={onDelete} onModifyStatus={onModifyStatus} />);
  return (
      <ul>
      {list}
      </ul>
  )
}

export default TodoList, InputTodo 
/*
const DisplayOptions = ({filter}) => {
  const handleFilter = (status) => (e) => {
    e.preventDefault();
    filter(status);
  };
  return (<div><button onClick={handleFilter('all')}>"All"</button> <button onClick={handleFilter('on')}>"Todo"</button> <button onClick={handleFilter('off')}>"Done"</button></div>)
}*/

/*export default ({filter, todos, onDelete, onAdd, onModifyStatus}) => {
  return (
    <div>
      <h1>My super todo unicorn</h1>
      <TodoList todos={todos} onDelete={onDelete} onModifyStatus={onModifyStatus} />
      <DisplayOptions filter={filter} />
      <InputTodo onAdd={onAdd} />
    </div>
  );
}*/
