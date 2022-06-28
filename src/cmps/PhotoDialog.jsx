import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addphoto, getPhotoById, removePhoto } from "../store/actions/photoActions";

export const PhotoDialog = () => {
  const photo = useSelector((state) => state.photoModule.photo);
  const { photoId } = useParams();
  const navigate = useNavigate();
  const elDialog = useRef();
  const dispatch = useDispatch()

  useEffect(() => {
    if (elDialog.current) {
      elDialog.current.removeAttribute("open");
      elDialog.current.showModal();
    }

    if (!photo) {
      dispatch(getPhotoById(photoId));
    }
  }, []);
console.log(photo);
  return (
    <dialog className="dialog-modal" ref={elDialog}>
      <span>heyeyey</span>
      <button onClick={() => navigate(-1)}></button>
    </dialog>
  );
};
