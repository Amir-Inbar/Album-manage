import { useNavigate } from "react-router-dom";

export const PhotoPreview = (props) => {
  const navigate = useNavigate();

  return (
    <section className="photo-preview card p-0 flex-grow-1">
      <img
        src={props.photo.thumbnailUrl}
        className="photo-preview--img card-img-top"
        alt={props.photo.title}
        onClick={() => navigate(`${props.photo.id}`)}
      />
      <div className="card-body fw-bolder">
        <p className="card-title">{props.photo.title}</p>
      </div>
    </section>
  );
};
