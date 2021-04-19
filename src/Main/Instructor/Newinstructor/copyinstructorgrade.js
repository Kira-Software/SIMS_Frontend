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
import { setmark, getmark } from "../Redux/Action/instructorassessment";

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
  setmark,
  getmark,
  instructormark,
  loading,
}) => {
  useEffect(() => {
    loaduserinstructor();
  }, []);

  const [buttonname, setbuttonname] = useState("Edit");

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

  const handlebutton = (Year, Semister, Section, Coursename) => {
    setmark(Year, Semister, Section, Coursename, assessment);
    // if (buttonname === "Edit") {
    //   setbuttonname("Save");
    // } else {
    //   setbuttonname("Edit");
    // }
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
    // console.log("the value of Grade before changing is ", Grade);

    // if (Grade >= 90) Grade = "A+";
    // else if (Grade >= 85) Grade = "A";
    // else if (Grade >= 80) Grade = "A-";
    // else if (Grade >= 75) Grade = "B+";
    // else if (Grade >= 70) Grade = "B";
    // else if (Grade >= 65) Grade = "B-";
    // else if (Grade >= 60) Grade = "C+";
    // else if (Grade >= 50) Grade = "C";
    // else if (Grade >= 45) Grade = "C-";
    // else if (Grade >= 40) Grade = "D";
    // else if (Grade < 40) Grade = "F";

    setgrade(Studentid, Year, Semister, Section, Course, Grade);
    setformdata({ ...formdata, Grade: "" });
  };

  let [assessment, setassessment] = React.useState([[]]);

  let totals = [];

  const handlemarkchange = (e, Applicationid) => {
    console.log("the text field name is ", e.target.name);
    console.log("application id value is ", Applicationid);

    let kvalues = Object.keys(instructorassessment);
    console.log("the value of kvalues is " + kvalues);

    if (assessment.length < instructorstudents.length) {
      let x = instructorstudents.length - assessment.length;
      for (let i = 0; i < x - 1; i++) {
        let temp = assessment;
        temp.push([]);
        setassessment(temp);
      }
    }

    let i = null;
    let j = null;
    for (i = 0; i < instructorstudents.length; i++) {
      for (j = 0; j < 8; j++) {
        //console.log(`questions${i}${j}`);
        if (e.target.name === `${Applicationid}${i}${j}`) {
          let temp = e.target.value;
          // let obj = {
          //   kvalues: temp
          // }
          assessment[i][j] = temp;

          assessment[i][8] = Applicationid;
        }
      }
      // assessment[i][8] = Applicationid
    }
    console.log("the assessment value while change is ", assessment);
  };

  // const changer = (e) => {
  //   setformdata({ ...formdata, [e.target.name]: e.target.value });
  // };

  if (!isauthenticated) {
    return <Redirect to="/logininstructor" />;
  }

  const tableinput = {
    width: 50,
  };
  let temparr = ["", "", "", "", "", "", ""];
  let temparr2 = [];

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
      {/* 
      {instructormark.map((data, dataidx) => {
        data.Assessment.map((individual, individualidx) => {
          individual.map((mark, markidx) => {
            assessment[(individualidx, markidx)] = mark;
          });
          console.log("the value of assessment is" + assessment);
        });
      })} */}

      <div>
        <strong>
          <p
            style={{
              marginLeft: 50,
              color: "green",
              fontSize: 24,
              marginTop: 100,
            }}
          >
            Course Name : {tempjob}
          </p>
        </strong>

        <div className="card" style={{ marginTop: 50 }}>
          <h3 className="card-header text-center font-weight-bold text-uppercase py-4">
            Student Mark Entry
          </h3>
          <div className="card-body">
            <div id="table" className="table-editable">
              <span className="table-add float-right mb-3 mr-2">
                <a href="#!" className="text-success">
                  <i className="fas fa-plus fa-2x" aria-hidden="true"></i>
                </a>
              </span>
              <table className="table table-bordered table-responsive-md table-striped text-center">
                <thead>
                  <tr>
                    <th className="text-center">First Name</th>
                    <th className="text-center">Middle Name</th>
                    <th className="text-center">Last Name</th>
                    <th className="text-center">Sex</th>
                    {instructorassessment.map((item, idx) => {
                      let plusidx = 0;
                      return (
                        <Fragment key={idx}>
                          {item.Quiz.length !== 0
                            ? item.Quiz.map((item2, idx2) => {
                                temparr.pop();
                                temparr2.push("");

                                return (
                                  <th className="text-center" key={idx2}>
                                    Quiz {idx2 + 1} {item2} %
                                  </th>
                                );
                              })
                            : null}

                          {item.Assignment.length !== 0
                            ? item.Assignment.map((item2, idx2) => {
                                temparr.pop();
                                temparr2.push("");

                                return (
                                  <th className="text-center" key={idx2}>
                                    Assignment {idx2 + 1} {item2} %
                                  </th>
                                );
                              })
                            : null}

                          {item.Project.length !== 0
                            ? item.Project.map((item2, idx2) => {
                                temparr.pop();
                                temparr2.push("");

                                return (
                                  <th className="text-center" key={idx2}>
                                    Project {idx2 + 1} {item2} %
                                  </th>
                                );
                              })
                            : null}

                          {item.Attendance.length !== 0
                            ? item.Attendance.map((item2, idx2) => {
                                temparr.pop();
                                temparr2.push("");

                                return (
                                  <th className="text-center" key={idx2}>
                                    Attendance {item2} %
                                  </th>
                                );
                              })
                            : null}
                        </Fragment>
                      );
                    })}

                    {temparr.length !== 0
                      ? temparr.map((it, id) => {
                          return (
                            <th className="text-center" key={id}>
                              Assessment {id}
                            </th>
                          );
                        })
                      : null}

                    <th className="text-center">Final 50%</th>
                    <th className="text-center">Total 100%</th>
                    <th className="text-center">Grade</th>

                    <th className="text-center">Edit/Save</th>
                  </tr>
                </thead>

                {instructorstudents.length !== 0
                  ? instructorstudents.map((item, idx) => {
                      return studentscourseregistered.length !== 0
                        ? studentscourseregistered.map((item2, idx2) => {
                            if (
                              item.Applicationid === item2.Studentid &&
                              item2.Courses.includes(tempjob)
                            ) {
                              return (
                                <tbody key={idx2}>
                                  <tr>
                                    {/* <td>{idx + 1}</td> */}
                                    <td className="text-center">
                                      {item.Firstname}
                                    </td>
                                    <td className="text-center">
                                      {item.Middlename}
                                    </td>
                                    <td className="text-center">
                                      {item.Lastname}
                                    </td>
                                    <td className="text-center">{item.Sex}</td>

                                    {loading
                                      ? null
                                      : instructormark.map(
                                          (data, dataindex) => {
                                            return (
                                              <Fragment>
                                                {data.Assessment.map(
                                                  (
                                                    individual,
                                                    individualidx
                                                  ) => {
                                                    if (
                                                      individual[8] ===
                                                      item.Applicationid
                                                    ) {
                                                      return (
                                                        <Fragment>
                                                          {temparr2.map(
                                                            (it, ix) => {
                                                              // console.log(
                                                              //   "the length of temparr2 is",
                                                              //   temparr2.length
                                                              // );
                                                              return (
                                                                <td
                                                                  className="pt-3-half"
                                                                  key={ix}
                                                                  // contenteditable="true"
                                                                >
                                                                  <input
                                                                    type="text"
                                                                    
                                                                    style={
                                                                      tableinput
                                                                    }
                                                                    value={
                                                                      individual[
                                                                        ix
                                                                      ]
                                                                    }
                                                                    name={`${item.Applicationid}${idx}${ix}`}
                                                                    onChange={(
                                                                      e
                                                                    ) =>
                                                                      handlemarkchange(
                                                                        e,
                                                                        item.Applicationid
                                                                      )
                                                                    }
                                                                  />
                                                                </td>
                                                              );
                                                            }
                                                          )}
                                                        </Fragment>
                                                      );
                                                    }
                                                  }
                                                )}
                                              </Fragment>
                                            );
                                          }
                                        )}

                                    {temparr.map((it, id) => {
                                      return (
                                        <td
                                          className="pt-3-half"
                                          key={id}
                                          // contenteditable="true"
                                        ></td>
                                      );
                                    })}

                                    {loading
                                      ? null
                                      : instructormark.map(
                                          (data, dataindex) => {
                                            return (
                                              <Fragment>
                                                {data.Assessment.map(
                                                  (
                                                    individual,
                                                    individualidx
                                                  ) => {
                                                    if (
                                                      individual[8] ===
                                                      item.Applicationid
                                                    ) {
                                                      return (
                                                        <Fragment>
                                                          <td
                                                            className="pt-3-half"
                                                            // contenteditable="true"
                                                          >
                                                            <input
                                                              type="text"
                                                              style={tableinput}
                                                              value={
                                                                individual[5]
                                                              }
                                                              onChange={(e) =>
                                                                handlemarkchange(
                                                                  e,
                                                                  item.Applicationid
                                                                )
                                                              }
                                                              name={`${item.Applicationid}${idx}${temparr2.length}`}
                                                            />
                                                          </td>

                                                          <td className="pt-3-half">
                                                            <input
                                                              type="text"
                                                              style={tableinput}
                                                              disabled
                                                              value="0"
                                                            />
                                                          </td>
                                                          <td className="pt-3-half">
                                                            <input
                                                              type="text"
                                                              style={tableinput}
                                                              disabled
                                                            />
                                                          </td>
                                                          <td className="pt-3-half">
                                                            <button
                                                              className="btn btn-primary"
                                                              onClick={() =>
                                                                handlebutton(
                                                                  item.Year,
                                                                  item.Semister,
                                                                  item.Section,
                                                                  tempjob
                                                                )
                                                              }
                                                            >
                                                              {/* {buttonname}  */}
                                                              Save
                                                            </button>
                                                          </td>
                                                        </Fragment>
                                                      );
                                                    }
                                                  }
                                                )}
                                              </Fragment>
                                            );
                                          }
                                        )}
                                  </tr>
                                </tbody>
                              );
                            }
                          })
                        : null;
                    })
                  : null}
              </table>
            </div>
          </div>
        </div>
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
  instructormark: state.instructor.instructormark,
  loading: state.instructor.loading,
});

export default connect(mapStateToProps, {
  loaduserinstructor,
  getinstructorstudentgrade,
  setgrade,
  setmark,
  getmark,
})(Instructorgrade);

//export default Instructorgrade;
