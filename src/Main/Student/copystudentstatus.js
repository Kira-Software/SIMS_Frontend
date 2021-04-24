import { Button, Grid } from "@material-ui/core";
import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import Header from "../Header/headerstudent";
// import { docourseassign } from "../Redux/Action/assigncourses"
// import { getcourses } from "../Redux/Action/course"
// import { loaduser } from "../Redux/Action/mainlogin";
import { loaduserstud } from "../Redux/Action/authentication";
import { getcourses, getgrades } from "../Redux/Action/studentstatus";

const Assigncourse = ({
  isauthenticated,
  user,
  studentcourses,
  studentgrades,
  getgrades,
  getcourses,
  loaduserstud,
  newstudentgrade
}) => {
  useEffect(() => {
    loaduserstud();
  }, []);

  const [displaycourse, setdisplaycourse] = useState("none");
  const [displaygrade, setdisplaygrade] = useState("none");
  const [displaystatus, setdisplaystatus] = useState("none");

  const handledisplaycourse = (id) => {
    if (displaycourse === "none") {
      getcourses(id);
      setdisplaycourse("block");
      setdisplaygrade("none");
      setdisplaystatus("none");
    } else {
      setdisplaycourse("none");
    }
  };

  const handledisplaygrade = (id) => {
    if (displaygrade === "none") {
      getgrades(id);
      setdisplaygrade("block");
      setdisplaycourse("none");
      setdisplaystatus("none");
    } else {
      setdisplaygrade("none");
    }
  };

  const handledisplaystatus = (id) => {
    if (displaystatus === "none") {
      getgrades(id);
      setdisplaygrade("none");
      setdisplaycourse("none");
      setdisplaystatus("block");
    } else {
      setdisplaystatus("none");
    }
  };
  return (
    <Fragment>
      <Header name={user !== null ? user.Firstname : null} />

      <p>student status page</p>
      <Grid container>
        <Grid item lg={4} xl={4}>
          <Button
            style={{ marginTop: 50, marginLeft: 100, width: 200 }}
            variant="outlined"
            color="primary"
            onClick={() => handledisplaycourse(user._id)}
          >
            My Courses
          </Button>
          <br></br>
          {/* <Button
            style={{ marginTop: 30, marginLeft: 100, width: 200 }}
            variant="outlined"
            color="primary"
            onClick={() => handledisplaygrade(user._id)}
          >
            My Grades
          </Button>

          <Button
            style={{ marginTop: 30, marginLeft: 100, width: 200 }}
            variant="outlined"
            color="primary"
            onClick={() => handledisplaystatus(user._id)}
          >
            My Status
          </Button> */}

          <Button
            style={{ marginTop: 30, marginLeft: 100, width: 200 }}
            variant="outlined"
            color="primary"
           // onClick={() => handledisplaystatus(user._id)}
          >
            New Grades
          </Button>

          <Button
            style={{ marginTop: 30, marginLeft: 100, width: 200 }}
            variant="outlined"
            color="primary"
           // onClick={() => handledisplaystatus(user._id)}
          >
            New Status
          </Button>
        </Grid>

        <Grid item lg={7} xl={7}>
          <div style={{ display: displaycourse }}>
            <p>Course display section</p>

            <table border="3" cellSpacing="1" cellPadding="20" width="800">
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
              {studentcourses.length == 0 ? (
                <tbody>
                  <tr>
                    <td colSpan="4" style={{ color: "red" }}>
                      There are no records
                    </td>
                  </tr>
                </tbody>
              ) : null}

              {studentcourses.map((item, idx) => {
                return (
                  <tbody key={idx}>
                    {/* <tr>
                          <td>{item.Department}</td>
                          <td>{item.Year}</td>
                          <td>{item.Semister}</td>
                        </tr>   */}
                    {item.Courses.map((item2, idx2) => {
                      return (
                        <tr key={idx2}>
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

          <div style={{ display: displaygrade }}>
            <p>Grade display section</p>

            <table border="3" cellSpacing="1" cellPadding="20" width="800">
              <thead style={{ marginRight: 50 }}>
                <tr>
                  <th>Year</th>
                  <th>Semister</th>
                  <th>Courses</th>
                  <th>Grade</th>
                  {/*  <th>Sex</th>
                      <th>Email Address</th> */}
                </tr>
              </thead>
              {studentgrades.length == 0 ? (
                <tbody>
                  <tr>
                    <td colSpan="5" style={{ color: "red" }}>
                      There are no records
                    </td>
                  </tr>
                </tbody>
              ) : null}

              {studentgrades.map((item, idx) => {
                return (
                  <tbody key={idx}>
                    <tr>
                      <td>{item.Year}</td>
                      <td>{item.Semister}</td>
                      <td>{item.Course}</td>
                      <td>{item.Grade}</td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>

          <div style={{ display: displaystatus }}>
            <h3>display status section</h3>
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
};

// Assigncourse.propTypes = {
//     giveapplication: PropTypes.func.isRequired
//   };

const mapStateToProps = (state) => ({
  // studapplication: state.reducer.studapplication,
  // loading: state.reducer.loading,
  // loading: state.survey.loading
  //   user: state.authreducer.user,
  //   courses: state.course.courses,
  //   loading: state.course.loading,
  // assignedcourses: state.course.assignedcourses
  user: state.authreducer.user,
  isauthenticated: state.authreducer.isauthenticated,
  studentgrades: state.students.studentgrades,
  studentcourses: state.students.studentcourses,

  newstudentgrade: state.students.newstudentgrade
});

export default connect(mapStateToProps, {
  getgrades,
  getcourses,
  loaduserstud,
})(Assigncourse);
