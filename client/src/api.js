import axios from 'axios'

baseURL = 'http://localhost:8000/api'
baseURL_DEV = '/api'

const api = axios.create({ baseURL: baseURL })

export const getTodos = () => api.get('/todos/').then(resp => resp.data)

export const addTodo = (todo) => api.post('/todos/', todo).then(resp => resp.data)

export const deleteTodo = (id) => api.delete(`/todos/${id}/`).then(resp => resp.data)

export const completeTodo = (id) => api.post('/complete_todo/', {id}).then(resp => resp.data)