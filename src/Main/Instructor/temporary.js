{instructorstudents.length !== 0
  ? instructorstudents.map((item, idx) => {
      return studentscourseregistered.length !== 0
        ? studentscourseregistered.map((item2, idx2) => {
            if (
              item.Applicationid === item2.Studentid &&
              item2.Courses.includes(tempjob)
            )
              return (
                <tbody key={idx}>
                  <tr>
                    {/* <td>{idx + 1}</td> */}
                    <td>{item.Firstname}</td>
                    <td>{item.Middlename}</td>
                    <td>{item.Lastname}</td>
                    <td>{item.Sex}</td>
                    <td>
                      <label htmlFor="Grade">Add grade:</label>
                      <select
                        name="Grade"
                        id="Grade"
                        onChange={(e) => changer(e)}
                      >
                        <option value=""></option>
                        <option value="A+">A+</option>
                        <option value="A">A</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B">B</option>
                        <option value="B-">B-</option>
                        <option value="C+">C+</option>
                        <option value="C">C</option>
                        <option value="C-">C-</option>
                        <option value="D">D</option>
                        <option value="F">F</option>
                        <option value="N.G.">N.G.</option>
                      </select>
                    </td>

                    <td>
                      <Button
                        color="primary"
                        variant="contained"
                        // style={{
                        //   marginTop: 100,
                        //   marginLeft: 0,
                        //   width: 200,
                        // }}

                        // disabled={Grade === ""}
                        onClick={() =>
                          handlesetgrade(
                            item2.Studentid,
                            item2.Year,
                            item2.Semister,
                            item2.Section,
                            tempjob,
                            Grade
                          )
                        }
                      >
                        Add Grade
                      </Button>
                    </td>
                  </tr>
                </tbody>
              );
          })
        : null;
    })
  : null}



/////////////////////////////////////////////////////////////////////////////////////////////////

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
import PropTypes from "prop-types";

import Header from "../Header/header";
import Footer from "../Footer/footer";
//import {giveapplication} from "../Redux/Action/giveapplication"
import { loaduserinstructor } from "../Redux/Action/authinstructor";
import { getinstructorstudentgrade } from "../Redux/Action/instructorjob";
import { setgrade } from "../Redux/Action/instructorjob";

