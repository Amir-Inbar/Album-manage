import { HashRouter as Router, Route, Routes, Link } from "react-router-dom";
import { TodoList } from "./cmps/TodoList";
import "./styles/main.scss";
import { useDispatch, useSelector } from "react-redux";
import { loadTodos, removeTodo } from "./store/actions/todoActions";
import { useEffect } from "react";
import { TotoDetails } from "./pages/TodoDetails";
import { eventBusService } from "./services/eventBusService";

export function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todoModule.todos);

  useEffect(() => {
    dispatch(loadTodos());
    eventBusService.on("onRemove", (todoId) => {
      const todo = removeTodo(todoId);
    });
  }, []);

  return (
    todos && (
      <Router>
        <Routes>
          <Route path="/" element={<TodoList todos={todos} />} />
          <Route path="/todo/:todoId" element={<TotoDetails />} />
        </Routes>
      </Router>
    )
  );
}

export default App;
