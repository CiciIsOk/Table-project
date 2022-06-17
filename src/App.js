import React from "react";
import TreeContainer from "./Containers/TreeContainer";
import TableContainer from "./Containers/TableContainer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import { Provider } from "react-redux";
import store from "./store";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  link: {
    textDecoration: "none",
    color: "white",
    margin: "15px",
    lineHeight: 1,
  },

  appBar: {
    height: "65px",
    justifyContent: "center",
    background: "linear-gradient(5deg, #9966ff , #6600ff 90%)",
  },
});

function App() {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <Router>
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <Link className={classes.link} to="/">
              <Button style={{ color: "#FFFFFF" }}>Table</Button>
            </Link>

            <Link className={classes.link} to="/tree">
              {" "}
              <Button style={{ color: "#FFFFFF" }}>Tree</Button>
            </Link>
          </Toolbar>
        </AppBar>

        <Routes>
          <Route exact path="/" element={<TableContainer />} />
          <Route exact path="/tree" element={<TreeContainer />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