const Instructorgrade = ({
  isauthenticated,
  loaduserinstructor,
  user,
  getinstructorstudentgrade,
  instructorstudents,
  studentscourseregistered,
  tempjob,
  setgrade,
  instructorassessment,
}) => {
  useEffect(() => {
    loaduserinstructor();
  }, []);

  //   const [job, setjob] = useState("none");

  //   const handlejob = (id) => {
  //     if (job === "none") {
  //       setjob("block");
  //       getinstructorjob(id);
  //     } else {
  //       setjob("none");
  //     }
  //   };

  const [formdata, setformdata] = useState({
    Grade: "",
  });

  const { Grade } = formdata;

  const changer = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handlesetgrade = (
    Studentid,
    Year,
    Semister,
    Section,
    Course,
    Grade
  ) => {
    console.log("inside of handlesetgrade method!");
    setgrade(Studentid, Year, Semister, Section, Course, Grade);
    setformdata({ ...formdata, Grade: "" });
  };

  if (!isauthenticated) {
    return <Redirect to="/logininstructor" />;
  }

  return (
    <Fragment>
      <Header name={user !== null ? user.Instructorfname : null} />

      {/* <Button
        style={{ marginTop: 50, marginLeft: 100 }}
        variant="outlined"
        color="primary"
        // onClick={() => handlejob(user._id)}
      >
        gradeeee
      </Button> */}

      <div>
        <strong>
          <p style={{ marginLeft: 50, color: "green", fontSize: 24 }}>
            Course Name : {tempjob}
          </p>
        </strong>

        <table border="3" cellSpacing="1" cellPadding="20">
          <thead style={{ marginRight: 50 }}>
            <tr>
              {/* <th>No.</th> */}
              <th>Full Name</th>
              {/* <th>Middle Name</th>
              <th>Last Name</th> 
              <th>Sex</th>*/}
              {instructorassessment.map((item, idx) => {
                var keys = [];
                for (var k in item) keys.push(k);

                let quizlen = item.Quiz.length;
                let assignmentlen = item.Assignment.length;
                let projectlen = item.Project.length;
                let attendancelen = item.Attendance.length;

                return (
                  <Fragment>
                    {item.Quiz.length === 1 ? (
                      <th>Quiz / {item.Quiz} % </th>
                    ) : (
                      item.Quiz.map((itemq, idxq) => {
                        return (
                          <th>
                            Quiz {idxq + 1} / {itemq} %{" "}
                          </th>
                        );
                      })
                    )}

                    {item.Assignment.length === 1 ? (
                      <th>Assignment / {item.Assignment} % </th>
                    ) : (
                      item.Assignment.map((itemass, ass) => {
                        return (
                          <th>
                            Assignment {ass + 1} / {itemass} %{" "}
                          </th>
                        );
                      })
                    )}

                    {item.Project.length === 1 ? (
                      <th>Project / {item.Project} % </th>
                    ) : (
                      item.Project.map((itempro, idxpro) => {
                        return (
                          <th>
                            Project {idxpro + 1} / {itempro} %{" "}
                          </th>
                        );
                      })
                    )}

                    {item.Attendance.length === 1 ? (
                      <th>Attendance / {item.Attendance} % </th>
                    ) : (
                      item.Attendance.map((itematt, idxatt) => {
                        return (
                          <th>
                            Attendance {idxatt + 1} / {itematt} %{" "}
                          </th>
                        );
                      })
                    )}

                    <th>Final / {item.Final} % </th>
                  </Fragment>
                );
              })}
              <th>Grade</th>
              <th>Update</th>

              {/* <th>Add grade</th> */}
            </tr>
          </thead>

          {instructorstudents.length !== 0
            ? instructorstudents.map((item, idx) => {
                return studentscourseregistered.length !== 0
                  ? studentscourseregistered.map((item2, idx2) => {
                      if (
                        item.Applicationid === item2.Studentid &&
                        item2.Courses.includes(tempjob)
                      )
                        return (
                          <tbody key={idx}>
                            <tr>
                              {/* <td>{idx + 1}</td> */}
                              <td>
                                {item.Firstname} {item.Middlename}{" "}
                                {item.Lastname}
                              </td>
                              <td>
                                {" "}
                                <TextField
                                  name="Quiz"
                                  // label="Quiz"
                                  // onChange={(e) => changer(e)}
                                  // value={Quiz}
                                />
                              </td>
                              <td>
                                {" "}
                                <TextField
                                  name="Quiz"
                                  // label="Quiz"
                                  // onChange={(e) => changer(e)}
                                  // value={Quiz}
                                />
                              </td>
                              <td>
                                {" "}
                                <TextField
                                  name="Quiz"
                                  // label="Quiz"
                                  // onChange={(e) => changer(e)}
                                  // value={Quiz}
                                />
                              </td>
                              <td>
                                {" "}
                                <TextField
                                  name="Quiz"
                                  // label="Quiz"
                                  // onChange={(e) => changer(e)}
                                  // value={Quiz}
                                />
                              </td>
                              <td>
                                {" "}
                                <TextField
                                  name="Quiz"
                                  // label="Quiz"
                                  // onChange={(e) => changer(e)}
                                  // value={Quiz}
                                />
                              </td>

                              <td>
                                {" "}
                                <TextField
                                  name="Quiz"
                                  // label="Quiz"
                                  // onChange={(e) => changer(e)}
                                  // value={Quiz}
                                />
                              </td>

                              <td>
                                {" "}
                                <TextField
                                  name="Quiz"
                                  // label="Quiz"
                                  // onChange={(e) => changer(e)}
                                  // value={Quiz}
                                />
                              </td>

                              <td>
                                {" "}
                                <TextField
                                  name="Quiz"
                                  // label="Quiz"
                                  // onChange={(e) => changer(e)}
                                  // value={Quiz}
                                />
                              </td>

                              {/* <td>
                                <label htmlFor="Grade">Add grade:</label>
                                <select
                                  name="Grade"
                                  id="Grade"
                                  onChange={(e) => changer(e)}
                                >
                                  <option value=""></option>
                                  <option value="A+">A+</option>
                                  <option value="A">A</option>
                                  <option value="A-">A-</option>
                                  <option value="B+">B+</option>
                                  <option value="B">B</option>
                                  <option value="B-">B-</option>
                                  <option value="C+">C+</option>
                                  <option value="C">C</option>
                                  <option value="C-">C-</option>
                                  <option value="D">D</option>
                                  <option value="F">F</option>
                                  <option value="N.G.">N.G.</option>
                                </select>
                              </td> */}

                              <td>
                                <Button
                                  color="primary"
                                  variant="contained"
                                  // style={{
                                  //   marginTop: 100,
                                  //   marginLeft: 0,
                                  //   width: 200,
                                  // }}

                                  // disabled={Grade === ""}
                                  onClick={() =>
                                    handlesetgrade(
                                      item2.Studentid,
                                      item2.Year,
                                      item2.Semister,
                                      item2.Section,
                                      tempjob,
                                      Grade
                                    )
                                  }
                                >
                                  Update
                                </Button>
                              </td>
                            </tr>
                          </tbody>
                        );
                    })
                  : null;
              })
            : null}
        </table>
      </div>

      <Footer />
    </Fragment>
  );
};

// Registrar.propTypes = {
//     giveapplication: PropTypes.func.isRequired
//   };

const mapStateToProps = (state) => ({
  // studapplication: state.reducer.studapplication,
  // loading: state.reducer.loading,

  // loading: state.survey.loading
  user: state.authreducer.user,
  isauthenticated: state.authreducer.isauthenticated,
  instructorstudents: state.students.instructorstudents,
  studentscourseregistered: state.students.studentscourseregistered,
  tempjob: state.instructor.tempjob,
  instructorassessment: state.instructor.instructorassessment,
});

export default connect(mapStateToProps, {
  loaduserinstructor,
  getinstructorstudentgrade,
  setgrade,
})(Instructorgrade);

//export default Instructorgrade;
