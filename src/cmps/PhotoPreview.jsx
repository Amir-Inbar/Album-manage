import { Link } from "react-router-dom";
import { eventBusService } from "../services/eventBusService";

export const PhotoPreview = (props) => {

  const handleClick = (photoId) => {
    eventBusService.emit("onRemove", photoId);
  };

  return (
    <section className="photo-preview flex column">
      {Object.entries(props.photo).map(([key, val]) => (
        <span key={val}>
          {key}:{val}
        </span>
      ))}
      <div className="flex space-between">
        <Link className="photo-preview--btn" to={`photo/${props.photo._id}`}>
          Details
        </Link>
        <button onClick={() => handleClick(props.photo._id)}>Delete</button>
      </div>
    </section>
  );
};
