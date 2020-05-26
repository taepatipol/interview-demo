const ADD = "ADD";
const DELETE = "DELETE";
const EDIT = "EDIT";
let bookId = 0;

const bookReducer = (state = [], action) => {
  switch(action.type) {
    case ADD:
      bookId++;
      return [...state, [bookId,action.data]]
    case DELETE:
      for (i = 0; i < state.length; i++){
        if (state[i][0] == action.id){
          state.splice(i)
          return state
        }
      }
      return state
    case EDIT:
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

const add_book = (bookData) => {
  return {
    type: ADD,
    data: bookData
  }
}

const delete_book = (bookId) => {
  return {
    type: DELETE,
    id: bookId
  }
}

const edit_book = (bookId, bookData) => {
  return {
    type: EDIT,
    id: bookId,
    data: bookData
  }
}