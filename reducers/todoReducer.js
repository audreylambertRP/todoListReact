import  {
  ADD_TODO,
  FILTER_LIST,
  CHANGE_TODO_STATUS,
  DELETE_TODO
} from '../actions'


// class JSONRequest {
// ​
//   constructor (protocol, url, callback) {
//     this._HttpReq = new XMLHttpRequest()
//     this._HttpReq.open(protocol, url, true)
//     this._HttpReq.onload = (e) => {
//       if (this._HttpReq.status === 200) {
//         this._json = JSON.parse(this._HttpReq.responseText)
//       } else {
//         this._json = undefined
//       }
//       callback(this._json)
//     }
//     this._HttpReq.send(null)
//   }
// ​
//   abort = () => {
//     this._HttpReq.abort()
//   }
// ​
// }

// USAGE
// ​const initialState;
// var req = new JSONRequest('GET', '/todos', (data) => {
//   initialState = {
  //  todos: [],
  //  filter: 'all'
//  }
// })
// ​


const initialState = {
  todos: [],
  filter: 'all'
}

export default function reducer (state = initialState, action) {
  switch (action.type) {

    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.todo]
      }

      case FILTER_LIST:
        return {
          ...state,
          filter: action.filter
        }

      case CHANGE_TODO_STATUS:
        function changeTodoStatus(id) {
          let elem = state.todos.find((todo) => todo.id === id);
          elem.status = !elem.status;
          return (state.todos)
        }
        return {
          ...state,
          todos: changeTodoStatus(action.id)
        }

      case DELETE_TODO:
        function deleteTodo(id) {
          const newTodos = state.todos.filter((todo) => todo.id !== id)
          return (newTodos)
        }
        return {
          ...state,
          todos: deleteTodo(action.id)
        }

    default:
      return state
  }
}
