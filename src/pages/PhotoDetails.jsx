import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { albumService } from "../services/album.service";

export const PhotoDetails = (props) => {
  const { photoId } = useParams();
  const [photo, setphoto] = useState();

  useEffect(() => {
    (async () => {
      const photoDetails = await albumService.getById(photoId);
      if (!photo) setphoto(photoDetails);
    })();
  }, []);

  return (
    photo && (
      <section className="photo-details">
        <span>{photo.txt}</span>
      </section>
    )
  );
};
