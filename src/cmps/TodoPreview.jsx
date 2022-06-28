import { Link } from "react-router-dom";
import { eventBusService } from "../services/eventBusService";

export const TodoPreview = (props) => {

  const handleClick = (todoId) => {
    eventBusService.emit("onRemove", todoId);
  };

  return (
    <section className="todo-preview flex column">
      {Object.entries(props.todo).map(([key, val]) => (
        <span key={val}>
          {key}:{val}
        </span>
      ))}
      <div className="flex space-between">
        <Link className="todo-preview--btn" to={`todo/${props.todo._id}`}>
          Details
        </Link>
        <button onClick={() => handleClick(props.todo._id)}>Delete</button>
      </div>
    </section>
  );
};
