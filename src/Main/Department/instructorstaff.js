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
  CircularProgress,
} from "@material-ui/core";

import { Link } from "react-router-dom";

import axios from "axios";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import Headerdept from "../Header/headerdept";
import Addinstructor from "./addinstructor";
import { getinstructor } from "../Redux/Action/instructor";
import { loaduser } from "../Redux/Action/mainlogin";

import Footer from "../Footer/footer";

const Instructorstaff = ({
  getinstructor,
  instructors,
  loading,
  loaduser,
  user,
}) => {
  useEffect(() => {
    loaduser();
  }, []);

  const [addinstructor, setaddinstructor] = useState("none");
  const [displayinstructor, setdisplayinstructor] = useState("none");

  const handlestudent = () => {
    if (addinstructor == "block") {
      setaddinstructor("none");
      setdisplayinstructor("none");
    } else {
      setaddinstructor("block");
      setdisplayinstructor("none");
    }
  };

  const handleinstructor = () => {
    if (displayinstructor == "block") setdisplayinstructor("none");
    else {
      setaddinstructor("none");
      setdisplayinstructor("block");
      getinstructor();
    }
  };

  const addinstructorstyle = {
    display: addinstructor,
  };

  const displayinstructorstyle = {
    display: displayinstructor,
  };

  return (
    <Fragment>
      <Headerdept name={user !== null ? user.Departmentname : null} />

      <Button
        style={{ marginTop: 50, marginLeft: 100 }}
        variant="outlined"
        color="primary"
        onClick={handlestudent}
      >
        Add new instructor
      </Button>

      <Button
        style={{ marginTop: 50, marginLeft: 100 }}
        variant="outlined"
        color="primary"
        onClick={handleinstructor}
      >
        Show instructors
      </Button>

      <div style={addinstructorstyle}>
        <Addinstructor />
      </div>

      <div style={displayinstructorstyle}>
        <h3>This is the display instructor</h3>
        {loading ? (
          <CircularProgress
            disableShrink
            style={{ marginTop: 200, marginLeft: 500 }}
          />
        ) : instructors != null ? (
          <div>
            {instructors.map((item, idx) => {
              const age =
                new Date(Date.now()).getFullYear() -
                new Date(item.Birthdate).getFullYear();

              return (
                <Paper
                  key={idx}
                  elevation={5}
                  style={{ marginLeft: 200, width: "40%", padding: 50 }}
                >
                  <p>{idx + 1}</p>
                  <p> First Name :{item.Instructorfname}</p>
                  <p>Middle Name: {item.Instructormname}</p>
                  <p>Last Name : {item.Instructorlname}</p>
                  <p>Age: {age}</p>
                  <p>Sex: {item.Sex}</p>
                </Paper>
              );
            })}
          </div>
        ) : (
          <p>instructors are not loaded</p>
        )}
      </div>

      <Footer />
    </Fragment>
  );
};

Instructorstaff.propTypes = {
  // giveapplication: PropTypes.func.isRequired
  // instructors: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  // studapplication: state.reducer.studapplication,
  // loading: state.reducer.loading,

  // loading: state.survey.loading
  instructors: state.instructor.instructors,
  loading: state.instructor.loading,
  user: state.authreducer.user,
});

export default connect(mapStateToProps, { getinstructor, loaduser })(
  Instructorstaff
);

//export default Instructorstaff;
