import { albumService } from "../../services/album.service";


const _removephoto = (photoId) => ({ type: "REMOVE_photo", photoId });
const _setphotos = (photos) => ({ type: "SET_photoS", photos });

export function loadphotos() {
  return async (dispatch) => {
    const photos = await albumService.query();
    console.log(photos);
    dispatch(_setphotos(photos));
  };
}
export function getphotoById(photoId) {
  return async (dispatch) => {
    return await albumService.getById(photoId);
    // dispatch(_setphotos(photo));
  };
}

export function removephoto(photoId) {
  return async (dispatch) => {
    await albumService.remove(photoId);
    console.log(photoId);
    dispatch(_removephoto(photoId));
  };
}

export function addphoto(photo) {
  return async (dispatch) => {
    const createdphoto = await albumService.add(photo);
    dispatch({ type: "ADD_photo", photo: createdphoto.data.createphoto });
  };
}

export function updatephoto(input) {
  return async (dispatch) => {
    const updatedphoto = await albumService.update(input);
    dispatch({ type: "UPDATE_photo", photo: updatedphoto.data.updatephoto });
  };
}
