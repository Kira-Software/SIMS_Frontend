import React, { useEffect, useState } from "react";
import { TextField, Button, Typography, Grid } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";

import { connect } from "react-redux";

import {
  addassessment,
  getassessment,
} from "../../../Redux/Action/instructorassessment";

const Rassessmentweight = ({
  addassessment,
  instructorassessment,
  getassessment,
}) => {
  useEffect(() => {
    getassessment();
  }, []);
  const [formdata, setformdata] = useState({
    Quiz: "",
    Assignment: "",
    Project: "",
    Attendance: "",
    Final: 50,
  });

  const [quizarr, setquizarr] = React.useState([""]);
  const [assignmentarr, setassignmentarr] = React.useState([""]);
  const [projectarr, setprojectarr] = React.useState([""]);
  const [attendancearr, setattendancearr] = React.useState([""]);

  let [holdquiz, setholdquiz] = React.useState([""]);
  let [holdassignment, setholdassignment] = React.useState([""]);
  let [holdproject, setholdproject] = React.useState([""]);
  let [holdattendance, setholdattendance] = React.useState([""]);

  const fieldupdate = (e, index, name) => {
    console.log("the values of passed parameters are", e, index, name);
    if (name === "quiz") {
      holdquiz[index] = e.target.value;
      console.log("the holdquiz value is", holdquiz);
    } else if (name === "assignment") {
      holdassignment[index] = e.target.value;
      console.log("the holdassignment value is", holdassignment);
    }

    if (name === "project") {
      holdproject[index] = e.target.value;
      console.log("the holdproject value is", holdproject);
    }

    if (name === "attendance") {
      holdattendance[index] = e.target.value;
      console.log("the holdattendance value is", holdattendance);
    }
  };

  const { Quiz, Assignment, Project, Attendance, Final } = formdata;

  const changer = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };
  let allsum = Final;

  const addfield = (name) => {
    console.log("the value of the name is " + name);
    if (name === "quiz") {
      setquizarr([...quizarr, ""]);
      setholdquiz([...holdquiz, ""]);
    } else if (name === "assignment") {
      setassignmentarr([...assignmentarr, ""]);
      setholdassignment([...holdassignment, ""]);
    } else if (name === "project") {
      setprojectarr([...projectarr, ""]);
      setholdproject([...holdproject, ""]);
    } else if (name === "attendance") {
      setattendancearr([...attendancearr, ""]);
      setholdattendance([...holdattendance, ""]);
    }
    //setchoices([]);
    //setquestions([...questions, ""]);
    //setmyquestion([...myquestion, []]);
  };

  const deletefield = (name) => {
    //setchoices([]);
    let tempquiz = [...quizarr];
    let tempassignment = [...assignmentarr];
    let tempproject = [...projectarr];
    let tempattendance = [...attendancearr];
    if (name === "quiz") {
      tempquiz.pop();
      holdquiz.pop();
      setquizarr(tempquiz);
    } else if (name === "assignment") {
      tempassignment.pop();
      holdassignment.pop();
      setassignmentarr(tempassignment);
    } else if (name === "project") {
      tempproject.pop();
      holdproject.pop();
      setprojectarr(tempproject);
    } else if (name === "attendance") {
      tempattendance.pop();
      holdattendance.pop();
      setattendancearr(tempattendance);
    }
  };

  const handledoneweighing = () => {
    const final = 50;
    console.log(
      "the assessment values are ",
      holdquiz,
      holdassignment,
      holdproject,
      holdattendance,
      final
    );

    var quizsum = holdquiz.reduce(function (a, b) {
      a *= 1;
      b *= 1;
      return a + b;
    }, 0);

    var assignmentsum = holdassignment.reduce(function (a, b) {
      a *= 1;
      b *= 1;
      return a + b;
    }, 0);

    var projectsum = holdproject.reduce(function (a, b) {
      a *= 1;
      b *= 1;
      return a + b;
    }, 0);

    var attendancesum = holdattendance.reduce(function (a, b) {
      a *= 1;
      b *= 1;
      return a + b;
    }, 0);

    allsum = quizsum + assignmentsum + projectsum + attendancesum + final;

    if (allsum === 100) {
      console.log("well done.....you make it 100");

      addassessment(
        holdquiz,
        holdassignment,
        holdproject,
        holdattendance,
        final
      );
    } else {
      console.log(
        "the sum of all fields is",
        allsum,
        "the total mark should be 100"
      );
    }
  };

  const assessmentstyle = {
    fontSize: 24,
    border: "3px brown solid",
    borderRadius: 5,
    width: "40%",
    marginTop: 50,
  };

  return (
    <div style={{ marginTop: 100 }}>
      {/* <h1>Result Assessment Weight</h1> */}

      {instructorassessment.length == 0 ? (
        <div style={{ marginLeft: 50, marginTop: 100 }}>
          <Grid container>
            <Grid item lg={8}>
              <div>
                <div style={assessmentstyle}>
                  <span>Quiz</span>{" "}
                  {quizarr.length <= 2 ? (
                    <Fab
                      color="primary"
                      aria-label="add"
                      size="small"
                      style={{ marginLeft: "70%" }}
                      onClick={() => addfield("quiz")}
                      //name = "quiz"
                    >
                      <AddIcon />
                    </Fab>
                  ) : null}
                </div>{" "}
                <div style={assessmentstyle}>
                  <span>Assignment</span>{" "}
                  {assignmentarr.length <= 1 ? (
                    <Fab
                      color="primary"
                      aria-label="add"
                      size="small"
                      style={{ marginLeft: "70%" }}
                      onClick={() => addfield("assignment")}
                    >
                      <AddIcon />
                    </Fab>
                  ) : null}
                </div>{" "}
                <div style={assessmentstyle}>
                  <span>Project</span>{" "}
                  {projectarr.length <= 1 ? (
                    <Fab
                      color="primary"
                      aria-label="add"
                      size="small"
                      style={{ marginLeft: "70%" }}
                      onClick={() => addfield("project")}
                    >
                      <AddIcon />
                    </Fab>
                  ) : null}
                </div>{" "}
                <div style={assessmentstyle}>
                  <span>Attendance</span>{" "}
                  {attendancearr.length < 1 ? (
                    <Fab
                      color="primary"
                      aria-label="add"
                      size="small"
                      style={{ marginLeft: "70%" }}
                      onClick={() => addfield("attendance")}
                    >
                      <AddIcon />
                    </Fab>
                  ) : null}
                </div>{" "}
              </div>
            </Grid>

            <Grid item lg={3}>
              {quizarr.map((item, idx) => {
                return (
                  <div key={idx}>
                    <label>Quiz {idx + 1}</label>
                    <input
                      type="text"
                      onChange={(e) => fieldupdate(e, idx, "quiz")}
                    />
                    <button
                      className="btn btn-danger btn-rounded"
                      style={{ margin: 10 }}
                      onClick={() => deletefield("quiz")}
                    >
                      Remove
                    </button>
                  </div>
                );
              })}

              {assignmentarr.map((item, idx) => {
                return (
                  <div key={idx}>
                    <label>Assignment {idx + 1}</label>
                    <input
                      type="text"
                      onChange={(e) => fieldupdate(e, idx, "assignment")}
                    />
                    <button
                      className="btn btn-danger btn-rounded"
                      style={{ margin: 10 }}
                      onClick={() => deletefield("assignment")}
                    >
                      Remove
                    </button>
                  </div>
                );
              })}

              {projectarr.map((item, idx) => {
                return (
                  <div key={idx}>
                    <label>Project {idx + 1}</label>
                    <input
                      type="text"
                      onChange={(e) => fieldupdate(e, idx, "project")}
                    />
                    <button
                      className="btn btn-danger btn-rounded"
                      style={{ margin: 10 }}
                      onClick={() => deletefield("project")}
                    >
                      Remove
                    </button>
                  </div>
                );
              })}

              {attendancearr.map((item, idx) => {
                return (
                  <div key={idx}>
                    <label>Attendace {idx + 1}</label>
                    <input
                      type="text"
                      onChange={(e) => fieldupdate(e, idx, "attendance")}
                    />
                    <button
                      className="btn btn-danger btn-rounded"
                      style={{ margin: 10 }}
                      onClick={() => deletefield("attendance")}
                    >
                      Remove
                    </button>
                  </div>
                );
              })}
              <label>Final</label>

              <input type="text" value={50} disabled />

              <button
                className="btn btn-success btn-rounded"
                style={{ margin: 20, width: 200 }}
                onClick={handledoneweighing}
              >
                Done
              </button>
            </Grid>
          </Grid>
        </div>
      ) : (
        <div style={{marginLeft: 50}}>
          <Typography variant="h6" color="primary" style={{ margin: 50 }}>
            Assessment weight already setted
          </Typography>

          <table className="table table-bordered table-responsive-md table-striped text-center">
            <thead>
              <tr>
                <th>Assessment type</th>
                <th>Assessment Weight</th>
              </tr>
            </thead>

            {instructorassessment.map((item, idx) => {
              // Array.isArray(item)? item.map((item2,idx2)=> {

              // })
              return (
                <tbody key={idx}>
                  {item.Quiz.length !== 0
                    ? item.Quiz.map((item2, idx2) => {
                        return (
                          <tr key={idx2}>
                            <td>Quiz {idx2 + 1}</td>
                            <td>{item2}</td>
                          </tr>
                        );
                      })
                    : null}

                  {item.Assignment.length !== 0
                    ? item.Assignment.map((item2, idx2) => {
                        return (
                          <tr key={idx2}>
                            <td>Assignment {idx2 + 1}</td>
                            <td>{item2}</td>
                          </tr>
                        );
                      })
                    : null}

                  {item.Project.length !== 0
                    ? item.Project.map((item2, idx2) => {
                        return (
                          <tr key={idx2}>
                            <td>Project {idx2 + 1}</td>
                            <td>{item2}</td>
                          </tr>
                        );
                      })
                    : null}

                  {item.Attendance.length !== 0
                    ? item.Attendance.map((item2, idx2) => {
                        return (
                          <tr key={idx2}>
                            <td>Attendance</td>
                            <td>{item2}</td>
                          </tr>
                        );
                      })
                    : null}
                  <tr>
                    <td>Final</td>
                    <td>{item.Final}</td>
                  </tr>

                  <tr>
                    <td>Total</td>
                    <td>100</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  instructorassessment: state.instructor.instructorassessment,
});
export default connect(mapStateToProps, { addassessment, getassessment })(
  Rassessmentweight
);
