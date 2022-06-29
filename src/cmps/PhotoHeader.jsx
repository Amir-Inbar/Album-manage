import { useRef } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addphoto } from "../store/actions/photoActions";

export const PhotoHeader = (props) => {
  const [photoUrl, setPhotoUrl] = useState();
  const [photoTitle, setPhotoTitle] = useState();
  const elPhotoTitle = useRef();
  const elPhotoUrl = useRef();
  const dispatch = useDispatch();

  const onAddPhoto = (ev) => {
    ev.preventDefault()
    const thumbnailUrl = URL.createObjectURL(photoUrl);
    const photo = { title: photoTitle, thumbnailUrl,isLocal:true };
    dispatch(addphoto(photo));

    onClearInput();
  };

  const onClearInput = () => {
    elPhotoTitle.current.value = ""
    elPhotoUrl.current.value = ""
  };
  return (
    <section className="photo-header">
      <form className="photo-header--form input-group gap-3 mb-4 flex" onSubmit={onAddPhoto}>
        <input
          className="form-control"
          type="file"
          id="formFile"
          onChange={(ev) => setPhotoUrl(ev.target.files[0])}
          ref={elPhotoUrl}
        />
        <input
          type="text"
          className="form-control"
          aria-describedby="textExample1"
          onChange={(ev) => setPhotoTitle(ev.target.value)}
          ref={elPhotoTitle}
          required
        />
        <button type="submit" className="btn btn-success btn-sm">
          Add photo
        </button>
      </form>
    </section>
  );
};
