import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import todoReducer from './reducers/todoReducer'
import TodoContainer from './container/TodoContainer.js'

const store = createStore (
  todoReducer,
  undefined
)

ReactDOM.render(
    <TodoContainer store={store} />,
    document.getElementById('content')
)
