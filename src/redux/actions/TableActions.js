import * as types from "../constants/tableConstants";

export const addData = (data) => {
  return {
    type: types.ADD_DATA,
    payload: data,
  };
};

export const editData = (data) => ({
  type: types.EDIT_DATA,
  payload: data,
});

export const deleteData = (data) => ({
  type: types.DELETE_DATA,
  payload: data,
});
