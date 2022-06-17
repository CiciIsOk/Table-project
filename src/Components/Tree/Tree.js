import React from "react";
import TreeForm from "./TreeForm";
import Grid from "@mui/material/Grid";
import { Stack, Table, TableBody, TableHead } from "@mui/material";
import TreeHead from "./TreeHead";
import Row from "./Row";
import { TreeView } from "@mui/lab";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { makeStyles } from "@mui/styles";

const Tree = ({
  submitChild,
  inputRef,
  addChild,
  tree,
  submit,
  rowData,
  valueChange,
  removeRow,
  table,
  parent,
  setParent,
  handleChange,
  headerColumns,
}) => {
  const UseStyles = makeStyles({
    Button: {
      color: "white",
      margin: "10px",
      lineHeight: 1,
      background: "linear-gradient(20deg, #9966ff , #6600ff 90%)",
    },
    Row: {
      display: "grid",
      gridTemplateColumns: `repeat(7, 1fr)`,
      columnGap: "5px",
      rowGap: "5px",
      margin: "5px",
      justifyContent: "center",
    },
  });

  return (
    <Grid container spacing={3}>
      <Grid item xs={7}>
        <Table>
          <TableHead>
            <TreeHead UseStyles={UseStyles} headerColumns={headerColumns} />
          </TableHead>
          <TableBody>
            <TreeView
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ChevronRightIcon />}
            >
              {tree
                .filter((item) => item.parentId === 0)
                .map((item) => (
                  <Row
                    key={item.title}
                    UseStyles={UseStyles}
                    inputRef={inputRef}
                    item={item}
                    headerColumns={headerColumns}
                    tree={tree}
                    removeRow={removeRow}
                    addChild={addChild}
                  />
                ))}
            </TreeView>
          </TableBody>
        </Table>
      </Grid>

      <Grid item xs={4}>
        <Stack spacing={2}>
          <br />

          <TreeForm
            UseStyles={UseStyles}
            submitChild={submitChild}
            inputRef={inputRef}
            table={table}
            parent={parent}
            setParent={setParent}
            handleChange={handleChange}
            valueChange={valueChange}
            rowData={rowData}
            submit={submit}
          />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Tree;
