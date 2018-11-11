export function selectBook(book) {
  // selectBook is an Action Creator, it needs to return an Action, an Object with a Type property.
  return {
    type: "BOOK_SELECTED",
    payload: book
  };
}
