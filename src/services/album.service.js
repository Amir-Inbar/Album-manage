import { httpService } from "./http.service";

export const albumService = {
  query,
  getById,
  add,
  update,
  remove,
};

async function query() {
  return httpService.get("/");
}

async function getById(photoId) {
  return httpService.get("/" + photoId);
}

async function add(photo) {
  return httpService.post("/", photo);
}

async function update(photo) {
  return httpService.put("/" + photo.id, photo);
}

async function remove(photoId) {
  return httpService.delete("/" + photoId);
}
