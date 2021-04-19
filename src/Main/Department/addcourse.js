import React, { Fragment, useState, useEffect } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Paper,
  FormControl,
  Grid,
  Button,
  TextField,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormGroup,
  Checkbox,
} from "@material-ui/core";

import { Link, Redirect } from "react-router-dom";

import axios from "axios";

import { connect } from "react-redux";
// import PropTypes from "prop-types";

import Header from "../Header/header";
import { addcourse } from "../Redux/Action/course";
//import {giveapplication} from "../Redux/Action/giveapplication"

const Addcourse = ({ addcourse }) => {
  // useEffect(() => {
  //     giveapplication();
  //   }, []);

  const [formdata, setformdata] = useState({
    Coursename: "",
    Coursecode: "",
    Credithour: "",
    Prerequisite: "",
  });

  const { Coursename, Coursecode, Credithour, Prerequisite } = formdata;

  const changer = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handlesubmit = async (event) => {
    event.preventDefault();
    let newprerequisite = Prerequisite.split(",");
    console.log("SUCCESS");
    //   console.log("the value of them respectively is " + Departmentname + Duration)

    addcourse(Coursename, Coursecode, Credithour, newprerequisite);
  };

  return (
    <Fragment>
      <h3 style={{ marginLeft: "45%", marginTop: 50, marginBottom: -90 }}>
        Add course
      </h3>

      <Paper
        elevation={10}
        style={{ height: 350, width: "50%", margin: "auto", marginTop: 100 }}
      >
        <FormControl style={{ marginLeft: 100, marginTop: 50 }}>
          <form onSubmit={(event) => handlesubmit(event)}>
            <TextField
              name="Coursename"
              label="Course name"
              onChange={(e) => changer(e)}
              value={Coursename}
            />
            <br></br> <br></br>
            <TextField
              name="Coursecode"
              label="Course code"
              value={Coursecode}
              onChange={(e) => changer(e)}
              style={{ marginLeft: 0 }}
            />
            <br></br> <br></br>
            <TextField
              name="Credithour"
              label="Credit Hour"
              value={Credithour}
              onChange={(e) => changer(e)}
              style={{ marginLeft: 0 }}
            />
            <br></br> <br></br>
            <TextField
              name="Prerequisite"
              label="Prerequisite Courses"
              value={Prerequisite}
              onChange={(e) => changer(e)}
              style={{ marginLeft: 0 }}
            />
            <Button
              color="primary"
              variant="contained"
              style={{ marginTop: 100, marginLeft: 0, width: 100 }}
            >
              <input type="submit" value="Add Course" />
            </Button>
            {/* <Link
                  to="/signup"
                  color="secondary"
                  style={{ marginTop: 0, marginLeft: 350 }}
                >
                  I don't have an account
                </Link> */}
          </form>
        </FormControl>
      </Paper>
    </Fragment>
  );
};
//export default addcourse;

// Registrar.propTypes = {
//     giveapplication: PropTypes.func.isRequired
//   };

const mapStateToProps = (state) => ({
  // studapplication: state.reducer.studapplication,
  // loading: state.reducer.loading,
  // loading: state.survey.loading
  // isauthenticated: state.authreducer.isauthenticated
});

export default connect(mapStateToProps, { addcourse })(Addcourse);
