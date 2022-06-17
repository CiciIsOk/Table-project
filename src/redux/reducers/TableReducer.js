import { ADD_DATA } from "../constants/tableConstants";
import { EDIT_DATA } from "../constants/tableConstants";
import { DELETE_DATA } from "../constants/tableConstants";

const initialState = {
  rows: [],
};

export const tableReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA: {
      let newArray = state.rows;
      return {
        ...state,
        rows: [...newArray, action.payload],
      };
    }

    case DELETE_DATA: {
      return {
        ...state,
        rows: state.rows.filter((row) => row.id !== action.payload),
      };
    }

    case EDIT_DATA: {
      return {
        ...state,
        rows: state.rows.map((book) =>
          book.id === action.payload.id ? action.payload : book
        ),
      };
    }

    default:
      return { ...state };
  }
};
