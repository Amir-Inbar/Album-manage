export const storageService = {
  save,
  load,
};

function save(entityType, entities) {
  localStorage.setItem(entityType, JSON.stringify(entities));
}

function load(key) {
  var val = localStorage.getItem(key);
  return val ? JSON.parse(val) : null;
}
