import { Outlet } from "react-router-dom";
import { PhotoPreview } from "./PhotoPreview";

export const PhotoList = (props) => {
  return (
    <section className="photo-list container">
      <div className="row row-cols-1 row-cols-sm-3 row-cols-md-4 g-6">
        {props.photos.map((photo, idx) => (
          <PhotoPreview photo={photo} key={idx} />
        ))}
      </div>
      <Outlet />
    </section>
  );
};
