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
  return async (dispatch, getState) => {
    try {
      const { photos } = getState().photoModule;
      const photoFromCache = photos.filter((photo) => photo.id === photoId)[0];
      if (photoFromCache) {
        dispatch(_setPhoto(photoFromCache));
      } else {
        console.log(photoId);
        const photo = photoId ? await albumService.getById(photoId) : null;
        dispatch(_setPhoto(photo));
      }
    } catch (error) {
      console.error("Can't load photo", error);
    }
  };
}

export function removePhoto(photo) {
  return async (dispatch) => {
    try {
      if (!photo.isLocal) {
        await albumService.remove(photo.id);
        dispatch(_removePhoto(photo.id));
      } else {
        dispatch(_removePhoto(photo.id));
      }
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
      if (!updatePhoto.isLocal) {
        const updatedPhoto = await albumService.update(updatePhoto);
        dispatch(_updatePhoto(updatedPhoto));
      } else {
        dispatch(_updatePhoto(updatePhoto));
      }
    } catch (error) {
      console.error("Can't update photo", error);
    }
  };
}
