export const ADD_TODOS = '@@todos/ADD_TODOS'
export const SET_LOADING = '@@todos/SET_LOADING'
export const SET_ERROR = '@@todos/SET_ERROR'
export const ADD_TODO = '@@todos/ADD_TODO'

const addTodoAC = (todo) => ({
  type: ADD_TODO,
  payload: todo
})

const addTodosAC = (todos) => ({
  type: ADD_TODOS,
  payload: todos,
})

const setLoadingAC = () => ({
  type: SET_LOADING
})

const setErrorAC = (err) => ({
  type: SET_ERROR,
  payload: err,
})

export const loadTodos = () => (dispatch, _, client) => {
  dispatch(setLoadingAC())

  client.get('https://jsonplaceholder.typicode.com/todos')
    .then(data => dispatch(addTodosAC(data)))
    .catch(err => dispatch(setErrorAC(err)))
}

export const createTodo = (title) => (dispatch, _, client) => {
  client.post('https://jsonplaceholder.typicode.com/todos',
    {
      title,
      completed: false,
      userId: 1
    })
    .then(newTodo => dispatch(addTodoAC(newTodo)))
    .catch(err => dispatch(setErrorAC(err)))
}