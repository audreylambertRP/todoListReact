export const ADD_TODO ='ADD_TODO'
export const FILTER_LIST ='FILTER_LIST'
export const CHANGE_TODO_STATUS ='CHANGE_TODO_STATUS'
export const DELETE_TODO ='DELETE_TODO'

let id = 0

export function onAdd(text) {
  function maker(text) {
    return {
      id: id++,
      status: true,
      text,
      createdAt: new Date()
     }
  }
  return {
    type: ADD_TODO,
    todo:maker(text)
  }
}

export function changeFilter(filter) {
  return {
    type: FILTER_LIST,
    filter:filter
  }
}

export function onModifyStatus(id) {
  return {
    type: CHANGE_TODO_STATUS,
    id:id
  }
}

export function onDelete(id) {
  return {
    type: DELETE_TODO,
    id:id
  }
}
