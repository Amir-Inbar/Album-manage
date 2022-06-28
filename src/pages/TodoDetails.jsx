import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { todoService } from "../services/todo.service";

export const TotoDetails = (props) => {
  const { todoId } = useParams();
  const [todo, setTodo] = useState();

  useEffect(() => {
    (async () => {
      const todoDetails = await todoService.getById(todoId);
      if (!todo) setTodo(todoDetails);
    })();
  }, []);

  return (
    todo && (
      <section className="todo-details">
        <span>{todo.txt}</span>
      </section>
    )
  );
};
