import React from "react";
import MainTableRow from "./MainTableRow";
import EditTableRow from "./EditTableRow";
import Form from "./Form";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Fragment } from "react";
import { makeStyles } from "@mui/styles";

const MainTable = ({
  changeData,
  addTableData,
  editBookValues,
  SubmitEditedBook,
  bookSubmit,
  table,
  bookChange,
  removeBook,
  editBookId,
  editClick,
  cancelClick,
}) => {
  const useStyles = makeStyles({
    button: {
      color: "white",
      margin: "10px",
      lineHeight: 1,
      background: "linear-gradient(20deg, #9966ff , #6600ff 90%)",
    },
  });

  return (
    <Grid container spacing={3}>
      <Grid item xs={7}>
        <TableContainer>
          <Table
            sx={{ maxWidth: 14 / 15, ml: 3, mt: 1 }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell>Book Title</TableCell>
                <TableCell>Author</TableCell>
                <TableCell>Pages</TableCell>
                <TableCell>Genre</TableCell>
                <TableCell>Publishing Date</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {table &&
                table.map((book) => (
                  <Fragment>
                    {editBookId === book.id ? (
                      <EditTableRow
                        key={book.id}
                        cancelClick={cancelClick}
                        changeData={changeData}
                        editBookValues={editBookValues}
                        SubmitEditedBook={SubmitEditedBook}
                        editClick={editClick}
                        useStyles={useStyles}
                      />
                    ) : (
                      <MainTableRow
                        removeBook={removeBook}
                        key={book.id}
                        book={book}
                        editClick={editClick}
                        useStyles={useStyles}
                      />
                    )}
                  </Fragment>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>

      <Grid item xs={4}>
        <br />
        <Typography variant="h5"> Add New Book:</Typography>
        <br />
        <Form
          addTableData={addTableData}
          bookSubmit={bookSubmit}
          bookChange={bookChange}
          useStyles={useStyles}
        />
      </Grid>
    </Grid>
  );
};

export default MainTable;
