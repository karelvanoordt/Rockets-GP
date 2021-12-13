const LOAD_STATE = 'bookStore/books/ADD_BOOK';

const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case LOAD_STATE:
        return [...state, action.payload];
        
      default:
        return state;
    }
  };
  
  export default reducer;