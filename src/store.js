import { tableReducers } from "./redux/reducers/TableReducer";
import { treeReducers } from "./redux/reducers/TreeReducer";
import { createStore } from "redux";
import { combineReducers } from "redux";

export default createStore(
  combineReducers({
    table: tableReducers,
    tree: treeReducers,
  })
);
