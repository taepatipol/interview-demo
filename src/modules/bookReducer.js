let bookId = 0;
export const ADD = "ADD";
export const DELETE = "DELETE";
export const EDIT = "EDIT";

export default (state = [], action) => {
  switch(action.type) {
    case ADD:
      bookId++;
      return [...state, [bookId,action.data]]
    case DELETE:
      for (i = 0; i < state.length; i++){
        if (state[i][0] == action.id){
          state.splice(i,1)
          return state
        }
      }
      return state
    case EDIT:
      let i = 0
      for (i = 0; i < state.length; i++){
        if (state[i][0] == action.id){
          state[i] = [action.id,action.data]
          return state
        }
      }
    default:
      return state
  }
}