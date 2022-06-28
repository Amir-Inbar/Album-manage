const initialState = {
    photos: []
}

export function photoReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_photoS':
            return {
                ...state,
                photos: action.photos
            }
        case 'ADD_photo':
            return {
                ...state,
                photos: [...state.photos, action.photo]
            }
        case 'UPDATE_photo':
            return {
                ...state,
                photos: state.photos.map(photo => {
                    if (photo.id === action.photo.id) return action.photo;
                    return photo;
                })
            }
        case 'REMOVE_photo':
            return {
                ...state,
                photos: state.photos.filter(photo => photo.id !== action.photoId)
            }
        default:
            return state;
    }
}