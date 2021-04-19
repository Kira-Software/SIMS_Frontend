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
import Addcourse from "./addcourse";
import Assigncourse from "./assigncourse";
import { getcourses } from "../Redux/Action/course";
import { loaduser } from "../Redux/Action/mainlogin";
import { getassignedcourses } from "../Redux/Action/assigncourses";

import Footer from "../Footer/footer"

const Coursestaff = ({
  getcourses,
  courses,
  loading,
  loaduser,
  getassignedcourses,
  assignedcourses,
  user,
}) => {
  useEffect(() => {
    loaduser();
  }, []);

  const [addcourse, setaddcourse] = useState("none");
  const [displaycourse, setdisplaycourse] = useState("none");
  const [assigncourse, setassigncourse] = useState("none");
  const [showassigned, setshowassigned] = useState("none");

  const handleaddcourse = () => {
    if (addcourse == "none") {
      setaddcourse("block");
      setdisplaycourse("none");
      setassigncourse("none");
      setshowassigned("none");
    } else {
      setaddcourse("none");
      // setdisplaycourse("none")
    }
  };

  const handledisplaycourse = () => {
    if (displaycourse == "none") {
      getcourses();
      setdisplaycourse("block");
      setaddcourse("none");
      setassigncourse("none");
      setshowassigned("none");
    } else {
      setdisplaycourse("none");
    }
  };

  const handleassigncourse = () => {
    if (assigncourse == "none") {
      // getcourses()
      setassigncourse("block");
      setaddcourse("none");
      setdisplaycourse("none");
      setshowassigned("none");
    } else {
      setassigncourse("none");
    }
  };

  const handleassigned = () => {
    if (showassigned == "none") {
      getassignedcourses();
      setshowassigned("block");
      setassigncourse("none");
      setaddcourse("none");
      setdisplaycourse("none");
    } else {
      setshowassigned("none");
    }
  };

  ////////////////style display of the blocks
  const addcoursestyle = {
    display: addcourse,
  };

  const displaycoursestyle = {
    display: displaycourse,
  };

  const assigncoursestyle = {
    display: assigncourse,
  };

  const assignedcoursestyle = {
    display: showassigned,
  };

  /////////////////getting the selected values into an array

  // let data = null;
  // if (user != null) {
  //   data = Object.values(user);
  // }
  // let newarr = [];

  return (
    <Fragment>
      <Headerdept name={user !== null ? user.Departmentname : null} />

      <Button
        style={{ marginTop: 50, marginLeft: 100 }}
        variant="outlined"
        color="primary"
        onClick={handleaddcourse}
      >
        Add new course
      </Button>

      <Button
        style={{ marginTop: 50, marginLeft: 100 }}
        variant="outlined"
        color="primary"
        onClick={handledisplaycourse}
      >
        Show courses
      </Button>

      <Button
        style={{ marginTop: 50, marginLeft: 100 }}
        variant="outlined"
        color="primary"
        onClick={handleassigncourse}
      >
        Assign courses
      </Button>

      <Button
        style={{ marginTop: 50, marginLeft: 100 }}
        variant="outlined"
        color="primary"
        onClick={handleassigned}
      >
        Show Assigned courses
      </Button>
      {/* 
               <Button
                variant="contained"
                color="secondary"
                style={{ marginLeft: 60 }}
                onClick={handleassigncourse}
              >
                Assign Courses
                    </Button>  */}

      <div style={addcoursestyle}>
        <Addcourse />
      </div>

      <div style={displaycoursestyle}>
        <h3>This is the display course</h3>

        {loading ? (
          <CircularProgress
            disableShrink
            style={{ marginTop: 200, marginLeft: 500 }}
          />
        ) : courses != null ? (
          <div>
            {courses.map((item, idx) => {
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
                  <p> Course Name :{item.Coursename}</p>
                  <p>Course Code: {item.Coursecode}</p>
                  <p>Credithour : {item.Credithour}</p>
                </Paper>
              );
            })}
          </div>
        ) : (
          <p>courses are not loaded</p>
        )}
      </div>

      <div style={assigncoursestyle}>
        <Assigncourse />
      </div>

      <div style={assignedcoursestyle}>
        <p>this is the show assigned block</p>

        <div style={{ marginLeft: 100, marginBottom: 200 }}>
          <table border="3" cellSpacing="5" cellPadding="20">
            <thead style={{ marginRight: 50 }}>
              <tr>
                <th>Department</th>
                <th>Year</th>
                <th>Semister</th>
                <th>Courses</th>

                {/*  <th>Sex</th>
                      <th>Email Address</th> */}
              </tr>
            </thead>
            {assignedcourses.length == 0 ? (
              <tbody>
                <tr>
                  <td colSpan="6" style={{ color: "red" }}>
                    There are no records
                  </td>
                </tr>
              </tbody>
            ) : null}

            {assignedcourses.map((item, idx) => {
              return (
                <tbody key={idx}>
                  {/* <tr>
                          <td>{item.Department}</td>
                          <td>{item.Year}</td>
                          <td>{item.Semister}</td>
                        </tr>   */}
                  {item.Courses.map((item2, idx) => {
                    return (
                      <tr>
                        <td>{item.Department}</td>
                        <td>{item.Year}</td>
                        <td>{item.Semister}</td>
                        <td>{item2}</td>
                      </tr>
                    );
                  })}

                  {/* <td>{item.Lastname}</td>
                          <td>{item.Sex}</td>
                          <td>{item.Email}</td> */}
                </tbody>
              );
            })}
          </table>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

// coursestaff.propTypes = {
//     giveapplication: PropTypes.func.isRequired
//   };

const mapStateToProps = (state) => ({
  // studapplication: state.reducer.studapplication,
  // loading: state.reducer.loading,

  // loading: state.survey.loading
  courses: state.course.courses,
  loading: state.course.loading,
  assignedcourses: state.course.assignedcourses,
  user: state.authreducer.user,
});

export default connect(mapStateToProps, {
  getcourses,
  loaduser,
  getassignedcourses,
})(Coursestaff);

//export default Coursestaff;
