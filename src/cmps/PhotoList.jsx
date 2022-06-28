import { PhotoPreview } from "./PhotoPreview";

export const PhotoList = (props) => {
  return (
    <section className="photo-list flex justify-center">
      <ul className="photo-list__list flex">
        {props.photos.map((photo) => (
          <PhotoPreview photo={photo} key={photo._id}  />
        ))}
      </ul>
    </section>
  );
};
