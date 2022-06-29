const initialState = {
  photos: [],
  photo: null,
};

export function photoReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_PHOTOS":
      return {
        ...state,
        photos: action.photos,
      };
    case "SET_PHOTO":
      return {
        ...state,
        photo: action.photo,
      };
    case "ADD_PHOTO":
      return {
        ...state,
        photos: [ action.photo,...state.photos],
      };
    case "UPDATE_PHOTO":
      return {
        ...state,
        photos: state.photos.map((photo) => {
          if (photo.id === action.photo.id) return action.photo;
          return photo;
        }),
      };
    case "REMOVE_PHOTO":
      return {
        ...state,
        photos: state.photos.filter((photo) => photo.id !== action.photoId),
      };
    default:
      return state;
  }
}
