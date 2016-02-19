export const ADD_TODO ='ADD_TODO'
export const FILTER_LIST ='FILTER_LIST'

let id = 0



export function addTodo(todo) {
  function maker(todo) {
    todo.id = id++
    todo.status = true
    todo.createdAt = new Date()
    return todo
  }
  return {
    type: ADD_TODO,
    todo:maker(todo)
  }
}

export function changeFilter(filter) {
  return {
    type: FILTER_LIST,
    filter:filter
  }
}
