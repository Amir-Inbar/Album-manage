import { httpService } from "./http.service";

export const albumService = {
  query,
  getById,
  add,
  update,
  remove,
};


async function query(filterBy) {
  return httpService.get("photo", filterBy);
}

async function getById(photoId) {
  // return httpService.get(`${API}/${photoId}`);
}

async function add(photo) {
  // return httpService.post(API, photo);
}

async function update(photo) {
  // return httpService.put(API, photo);
}
async function remove(photoId) {
  console.log(photoId);
  // return httpService.delete(`${API}/${photoId}`);
}
