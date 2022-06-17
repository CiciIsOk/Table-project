import React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const TreeForm = ({
  UseStyles,
  inputRef,
  submit,
  rowData,
  table,
  handleChange,
  valueChange,
}) => {
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <FormControl>
        <InputLabel>Grid Row</InputLabel>
        <Select
          value={rowData["id"]}
          label="Grid Row"
          onChange={(event) => {
            handleChange(event);
          }}
        >
          {table.map((row) => (
            <MenuItem key={row.id} value={row.id}>
              {row.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        inputRef={inputRef}
        required
        name="title"
        label="Book Title"
        onChange={(event) => valueChange(event)}
        value={rowData.title}
      />

      <TextField
        required
        name="author"
        label="Author's name"
        onChange={(event) => valueChange(event)}
        value={rowData.author}
      />

      <TextField
        type="number"
        name="pages"
        label="Number of pages"
        onChange={(event) => valueChange(event)}
        value={rowData.pages}
      />

      <TextField
        name="genre"
        label="genre"
        onChange={(event) => valueChange(event)}
        value={rowData.genre}
      />

      <TextField
        type="date"
        name="date"
        onChange={(event) => valueChange(event)}
        value={rowData.date}
      />

      <Button
        className={UseStyles().Button}
        type="submit"
        label="Book Title"
        variant="contained"
        onClick={(event) => submit(event)}
      >
        Add
      </Button>
    </Stack>
  );
};

export default TreeForm;
