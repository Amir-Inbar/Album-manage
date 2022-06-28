import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addphoto, getPhotoById, removePhoto } from "../store/actions/photoActions";

export const PhotoDialog = () => {
  const [displayPhoto, setDisplayPhoto] = useState();
  // const photos = useSelector((state) => state.photoModule.photos);
  const { photoId } = useParams();
  const navigate = useNavigate();
  const elDialog = useRef();

  const removeImg = removePhoto(photoId)
  console.log(removeImg);

  useEffect(() => {
    if (elDialog.current) {
      elDialog.current.removeAttribute("open");
      elDialog.current.showModal();
    }

    if (!displayPhoto) {
    }
  }, []);

  return (
    <dialog className="dialog-modal" ref={elDialog}>
      <span>heyeyey</span>
      <button onClick={() => navigate(-1)}></button>
    </dialog>
  );
};
