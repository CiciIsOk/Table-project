import React from "react";
import MainTable from "../Components/Table/MainTable";
import { nanoid } from "nanoid";
import { useState } from "react";
import { connect } from "react-redux";
import { addData } from "../redux/actions/TableActions";
import { editData } from "../redux/actions/TableActions";
import { deleteData } from "../redux/actions/TableActions";

const TableContainer = ({
  table,
  setTableRows,
  setEditTableRows,
  setDeleteTableRows,
}) => {
  ///----------------------STATES----------------------///

  const [addTableData, setAddTableData] = useState({
    title: "",
    author: "",
    pages: "",
    genre: "",
    date: "",
    parentId: 0,
  });

  const [changeData, setChangedData] = useState({
    title: "",
    author: "",
    pages: "",
    genre: "",
    date: "",
    parentId: 0,
  });

  const [editBookId, setEditedBookId] = useState(null);

  ///---------------------ADDING NEW ROW-----------------------------///

  const bookChange = (event) => {
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newTableData = { ...addTableData };
    newTableData[fieldName] = fieldValue;

    setAddTableData(newTableData);
  };

  const bookSubmit = () => {
    const newBook = {
      id: nanoid(),
      title: addTableData.title,
      author: addTableData.author,
      pages: addTableData.pages,
      genre: addTableData.genre,
      date: addTableData.date,
      parentId: 0,
    };

    if (newBook.title === "") {
      alert("Book's Title  Cant be empty");
    } else {
      setTableRows(newBook);
    }
  };

  ///---------------------REMOVE ROW---------------------///

  const removeBook = (bookId) => {
    setDeleteTableRows(bookId);
  };
  ///---------------------UPDATE ROW---------------------///

  //handling the edit click:

  const editClick = (event, book) => {
    setEditedBookId(book.id);

    event.preventDefault();

    const bookValues = {
      title: book.title,
      author: book.author,
      pages: book.pages,
      genre: book.genre,
      date: book.date,
    };

    setChangedData(bookValues);
  };

  const editBookValues = (event) => {
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newTableData = { ...changeData };
    newTableData[fieldName] = fieldValue;

    setChangedData(newTableData);
  };

  // submiting edited book:

  const SubmitEditedBook = () => {
    const editedBook = {
      id: editBookId,
      title: changeData.title,
      author: changeData.author,
      pages: changeData.pages,
      genre: changeData.genre,
      date: changeData.date,
      parentId: 0,
    };

    setEditTableRows(editedBook);
    setEditedBookId(null);
  };

  //handling the cancle click:
  const cancelClick = () => {
    setEditedBookId(null);
  };

  //----------------------------------------------------------------------------------------//

  return (
    <MainTable
      bookChange={bookChange}
      bookSubmit={bookSubmit}
      table={table}
      removeBook={removeBook}
      editBookId={editBookId}
      editClick={editClick}
      cancelClick={cancelClick}
      editBookValues={editBookValues}
      addTableData={addTableData}
      SubmitEditedBook={SubmitEditedBook}
      changeData={changeData}
    />
  );
};

//----------------------------------------------------------------------------------------//

const mapStateToProps = (state) => {
  return {
    table: state.table.rows,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTableRows: (data) => dispatch(addData(data)),
    setEditTableRows: (data) => dispatch(editData(data)),
    setDeleteTableRows: (data) => dispatch(deleteData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableContainer);
