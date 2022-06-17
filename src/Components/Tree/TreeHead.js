import React from "react";
import { TreeItem } from "@mui/lab";
import { Fragment } from "react";
import { TableCell } from "@mui/material";
import { Box } from "@mui/system";

const TreeHead = ({ UseStyles, headerColumns }) => {
  return (
    <TreeItem
      nodeId="0"
      label={
        <Fragment>
          <Box className={UseStyles().Row}>
            {headerColumns.map((cell) => (
              <TableCell key={cell.name}>{cell.title}</TableCell>
            ))}
            <TableCell>Action</TableCell>
            <TableCell>Add Child</TableCell>
          </Box>
        </Fragment>
      }
    />
  );
};

export default TreeHead;
