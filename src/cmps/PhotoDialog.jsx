import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { loadPhoto, removePhoto, updatephoto } from "../store/actions/photoActions";

export const PhotoDialog = () => {
  const photo = useSelector((state) => state.photoModule.photo);
  const [photoTitle, setPhotoTitle] = useState();
  const { photoId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadPhoto(photoId));

    return () => {
      dispatch(loadPhoto(null));
    };
  }, [photoId]);

  const onCloseModal = () => {
    navigate(-1);
  };

  const handleChange = (ev) => {
    ev.preventDefault();
    const updatePhoto = { ...photo, title: photoTitle };
    dispatch(updatephoto(updatePhoto));
    onCloseModal();
  };

  const onRemovePhoto = (photoId) => {
    onCloseModal();
    dispatch(removePhoto(photoId));
  };
  console.log(photo);
  return (
    photo && (
      <div className="modal d-block" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4>Photo: {photo.id}</h4>
            </div>
            <img src={photo.thumbnailUrl} alt="" />
            <form className="modal-body p-30" onSubmit={handleChange}>
              <input
                type="text"
                defaultValue={photo.title}
                className="modal-dialog-container--input p-2"
                onChange={(ev) => setPhotoTitle(ev.target.value)}
              />
              <div className="flex space-between m-2">
                <button
                  type="submit"
                  className="btn btn-danger"
                  data-dismiss="modal"
                  onClick={() => onRemovePhoto(photo)}
                >
                  Remove
                </button>
                <button type="submit" className="btn btn-primary" >
                  Save changes
                </button>
              </div>
            </form>

            <button
              type="button"
              className="btn btn-outline-secondary"
              data-dismiss="modal"
              onClick={() => onCloseModal()}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    )
  );
};
