import * as types from "../constants/treeConstants";

export const addTree = (row) => {
  return {
    type: types.ADD_TREE,
    payload: row,
  };
};

export const deleteTree = (row) => ({
  type: types.DELETE_TREE,
  payload: row,
});
