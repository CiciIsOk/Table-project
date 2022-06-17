import { ADD_TREE } from "../constants/treeConstants";
import { DELETE_TREE } from "../constants/treeConstants";

const initialState = {
  treeRows: [],
};

export const treeReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TREE: {
      let newTreeArray = state.treeRows;
      return {
        ...state,
        treeRows: [...newTreeArray, action.payload],
      };
    }

    case DELETE_TREE: {
      return {
        ...state,
        treeRows: state.treeRows.filter((row) => row.id !== action.payload),
      };
    }

    default:
      return state;
  }
};
