import React from "react";
import Tree from "../Components/Tree/Tree";
import { connect } from "react-redux";
import { addTree } from "../redux/actions/TreeActions";
import { deleteTree } from "../redux/actions/TreeActions";
import { useState } from "react";
import { nanoid } from "nanoid";
import { useRef, forwardRef } from "react";

const TreeContainer = ({ tree, table, setDeleteTreeRows, setTreeRows }) => {
  const headerColumns = [
    {
      name: "title",
      title: "Book Title",
      type: "text",
    },
    {
      name: "author",
      title: "Author",
      type: "text",
    },
    {
      name: "pages",
      title: "Pages",
      type: "number",
    },
    {
      name: "genre",
      title: "Genre",
      type: "text",
    },
    {
      name: "date",
      title: "Publishing Date",
      type: "date",
    },
  ];

  //----------------ADD TREE ROW---------------//

  const [rowData, setRowData] = useState({
    id: "",
    title: "",
    author: "",
    pages: "",
    genre: "",
    date: "",
    parentId: 0,
  });

  const valueChange = (event) => {
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newTreeData = { ...rowData };
    newTreeData[fieldName] = fieldValue;

    setRowData(newTreeData);
  };

  const submit = () => {
    const newRow = {
      id: nanoid(),
      title: rowData.title,
      author: rowData.author,
      pages: rowData.pages,
      genre: rowData.genre,
      date: rowData.date,
      parentId: rowData.parentId,
    };

    setTreeRows(newRow);
    setRowData({
      id: "",
      title: "",
      author: "",
      pages: "",
      genre: "",
      date: "",
      parentId: 0,
    });
  };

  //---------------ADD CHILD ROW--------------//

  //focus on input Field
  const TextField = forwardRef((props, ref) => {
    return <TextField inputRef={ref} {...props} />;
  });
  const inputRef = useRef(null);

  const addChild = (id) => {
    setRowData({ ...rowData, parentId: id });
    inputRef.current?.focus();
  };

  //---------------INSERT TABLE DATA INTO INPUTS--------------//

  const handleChange = (event) => {
    const item = table.find((t) => t.id === event.target.value);

    setRowData(item);
  };

  //--------------REMOVE TREE ROW--------------//

  const removeRow = (rowId) => {
    setDeleteTreeRows(rowId);
  };

  return (
    <div>
      <Tree
        handleChange={handleChange}
        valueChange={valueChange}
        table={table}
        removeRow={removeRow}
        rowData={rowData}
        submit={submit}
        tree={tree}
        headerColumns={headerColumns}
        addChild={addChild}
        inputRef={inputRef}
      />
    </div>
  );
};

//---------------------------redux----------------------------//

const mapStateToProps = (state) => {
  return {
    table: state.table.rows,
    tree: state.tree.treeRows,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTreeRows: (row) => dispatch(addTree(row)),
    setDeleteTreeRows: (row) => dispatch(deleteTree(row)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TreeContainer);
