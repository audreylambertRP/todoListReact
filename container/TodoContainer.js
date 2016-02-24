import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

//import TodoApp from '../components/TodoApp'
//import {addTodo, changeFilter, changeTodoStatus, deleteTodo} from '../actions'
import * as actionCreators from '../actions'
import {InputTodo, TodoList} from '../components/TodoApp'


console.log('todolist = ', TodoList)
console.log('inputtodo =', InputTodo)

const filterTodo = {
  on: (todo) => todo.status === true,
    off: (todo) => todo.status === false,
    all: () => true
}

/*export default class TodoContainer extends React.Component {
  state = {}

  componentWillMount = () => {
  const {store} = this.props
  store.subscribe(() => {
  const state = store.getState()
  this.setState({todos: state.todos, filter: state.filter})
  })
  this.setState(this.props.store.getState())
  }

  handleAdd = (text) => {
  this.props.store.dispatch(addTodo({text:text}))
  }
  handleDelete = (id) => {
  this.props.store.dispatch(deleteTodo(id))
  }
  handleStatus = (id) => {
  this.props.store.dispatch(changeTodoStatus(id))

  }
  handleFilter = (filter) => {
  this.props.store.dispatch(changeFilter(filter))
  }

  render() {
  return <TodoApp filter={this.handleFilter} todos={this.state.todos.filter(filterTodo[this.state.filter])} onDelete={this.handleDelete} onAdd={this.handleAdd} onModifyStatus={this.handleStatus} />
  }
  }*/



const App = ({todos, filterTodo, dispatch, actions}) => {
  return (
    <div>
    <h1>My super todo unicorn</h1>
    <TodoList todos={todos} onDelete={actions.onDelete} onModifyStatus={actions.onModifyStatus} />
    <InputTodo onAdd={actions.onAdd} />
    </div>
  );
}


//container
const mapStateToProps = (state) => {
  return {
    ...state,
    //todos: state.todos.filter(filter[state.filter])
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App)

