import { TodoPreview } from "./TodoPreview";

export const TodoList = (props) => {
  return (
    <section className="todo-list flex justify-center">
      <ul className="todo-list__list flex">
        {props.todos.map((todo) => (
          <TodoPreview todo={todo} key={todo._id}  />
        ))}
      </ul>
    </section>
  );
};
