import React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Form = ({ bookSubmit, bookChange, useStyles }) => {
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <TextField
        required
        name="title"
        label="Book Title"
        onChange={bookChange}
      />

      <TextField
        required
        name="author"
        label="Author's name"
        onChange={bookChange}
      />

      <TextField
        type="number"
        name="pages"
        label="Number of pages"
        onChange={bookChange}
      />

      <TextField name="genre" label="genre" onChange={bookChange} />

      <TextField type="date" name="date" onChange={bookChange} />

      <Button
        className={useStyles().button}
        type="submit"
        label="Book Title"
        variant="contained"
        onClick={bookSubmit}
      >
        Add
      </Button>
    </Stack>
  );
};

export default Form;
