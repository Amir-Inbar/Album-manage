import { albumService } from "../../services/album.service";


const _removephoto = (photoId) => ({ type: "REMOVE_photo", photoId });
const _setphotos = (photos) => ({ type: "SET_photos", photos });
const _setphoto = (photo) => ({ type: "SET_photo", photo });

export function loadphotos() {
  return async (dispatch) => {
    const photos = await albumService.query();
    dispatch(_setphotos(photos));
  };
}
export function getPhotoById(photoId) {
  return async (dispatch) => {
    const photo = await albumService.getById(photoId);

    dispatch(_setphoto(photo));
    return 
  };
}

export function removePhoto(photoId) {
  return async (dispatch) => {
    const photo = await albumService.remove(photoId);
    console.log("removedPhoto",photo);
    dispatch(_removephoto(photoId));
    return photo
  };
}

export function addphoto(photo) {
  return async (dispatch) => {
    const createdphoto = await albumService.add(photo);
    dispatch({ type: "ADD_photo", photo: createdphoto.data.createphoto });
    return createdphoto
  };
}

export function updatephoto(input) {
  return async (dispatch) => {
    const updatedphoto = await albumService.update(input);
    dispatch({ type: "UPDATE_photo", photo: updatedphoto.data.updatephoto });
  };
}
