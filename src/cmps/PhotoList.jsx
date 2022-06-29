import { Outlet } from "react-router-dom";
import { PhotoPreview } from "./PhotoPreview";

export const PhotoList = (props) => {
  return (
    <section className="photo-list flex justify-center container-fluid">
      <div className="row row-cols-1 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 gap-3 flex-fill justify-content-center">
        {props.photos.map((photo, idx) => (
          <PhotoPreview photo={photo} key={idx} />
        ))}
      </div>
      <Outlet />
    </section>
  );
};
