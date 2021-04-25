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
  newstudentgrade,
  courses,
}) => {
  useEffect(() => {
    loaduserstud();
  }, []);

  const [displaycourse, setdisplaycourse] = useState("none");
  const [displaygrade, setdisplaygrade] = useState("none");
  const [displaystatus, setdisplaystatus] = useState("none");

  const [newgpa, setnewgpa] = useState([]);

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

  const gradecalculator = (Grade, Credithour) => {
    let value;
    if (Grade === "A+") {
      value = 4 * Credithour;
    } else if (Grade === "A") {
      value = 4 * Credithour;
    } else if (Grade === "A-") {
      value = 3.75 * Credithour;
    } else if (Grade === "B+") {
      value = 3.5 * Credithour;
    } else if (Grade === "B") {
      value = 3 * Credithour;
    } else if (Grade === "B-") {
      value = 2.75 * Credithour;
    } else if (Grade === "C+") {
      value = 2.5 * Credithour;
    } else if (Grade === "C") {
      value = 2 * Credithour;
    } else if (Grade === "C-") {
      value = 1.75 * Credithour;
    } else if (Grade === "D") {
      value = 1 * Credithour;
    } else if (Grade === "F") {
      value = 0 * Credithour;
    }

    return value;
  };

  const handledisplaystatus = (id) => {
    if (displaystatus === "none") {
      getgrades(id);
      setdisplaygrade("none");
      setdisplaycourse("none");
      setdisplaystatus("block");

      if (gradestatus.length !== 0) {
        let allcredithour = 0;
        let allmultiplied = 0;
        gradestatus.map((item, itemidx) => {
          let totalcredithour = 0;
          let totalmultiplied = 0;
          item.map((eachitem, eachitemidx) => {
            if (eachitemidx > 1) {
              courses.map((course, courseidx) => {
                if (eachitem === course.Coursename) {
                  let topush = gradecalculator(
                    item[eachitemidx + 1],
                    course.Credithour
                  );
                  totalcredithour = totalcredithour + course.Credithour;
                  totalmultiplied = totalmultiplied + topush;

                  allcredithour = allcredithour + course.Credithour;
                  allmultiplied = allmultiplied + topush;
                }
              });
            }
            if (eachitemidx === item.length - 1) {
              console.log(
                "the total multiplied value is ",
                totalmultiplied,
                " and total credithour is ",
                totalcredithour
              );
              let GPA = totalmultiplied / totalcredithour;
              let CGPA = allmultiplied / allcredithour;

              item.push(GPA);
              //  item.push("")
              item.push(CGPA);
            }
          });
        });
      }
      console.log("the final grade status value is ", gradestatus);
      setnewgpa(gradestatus);
    } else {
      setdisplaystatus("none");
    }
  };

  let gradestatus = [];
  let gradegpa = [];
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

          <Button
            style={{ marginTop: 30, marginLeft: 100, width: 200 }}
            variant="outlined"
            color="primary"
            onClick={() => handledisplaygrade(user._id)}
          >
            New Grades
          </Button>

          <Button
            style={{ marginTop: 30, marginLeft: 100, width: 200 }}
            variant="outlined"
            color="primary"
            onClick={() => handledisplaystatus(user._id)}
          >
            New Status
          </Button>
        </Grid>

        <Grid item lg={7} xl={7}>
          <div style={{ display: displaycourse }}>
            <div className="card" style={{ marginTop: 50, marginBottom: 100 }}>
              <h3 className="card-header text-center font-weight-bold text-uppercase py-4">
                Enrolled Courses
              </h3>{" "}
            </div>{" "}
            <table className="table table-bordered table-responsive-md table-striped text-center">
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
            <div className="card" style={{ marginTop: 50, marginBottom: 100 }}>
              <h3 className="card-header text-center font-weight-bold text-uppercase py-4">
                Student Grade
              </h3>{" "}
            </div>{" "}
            <table className="table table-bordered table-responsive-md table-striped text-center">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Semister</th>
                  <th>Coursename</th>
                  <th>Grade</th>
                  {/* <th>Credithour</th> */}
                </tr>
              </thead>
              <tbody>
                {newstudentgrade.length !== 0
                  ? newstudentgrade.map((item, itemidx) => {
                      return (
                        <Fragment key={itemidx}>
                          {item.Assessment.map((individual, individualidx) => {
                            if (
                              individual[item.Assessmentnumber + 4] === user._id
                            ) {
                              return (
                                <tr key={individualidx}>
                                  <td>{item.Year}</td>
                                  <td>{item.Semister}</td>
                                  <td>{item.Coursename}</td>
                                  <td>
                                    {individual[item.Assessmentnumber + 3]}
                                  </td>
                                </tr>
                              );
                            }
                          })}
                        </Fragment>
                      );
                    })
                  : null}
              </tbody>
            </table>
          </div>

          <div style={{ display: displaystatus }}>
            <h3>display status section</h3>
            {newstudentgrade.length !== 0
              ? newstudentgrade.map((item, itemidx) => {
                  item.Assessment.map((individual, individualidx) => {
                    if (individual[item.Assessmentnumber + 4] === user._id) {
                      if (gradestatus.length === 0) {
                        gradestatus.push([
                          item.Year,
                          item.Semister,
                          item.Coursename,
                          individual[item.Assessmentnumber + 3],
                        ]);
                        console.log(
                          "the value of gradestatus is ",
                          gradestatus
                        );
                      } else {
                        gradestatus.map((data, dataidx) => {
                          let done = false;
                          if (
                            data[0] === item.Year &&
                            data[1] === item.Semister
                          ) {
                            data.push(
                              item.Coursename,
                              individual[item.Assessmentnumber + 3]
                            );
                            done = true;
                          } else if (
                            dataidx === gradestatus.length - 1 &&
                            done === false
                          ) {
                            gradestatus.push([
                              item.Year,
                              item.Semister,
                              item.Coursename,
                              individual[item.Assessmentnumber + 3],
                            ]);
                          }
                        });

                        console.log(
                          "the value of gradestatus is ",
                          gradestatus
                        );
                      }
                    }
                  });
                })
              : null}
            <div className="card" style={{ marginTop: 50, marginBottom: 100 }}>
              <h3 className="card-header text-center font-weight-bold text-uppercase py-4">
                Student Status
              </h3>{" "}
            </div>{" "}
            <table className="table table-bordered table-responsive-md table-striped text-center">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Semister</th>
                  <th>GPA</th>
                  <th>CGPA</th>

                  {/* <th>Credithour</th> */}
                </tr>
              </thead>
              <tbody>
                {newgpa.length !== 0
                  ? newgpa.map((item, itemidx) => {
                      return (
                        <tr key={itemidx}>
                          <th>{item[0]}</th>
                          <th>{item[1]}</th>
                          <th>{item[item.length - 2]}</th>
                          <th>{item[item.length - 1]}</th>
                        </tr>
                      );
                    })
                  : null}
              </tbody>
            </table>
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
  //   loading: state.course.loading,
  // assignedcourses: state.course.assignedcourses
  courses: state.course.courses,
  user: state.authreducer.user,
  isauthenticated: state.authreducer.isauthenticated,
  studentgrades: state.students.studentgrades,
  studentcourses: state.students.studentcourses,

  newstudentgrade: state.students.newstudentgrade,
});

export default connect(mapStateToProps, {
  getgrades,
  getcourses,
  loaduserstud,
})(Assigncourse);
