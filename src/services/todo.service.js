import { storageService } from "./async-storage.service";

export const todoService = {
  query,
  getById,
  add,
  update,
  remove,
};

const API = "todo";
_createTodos();

async function query() {
  return storageService.query(API);
}

async function getById(todoId) {
  return storageService.get(API, todoId);
}

async function add(todo) {
  return storageService.post(API, todo);
}

async function update(todo) {
  return storageService.put(API, todo);
}
async function remove(todoId) {
  console.log(todoId);
  return storageService.remove(API, todoId);
}

async function _createTodos() {
  let todos = await query();
  if (!todos || !todos.length) {
    localStorage.setItem(API, JSON.stringify(TODOS));
  }
}

const TODOS = [
  {
    _id: "A5FLD",
    txt: "Start a vue project",
    createdAt: Date.now(),
    createdBy: "Shocko Moko",
    category: "school",
  },
  {
    _id: "OVJD7",
    txt: "Add typescript",
    createdAt: Date.now(),
    createdBy: "Shocko Moko",
    category: "personal",
  },
  {
    _id: "PDJ8S",
    txt: "Sleep",
    createdAt: Date.now(),
    createdBy: "Lihi",
    category: "personal",
  },
  {
    _id: "3S5CI",
    txt: "🍓🍇🍒🥑",
    createdAt: Date.now(),
    createdBy: "Locko",
    category: "work",
  },
];
