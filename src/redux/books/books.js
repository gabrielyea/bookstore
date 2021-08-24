import { access } from '../../api/api-access';
import routes from '../../api/api-routes';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const API_TEST = 'bookStore/books/API_TEST';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const successHandle = (payload) => ({
  type: API_TEST,
  payload,
});

const errorHandle = () => {

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);

    case API_TEST:
      return [...state, action.payload];

    default:
      return state;
  }
};

export const asyncApiCall = () => async (dispatch) => {
  try {
    const response = await access.getApi(routes.MAIN);
    Object.entries(response).forEach((book) => {
      dispatch(successHandle((book[1][0])));
    });
  } catch (error) {
    dispatch(errorHandle(error));
  }

  return 'done';
};

export default reducer;
