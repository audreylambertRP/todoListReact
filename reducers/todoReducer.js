import  {
  ADD_TODO,
  FILTER_LIST
} from '../actions'

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
    default:
      return state
  }
}
