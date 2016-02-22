export const ADD_TODO ='ADD_TODO'
export const FILTER_LIST ='FILTER_LIST'
export const CHANGE_TODO_STATUS ='CHANGE_TODO_STATUS'
export const DELETE_TODO ='DELETE_TODO'

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

export function changeTodoStatus(id) {
  return {
    type: CHANGE_TODO_STATUS,
    id:id
  }
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    id:id
  }
}
