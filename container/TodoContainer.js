import React from 'react'
import TodoApp from '../components/TodoApp'
import {addTodo} from '../actions'

const filterTodo = {
  on: (todo) => todo.status === true,
  off: (todo) => todo.status === false,
  all: () => true
}

export default class TodoContainer extends React.Component {
  //state = {todos: [{id:0, text:"test", status:true}, {id:1, text:"retest", status:true}], filter: "all"};
  //uniqueId = 2;

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
    // this.setState({
    //   todos: [...this.state.todos, {text, id: this.uniqueId++, status:true}]
    // })
  }
  handleDelete = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id)
    })
  }
  handleStatus = (id) => {
    let elem = this.state.todos.find((todo) => todo.id === id);
    console.log('1 =', elem.status);

    elem.status = !elem.status;
    console.log('2 =', elem.status);
    this.setState({ todos: this.state.todos })
  }
  handleFilter = (status) => {
    this.setState({ filter: status })
  }

  render() {
    // return <TodoApp todos={this.state.todos} onDelete={this.handleDelete} onAdd={this.handleAdd} />
    return <TodoApp filter={this.handleFilter} todos={this.state.todos.filter(filterTodo[this.state.filter])} onDelete={this.handleDelete} onAdd={this.handleAdd} onModifyStatus={this.handleStatus} />
  }
}
