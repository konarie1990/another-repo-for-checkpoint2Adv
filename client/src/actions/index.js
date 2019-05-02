export function listCats(cats) {
  console.log("actions list", cats);
  return {
    type: "LIST_CATS",
    value: cats
  };
}

export function createCat(cat) {
  console.log("actions create", cat);
  return {
    type: "CREATE_CAT",
    value: cat
  };
}

export function deleteCat(id) {
  console.log("actions delete", id);
  return {
    type: "DELETE_CAT",
    value: id
  };
}
