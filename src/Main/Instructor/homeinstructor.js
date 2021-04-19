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
import { getinstructorjob } from "../Redux/Action/instructorjob";
import {
  getinstructorstudentgrade,
  getstudentscourseregistered,
  updatetempjob,
  updateattendanceheader,
} from "../Redux/Action/instructorjob";

import {
  addassessment,
  getassessment,
  getmark,
} from "../Redux/Action/instructorassessment";

import { SidebarData } from "./Newinstructor/SidebarData";

import Rassessmententry from "./Pagecomponents/Regular/Rassessmententry";
import Rassessmentweight from "./Pagecomponents/Regular/Rassessmentweight";
import Rresultsummary from "./Pagecomponents/Regular/Rresultsummary";
import Gradingsystem from "./Pagecomponents/Gradingsystem/gradingsystem";
import Instructorcourses from "./Pagecomponents/Instructorcourses/instructorcourses";
import Studentattendance from "./Pagecomponents/Studentattendance/studentattendance";

const Homeinstructor = ({
  isauthenticated,
  loaduserinstructor,
  user,
  getinstructorjob,
  instructorjob,
  getinstructorstudentgrade,
  getstudentscourseregistered,
  updatetempjob,
  addassessment,
  getassessment,
  getmark,
  loading,
  updateattendanceheader,
}) => {
  useEffect(() => {
    loaduserinstructor();
    //if (user !== null) {
    //  getinstructorjob(user._id);
    //}
  }, []);

  const [job, setjob] = useState("none");
  const [mark, setmark] = useState("none");

  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  const [regularlistyle, setregularlistyle] = useState("none");
  const [speciallistyle, setspeciallistyle] = useState("none");

  const [displayrassessmentweight, setdisplayrassessmentweight] = useState(
    "none"
  );
  const [displayrassessmententry, setdisplayrassessmententry] = useState(
    "none"
  );
  const [displayrresultsummary, setdisplayrresultsummary] = useState("none");

  const [displaysassessmentweight, setdisplaysassessmentweight] = useState(
    "none"
  );
  const [displaysassessmententry, setdisplaysassessmententry] = useState(
    "none"
  );
  const [displaysresultsummary, setdisplaysresultsummary] = useState("none");

  const [displaygradingsystem, setdisplaygradingsystem] = useState("none");
  // const [displayinstructorcourses, setdisplayinstructorcourses] = useState(
  //   "none"
  // );
  const [displaystudentattendance, setdisplaystudentattendance] = useState(
    "none"
  );

  const handleregularli = () => {
    if (regularlistyle === "none") {
      setregularlistyle("block");
      setspeciallistyle("none");
      //setdisplaygradingsystem("none")
    } else {
      setregularlistyle("none");
    }
  };

  const handlespecialli = () => {
    if (speciallistyle === "none") {
      setspeciallistyle("block");
      setregularlistyle("none");
      // setdisplaygradingsystem("none")
    } else {
      setspeciallistyle("none");
    }
  };

  const handleregularassessmentweight = () => {
    if (displayrassessmentweight === "none") {
      //setdisplayrassessmententry("none");
      setjob("none");
      setdisplayrresultsummary("none");
      setdisplayrassessmentweight("block");
      setdisplaygradingsystem("none");
      setdisplaystudentattendance("none");
    } else {
      setdisplayrassessmentweight("none");
    }
  };

  const handlejob = (id) => {
    if (job === "none") {
      setjob("block");
      setmark("none");
      getinstructorjob(id);

      setdisplayrresultsummary("none");
      setdisplayrassessmentweight("none");
      setdisplaygradingsystem("none");
      setdisplaystudentattendance("none");
    } else {
      setjob("none");
    }
  };

  // const handleattendance = () => {
  //   getinstructorjob(id);
  // }

  const handleregularresultsummary = () => {
    if (displayrresultsummary === "none") {
      //setdisplayrassessmententry("none");
      setjob("none");
      setdisplayrresultsummary("block");
      setdisplayrassessmentweight("none");
      setdisplaygradingsystem("none");
      setdisplaystudentattendance("none");
    } else {
      setdisplayrresultsummary("none");
    }
  };

  // const handlemark = (id) => {
  //   if (mark === "none") {
  //     setjob("none");
  //     setmark("block");
  //     //getinstructorjob(id);
  //   } else {
  //     setmark("none");
  //   }
  // };

  const handlegradingsystem = () => {
    if (displaygradingsystem === "none") {
      setregularlistyle("none");
      setspeciallistyle("none");
      setjob("none");
      setdisplayrassessmentweight("none");
      setdisplayrresultsummary("none");

      setdisplaysassessmententry("none");
      setdisplaysassessmentweight("none");
      setdisplaysresultsummary("none");

      //setdisplayinstructorcourses("none");
      setdisplaystudentattendance("none");
      setdisplaygradingsystem("block");
    } else {
      setdisplaygradingsystem("none");
    }
  };

  const handlestudentattendance = (id) => {
    if (displaystudentattendance === "none") {
      getinstructorjob(id);
      setregularlistyle("none");
      setspeciallistyle("none");
      setjob("none");
      setdisplayrassessmentweight("none");
      setdisplayrresultsummary("none");

      setdisplaysassessmententry("none");
      setdisplaysassessmentweight("none");
      setdisplaysresultsummary("none");

      // setdisplayinstructorcourses("none");
      setdisplaygradingsystem("none");
      setdisplaystudentattendance("block");
    } else {
      setdisplaystudentattendance("none");
    }
  };

  // const handleinstructorcourses = () => {};
  // const handlestudentattendance = () => {};

  // const handleregularassessmententry = () => {
  //   if (displayrassessmententry === "none") {
  //     setdisplayrassessmententry("block");
  //     setdisplayrresultsummary("none");
  //     setdisplayrassessmentweight("none");
  //     getinstructorjob()
  //   } else {
  //     setdisplayrassessmententry("none");
  //   }
  // };

  const handleinstructorstudents = (
    Department,
    Year,
    Semister,
    Section,
    Coursename
  ) => {
    console.log("inside of the local method");
    getinstructorstudentgrade(Department, Year, Semister, Section);
    getstudentscourseregistered(Department, Year, Semister, Section);
    updatetempjob(Coursename);
    getassessment();
    getmark(Coursename, Year, Semister, Section);
  };

  const handleinstructorattendance = (
    Department,
    Year,
    Semister,
    Section,
    Coursename
  ) => {
    console.log("inside of the local attendance method");
    getinstructorstudentgrade(Department, Year, Semister, Section);
    getstudentscourseregistered(Department, Year, Semister, Section);
    updatetempjob(Coursename);
    updateattendanceheader(Year, Semister, Section);
    //getassessment();
    // getmark(Coursename, Year, Semister, Section);
  };

  const [formdata, setformdata] = useState({
    Quiz: "",
    Assignment: "",
    Project: "",
    Attendance: "",
    Final: 50,
  });

  const { Quiz, Assignment, Project, Attendance, Final } = formdata;

  const changer = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };
  let allsum = Final;

  const handledoneclassification = () => {
    // console.log(
    //   "the values respectively are",
    //   Quiz,
    //   Assignment,
    //   Project,
    //   Attendance,
    //   Final
    // );

    let tempquiz = Quiz.split(",");
    let tempAssignment = Assignment.split(",");
    let tempproject = Project.split(",");
    let tempattendance = Attendance.split(",");
    console.log(
      "the new splitted valueis ",
      tempquiz,
      tempAssignment,
      tempproject,
      tempattendance,
      Final
    );

    var quizsum = tempquiz.reduce(function (a, b) {
      a *= 1;
      b *= 1;
      return a + b;
    }, 0);

    var assignmentsum = tempAssignment.reduce(function (a, b) {
      a *= 1;
      b *= 1;
      return a + b;
    }, 0);

    var projectsum = tempproject.reduce(function (a, b) {
      a *= 1;
      b *= 1;
      return a + b;
    }, 0);

    var attendancesum = tempattendance.reduce(function (a, b) {
      a *= 1;
      b *= 1;
      return a + b;
    }, 0);

    allsum = quizsum + assignmentsum + projectsum + attendancesum + Final;

    if (allsum === 100) {
      addassessment(
        tempquiz,
        tempAssignment,
        tempproject,
        tempattendance,
        Final
      );
    } else {
      console.log(
        "the sum of all fields is",
        allsum,
        "the total mark should be 100"
      );
    }

    // addassessment(tempquiz, tempAssignment, tempproject, tempattendance, Final);
  };

  if (!isauthenticated) {
    return <Redirect to="/logininstructor" />;
  }

  const buttonstyle = {
    display: "block",
    lineHeight: "20px",
    marginTop: 5,
    width: 200,
    // paddingRight: 50
  };

  const allregularstyle = {
    display: regularlistyle,
    marginLeft: 50,
    marginTop: 5,
  };

  const allspecialstyle = {
    display: speciallistyle,
    marginLeft: 50,
    marginTop: 5,
  };

  return (
    <Fragment>
      <Header name={user !== null ? user.Instructorfname : null} />
      <Grid container>
        <Grid item lg={3} xl={1}>
          <div
            style={{
              border: "1px solid green ",
              marginTop: 150,
              marginLeft: 20,
              // width: "75%",
              // height: "100vh"
            }}
          >
            <ul style={{ listStyleType: "none" }}>
              <li>
                <button
                  onClick={handleregularli}
                  className="btn btn-success btn-rounded"
                >
                  Regular entry
                </button>
                <ul>
                  <li style={allregularstyle}>
                    {" "}
                    <button
                      onClick={handleregularassessmentweight}
                      className="btn btn-secondary btn-rounded"
                    >
                      Assessment Weight
                    </button>{" "}
                  </li>
                  <li style={allregularstyle}>
                    {" "}
                    <button
                      // onClick={handleregularassessmententry}
                      onClick={() => handlejob(user._id)}
                      className="btn btn-secondary btn-rounded"
                    >
                      Assessment Entry
                    </button>{" "}
                  </li>
                  <li style={allregularstyle}>
                    {" "}
                    <button
                      onClick={handleregularresultsummary}
                      className="btn btn-secondary btn-rounded"
                    >
                      Result Summary
                    </button>{" "}
                  </li>
                </ul>
              </li>

              <li>
                <button
                  onClick={handlespecialli}
                  className="btn btn-success btn-rounded"
                  style={{ marginTop: 10 }}
                >
                  Special entry
                </button>
                <ul>
                  <li style={allspecialstyle}>
                    {" "}
                    <button className="btn btn-secondary btn-rounded">
                      {" "}
                      Makeup Assessment Weight
                    </button>{" "}
                  </li>
                  <li style={allspecialstyle}>
                    {" "}
                    <button className="btn btn-secondary btn-rounded">
                      Makeup Assessment Entry
                    </button>{" "}
                  </li>
                  <li style={allspecialstyle}>
                    {" "}
                    <button className="btn btn-secondary btn-rounded">
                      Makeup Result Summary
                    </button>{" "}
                  </li>
                </ul>
              </li>
              <li>
                <button
                  onClick={handlegradingsystem}
                  className="btn btn-success btn-rounded"
                  style={{ marginTop: 10 }}
                >
                  Grading system
                </button>
              </li>

              {/* <li>
                <button
                  //onClick={handlespecialli}
                  className="btn btn-success btn-rounded"
                  style={{ marginTop: 10 }}
                >
                  Courses taught by instructor
                </button>
              </li> */}

              <li>
                <button
                  onClick={() => handlestudentattendance(user._id)}
                  className="btn btn-success btn-rounded"
                  style={{ marginTop: 10 }}
                >
                  Student Attendance
                </button>
              </li>
              <li>
                <button
                  //onClick={handlespecialli}
                  className="btn btn-success btn-rounded"
                  style={{ marginTop: 10 }}
                >
                  Regrading
                </button>
              </li>
            </ul>
          </div>
        </Grid>

        <Grid item lg={8} xl={8}>
          <div style={{ display: displayrassessmentweight }}>
            <Rassessmentweight />
          </div>

          {/* <div style={{ display: displayrassessmententry }}>
            <Rassessmententry />
          </div> */}

          <div style={{ display: displayrresultsummary }}>
            <Rresultsummary />
          </div>
          <div style={{ display: job, marginTop: 100 }}>
            {/* <strong>
               <p style={{ marginLeft: 50, color: "green", fontSize: 24 }}>
                Your Assigned Jobs are
              </p>
            </strong> */}
            <Typography variant="h6" color="primary" style={{ margin: 50 }}>
              Courses teaching by instructor
            </Typography>
            {instructorjob.length !== null
              ? instructorjob.map((item, idx) => {
                  return (
                    <div style={{ marginLeft: 200 }} key={idx}>
                      <div> Year : {item.Year}</div>
                      <div> Semister : {item.Semister}</div>
                      <div> Coursename : {item.Coursename}</div>
                      <Link
                        to="/instructorgrade"
                        style={{ textDecoration: "none" }}
                      >
                        <Button
                          color="secondary"
                          variant="outlined"
                          onClick={() =>
                            handleinstructorstudents(
                              user.Department,
                              item.Year,
                              item.Semister,
                              item.Section,
                              item.Coursename
                            )
                          }
                        >
                          {" "}
                          Section : {item.Section}
                        </Button>
                      </Link>
                      <br></br> <hr></hr> <br></br>
                    </div>
                  );
                })
              : null}
          </div>

          <div style={{ display: displaygradingsystem }}>
            <Gradingsystem />
          </div>

          <div style={{ display: displaystudentattendance }}>
            {/* <Studentattendance /> */}
            <Typography variant="h6" color="primary" style={{ margin: 50 }}>
              Student Attendance
            </Typography>
            {instructorjob.length !== null
              ? instructorjob.map((item, idx) => {
                  return (
                    <div style={{ marginLeft: 200 }} key={idx}>
                      <div> Year : {item.Year}</div>
                      <div> Semister : {item.Semister}</div>
                      <div> Coursename : {item.Coursename}</div>
                      <Link
                        to="/attendancetable"
                        style={{ textDecoration: "none" }}
                      >
                        <Button
                          color="secondary"
                          variant="outlined"
                          onClick={() =>
                            handleinstructorattendance(
                              user.Department,
                              item.Year,
                              item.Semister,
                              item.Section,
                              item.Coursename
                            )
                          }
                        >
                          {" "}
                          Section : {item.Section}
                        </Button>
                      </Link>
                      <br></br> <hr></hr> <br></br>
                    </div>
                  );
                })
              : null}
          </div>
        </Grid>
      </Grid>

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
  instructorjob: state.instructor.instructorjob,
  loading: state.instructor.loading,
});

export default connect(mapStateToProps, {
  loaduserinstructor,
  getinstructorjob,
  getinstructorstudentgrade,
  getstudentscourseregistered,
  updatetempjob,
  addassessment,
  getassessment,
  getmark,
  updateattendanceheader,
})(Homeinstructor);

//export default Homeinstructor;
