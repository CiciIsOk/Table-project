import React from "react";
import Button from "@mui/material/Button";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";

const EditTableRow = ({
  SubmitEditedBook,
  changeData,
  cancelClick,
  editBookValues,
  useStyles,
}) => {
  return (
    <TableRow>
      <TableCell>
        <TextField
          type="text"
          name="title"
          value={changeData.title}
          placeholder="Book Title"
          onChange={editBookValues}
        />
      </TableCell>
      <TableCell>
        <TextField
          type="text"
          name="author"
          value={changeData.author}
          placeholder="Author..."
          onChange={editBookValues}
        />
      </TableCell>
      <TableCell>
        <TextField
          type="number"
          name="pages"
          value={changeData.pages}
          placeholder="Pages"
          onChange={editBookValues}
        />
      </TableCell>
      <TableCell>
        <TextField
          name="genre"
          value={changeData.genre}
          label="Genre"
          onChange={editBookValues}
        />
      </TableCell>
      <TableCell>
        <TextField
          type="date"
          name="date"
          value={changeData.date}
          placeholder="Publishig Year"
          onChange={editBookValues}
        />
      </TableCell>

      <Button
        className={useStyles().button}
        type="Submit"
        variant="contained"
        onClick={SubmitEditedBook}
        sx={{ width: "60%" }}
      >
        <SaveOutlinedIcon />
      </Button>

      <Button
        className={useStyles().button}
        type="Button"
        variant="contained"
        onClick={cancelClick}
        sx={{ width: "60%" }}
      >
        Cancle
      </Button>
    </TableRow>
  );
};

export default EditTableRow;
