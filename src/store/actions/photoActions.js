import { albumService } from "../../services/album.service";
import { makeId } from "../../services/util.service";

const _removePhoto = (photoId) => ({ type: "REMOVE_PHOTO", photoId });
const _setPhotos = (photos) => ({ type: "SET_PHOTOS", photos });
const _setPhoto = (photo) => ({ type: "SET_PHOTO", photo });
const _addPhoto = (photo) => ({ type: "ADD_PHOTO", photo });
const _updatePhoto = (photo) => ({ type: "UPDATE_PHOTO", photo });

export function loadphotos() {
  return async (dispatch) => {
    try {
      const photos = await albumService.query();
      dispatch(_setPhotos(photos));
    } catch (error) {
      console.error("Can't load photos", error);
    }
  };
}

export function loadPhoto(photoId) {
  return async (dispatch) => {
    try {
      const photo = photoId ? await albumService.getById(photoId) : null;
      dispatch(_setPhoto(photo));
    } catch (error) {
      console.error("Can't load photo", error);
    }
  };
}

export function removePhoto(photoId) {
  return async (dispatch) => {
    try {
      await albumService.remove(photoId);
      dispatch(_removePhoto(photoId));
    } catch (error) {
      console.error("Can't remove photo", error);
    }
  };
}

export function addphoto(photo) {
  return async (dispatch) => {
    try {
      photo.id = makeId();
      const createdphoto = await albumService.add(photo);
      dispatch(_addPhoto(createdphoto));
    } catch (error) {
      console.error("Can't add photo", error);
    }
  };
}

export function updatephoto(updatePhoto) {
  return async (dispatch) => {
    try {
      const updatedPhoto = await albumService.update(updatePhoto);
      dispatch(_updatePhoto(updatedPhoto));
    } catch (error) {
      console.error("Can't update photo", error);
    }
  };
}
