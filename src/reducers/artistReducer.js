export function artistReducer(state = [], action) {
  switch (action.type) {
    case "FETCH_ARTISTS":
      return action.payload;
    case "FETCH_RELATED_ARTISTS":
      return action.payload;
    default:
      return state;
  }
}
