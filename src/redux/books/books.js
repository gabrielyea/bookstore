/* eslint-disable no-unused-vars */
import { access } from '../../api/api-access';
import routes from '../../api/api-routes';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
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

    default:
      return state;
  }
};

export const getBooksFromApi = () => async (dispatch) => {
  try {
    const response = await access.getApi(routes.MAIN);
    Object.entries(response).forEach((book) => {
      dispatch(addBook((book[1][0])));
    });
  } catch (error) {
    dispatch(errorHandle(error));
  }

  return 'done';
};

// eslint-disable-next-line camelcase
export const postBookToApi = ({ item_id, category, title }) => async (dispatch) => {
  const response = await access.postApi(item_id, category, title);
  if (response.ok) {
    console.log('ok');
    dispatch(addBook({ item_id, category, title }));
  }
};

export default reducer;
