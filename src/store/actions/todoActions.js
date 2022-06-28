import { todoService } from "../../services/todo.service";

const _removeTodo = (todoId) => ({ type: "REMOVE_TODO", todoId });
const _setTodos = (todos) => ({ type: "SET_TODOS", todos });

export function loadTodos() {
  return async (dispatch) => {
    const todos = await todoService.query();
    dispatch(_setTodos(todos));
  };
}
export function getTodoById(todoId) {
  return async (dispatch) => {
    return await todoService.getById(todoId);
    // dispatch(_setTodos(todo));
  };
}

export function removeTodo(todoId) {
  return async (dispatch) => {
    await todoService.remove(todoId);
    console.log(todoId);
    dispatch(_removeTodo(todoId));
  };
}

export function addTodo(todo) {
  return async (dispatch) => {
    const createdTodo = await todoService.add(todo);
    dispatch({ type: "ADD_TODO", todo: createdTodo.data.createTodo });
  };
}

export function updateTodo(input) {
  return async (dispatch) => {
    const updatedTodo = await todoService.update(input);
    dispatch({ type: "UPDATE_TODO", todo: updatedTodo.data.updateTodo });
  };
}
