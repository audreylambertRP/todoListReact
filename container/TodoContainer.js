import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as actionCreators from '../actions'
import {InputTodo, TodoList, DisplayOptions} from '../components/TodoApp'

const filterTodo = {
  on: (todo) => todo.status === true,
    off: (todo) => todo.status === false,
    all: () => true
}

const App = ({todos, filterTodo, dispatch, actions}) => {
  return (
    <div>
    <h1>My super todo unicorn</h1>
    <TodoList todos={todos} onDelete={actions.onDelete} onModifyStatus={actions.onModifyStatus} />
    <DisplayOptions filter={actions.changeFilter} />
    <InputTodo onAdd={actions.onAdd} />
    </div>
  );
}

//container
const mapStateToProps = (state) => {
  return {
    ...state,
    todos: state.todos.filter(filterTodo[state.filter])
    //todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App)

