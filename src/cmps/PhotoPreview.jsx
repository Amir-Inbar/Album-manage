import { Outlet, useNavigate } from "react-router-dom";

export const PhotoPreview = (props) => {
const navigate = useNavigate()

  return (
    <section className="photo-preview card">
      <img
        src={props.photo.thumbnailUrl}
        className="photo-preview--img card-img-top"
        alt={props.photo.title}
        onClick={()=> navigate(`${props.photo.id}`)}
      />
      <div className="card-body">
        <h5 className="card-title">{props.photo.title}</h5>
      </div>
    </section>
  );
};
