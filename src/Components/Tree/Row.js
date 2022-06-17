import { TreeItem } from "@mui/lab";
import Button from "@mui/material/Button";
import { Fragment } from "react";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Add from "@mui/icons-material/Add";
import TableCell from "@mui/material/TableCell";
import { Box } from "@mui/system";

const Row = ({ UseStyles, addChild, removeRow, headerColumns, tree, item }) => {
  console.log(item);

  return (
    <>
      {item && (
        <TreeItem
          sx={{ mx: 1 }}
          nodeId={`${item.id}`}
          label={
            <Fragment>
              <Box className={UseStyles().Row}>
                {headerColumns.map((cell) => (
                  <TableCell key={cell.name}>{item[cell.name]}</TableCell>
                ))}
                <TableCell>
                  <Button
                    className={UseStyles().Button}
                    variant="contained"
                    onClick={() => removeRow(item.id)}
                  >
                    <DeleteIcon />
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    className={UseStyles().Button}
                    onClick={() => addChild(item.id)}
                    variant="contained"
                  >
                    <Add />
                  </Button>
                </TableCell>
              </Box>
            </Fragment>
          }
        >
          {tree
            .filter((row) => row.parentId === item.id)
            .map((row) => (
              <Row
                key={item.title}
                UseStyles={UseStyles}
                addChild={addChild}
                item={row}
                headerColumns={headerColumns}
                tree={tree}
                removeRow={removeRow}
              />
            ))}
        </TreeItem>
      )}
    </>
  );
};

export default Row;
