import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import todoReducer from './reducers/todoReducer'
import App from './container/TodoContainer.js'

const store = createStore (
  todoReducer
  //, undefined
)

ReactDOM.render(
    <Provider store={store}> 
      <App />
    </Provider>,
    document.getElementById('content')
)
