import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import Stack from "@mui/material/Stack";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const MainTableRow = ({ book, removeBook, editClick, useStyles }) => {
  return (
    <TableRow>
      <TableCell>{book.title}</TableCell>
      <TableCell>{book.author}</TableCell>
      <TableCell>{book.pages}</TableCell>
      <TableCell>{book.genre}</TableCell>
      <TableCell>{book.date}</TableCell>
      <TableCell>
        <Stack spacing={1} sx={{ width: "50%" }}>
          <Button
            className={useStyles().button}
            variant="contained"
            onClick={(event) => editClick(event, book)}
          >
            <ModeEditOutlinedIcon />
          </Button>

          <Button
            className={useStyles().button}
            variant="contained"
            onClick={() => removeBook(book.id)}
          >
            <DeleteIcon />
          </Button>
        </Stack>
      </TableCell>
    </TableRow>
  );
};

export default MainTableRow;
