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

//import {Table} from "react-bootstrap"

import { Link } from "react-router-dom";

import axios from "axios";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import Headerdept from "../Header/headerdept";
import Footer from "../Footer/footer";
import Assigncourse from "./assigncourse";

import { loaduser } from "../Redux/Action/mainlogin";
import { selectedstudents } from "../Redux/Action/selectstudents";
import { createclass } from "../Redux/Action/classes";
import { selectsectioned } from "../Redux/Action/selectsectioned";
import { getcourses } from "../Redux/Action/course";
import { getinstructor } from "../Redux/Action/instructor";
import { getsemisteredcourses } from "../Redux/Action/course";
import { sendassigninstructor } from "../Redux/Action/assigninstructor";

//import Addcourse from "./addcourse"

const Studentstaff = ({
  user,
  loaduser,
  selectedstudents,
  students,
  createclass,
  selectsectioned,
  sectionedstudents,
  getcourses,
  courses,
  getinstructor,
  instructors,
  getsemisteredcourses,
  semisteredcourses,
  sendassigninstructor,
}) => {
  //  const [newstudent, setnewstudent] = useState()
  const [open, setopen] = useState("none");
  const [classmenu, setclassmenu] = useState("none");
  const [sectionnum, setsectionnum] = useState();

  const [secstuddisplay, setsecstuddisplay] = useState("none");
  const [assigninstructor, setassigninstructor] = useState("none");
  const [assigncourse, setassigncourse] = useState("none");

  const [selectedinstructor, setselectedinstructor] = useState();
  const [selectedcourse, setselectedcourse] = useState();

  const [formdata, setformdata] = useState({
    Classno: "",
    Studentno: "",
    Year: null,
    Semister: null,
  });

  const { Classno, Studentno, Year, Semister } = formdata;

  const changer = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleopen = () => {
    if (open == "none") {
      setopen("block");
    } else {
      setopen("none");
    }
  };

  const searchstudent = (year, semister) => {
    setclassmenu("none");
    setsecstuddisplay("none");
    setassigninstructor("none");
    console.log("the value of year and semister is " + year + semister);
    selectedstudents(year, semister);
    setformdata({ ...formdata, Year: year, Semister: semister });
  };

  const createclasshandler = () => {
    // console.log(
    //   "the value of class number and studentno is " + Classno,
    //   Studentno
    // );
    // selectedstudents(year, semister)
    createclass(Classno, Studentno, Year, Semister);

    setformdata({ ...formdata, Classno: "", Studentno: "" });
    //  setmaindiv("none");
  };

  const hadleclassmenu = (classitem) => {
    setsectionnum(classitem);
    //  setassigncourse("none")
    setclassmenu("block");

    setsecstuddisplay("none");
    setassigninstructor("none");
  };

  const searchmysection = (year, semister, section) => {
    if (secstuddisplay == "none") {
      setsecstuddisplay("block");
      setassigninstructor("none");

      //setassigncourse("none")
    } else {
      setsecstuddisplay("none");
    }

    // console.log(
    //   "the value of year and semister is " + year + semister + section
    // );
    selectsectioned(year, semister, section);
  };

  const handleassigninstructor = (Year, Semister) => {
    if (assigninstructor == "none") {
      getinstructor();
      getsemisteredcourses(Year, Semister);

      setassigninstructor("block");
      setsecstuddisplay("none");
    } else {
      setassigninstructor("none");
    }
  };

  const handleselectedinstructor = (event, Id) => {
    let checking = document.getElementById(event.target.id).checked;

    let val = event.target.value;
    if (checking === true) {
      console.log("the value of instructor event and id  is", val + Id);
      setselectedinstructor(Id);
    }
  };

  const handleselectedcourse = (event) => {
    let checking = document.getElementById(event.target.id).checked;

    let val = event.target.value;
    if (checking === true) {
      console.log("the value of course event is", val);
      setselectedcourse(val);
    }
  };

  const handleassigninstructordone = () => {
    console.log(
      "the sent values respectively are " + selectedinstructor,
      Year,
      Semister,
      sectionnum,
      selectedcourse
    );
    sendassigninstructor(
      selectedinstructor,
      Year,
      Semister,
      sectionnum,
      selectedcourse
    );
  };

  useEffect(() => {
    loaduser();
    // setnewstudent(selectedstudents)
    // console.log("the value of newstudent is "+ newstudent)
  }, []);

  // const data =
  //     <p>this is from the data function</p>
  let data = null;
  if (user != null) {
    data = Object.values(user);
  }

  // console.log("the value of data is " + data)

  let newarr = [];
  let classarray = [];

  return (
    <Fragment>
      <Headerdept name={user !== null? user.Departmentname: null}  />

      <h2>{user ? user.Departmentname : null} Department</h2>
      {/* <h4> The total Duration of the  department is {user.Duration}</h4> */}
      {data != null
        ? data.map((item, idx) => {
            let i;
            if (idx == 2) {
              for (i = 1; i <= user.Duration; i++) {
                newarr.push(i);
              }
            }
            //  return <p>{j}</p>
          })
        : null}

      <Grid container>
        <Grid item lg={4} xl={4}>
          {newarr.map((item, idx) => {
            return (
              <Fragment key={idx}>
                <h2 style={{ marginLeft: 50 }}>Year {item}</h2>

                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginLeft: 60 }}
                  onClick={() => searchstudent(item, 1)}
                >
                  Semister 1
                </Button>
                {/* <br></br> <br></br> */}
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginLeft: 60 }}
                  onClick={() => searchstudent(item, 2)}
                >
                  Semister 2
                </Button>
                {/* <br></br> */}
              </Fragment>
            );
          })}
        </Grid>

        <Grid item lg={7} xl={7}>
          {students == null ? null : (
            <div>
              <Typography variant="h4">Student List</Typography>

              <div style={{ height: 250, overflow: "auto" }}>
                <table border="3" cellSpacing="5" cellPadding="20">
                  <thead style={{ marginRight: 50 }}>
                    <tr>
                      <th>No.</th>
                      <th>First Name</th>
                      <th>Middle Name</th>
                      <th>Last Name</th>
                      <th>Sex</th>
                      <th>Email Address</th>
                    </tr>
                  </thead>
                  {students.length == 0 ? (
                    <tbody>
                      <tr>
                        <td colSpan="6" style={{ color: "red" }}>
                          There are no records
                        </td>
                      </tr>
                    </tbody>
                  ) : null}

                  {students.map((item, idx) => {
                    return (
                      <tbody key={idx}>
                        <tr>
                          <td>{idx + 1}</td>
                          <td>{item.Firstname}</td>
                          <td>{item.Middlename}</td>
                          <td>{item.Lastname}</td>
                          <td>{item.Sex}</td>
                          <td>{item.Email}</td>
                        </tr>
                      </tbody>
                    );
                  })}
                </table>
              </div>

              {user.Classes.map((item, idx) => {
                // item[2] != 0? setmaindiv("none"): null
                if (item[0] == Year && item[1] == Semister) {
                  for (let i = 1; i <= item[2]; i++) {
                    classarray.push(i);
                  }
                  console.log("the value of classarray is " + classarray);
                }
                return (
                  <div key={idx}>
                    <br></br>
                    <br></br>
                  </div>
                );
                // return item[0] == Year && item[1] == Semister ? (
                //   <div key={idx}>
                //     <p>Class numbers {item[2]}</p>
                //   </div>
                // ) : null;
              })}

              {classarray.map((item, idx) => {
                return (
                  <span key={idx}>
                    <Button
                      variant="contained"
                      color="secondary"
                      style={{ marginLeft: 60 }}
                      //onClick={() => searchmysection(Year, Semister, item)}
                      onClick={() => hadleclassmenu(item)}
                    >
                      Class {item}
                    </Button>
                  </span>
                );
              })}

              {/* {classarray.length != 0 ? <Button
                variant="contained"
                color="secondary"
                style={{ marginLeft: 60 }}
                onClick={handleassigncourse}
              >
                Assign Courses
                    </Button> : null} */}

              <div style={{ display: classmenu, marginTop: 50 }}>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginLeft: 60 }}
                  onClick={() => searchmysection(Year, Semister, sectionnum)}
                >
                  Class {sectionnum} Student List
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginLeft: 60 }}
                  onClick={() => handleassigninstructor(Year, Semister)}
                >
                  Assign instructor
                </Button>
              </div>

              {sectionedstudents == null ? null : (
                <div style={{ display: secstuddisplay }}>
                  <Typography variant="h5">Section Students list</Typography>
                  <div style={{ height: 250, overflow: "auto" }}>
                    <table border="3" cellSpacing="5" cellPadding="20">
                      <thead style={{ marginRight: 50 }}>
                        <tr>
                          <th>No.</th>
                          <th>First Name</th>
                          <th>Middle Name</th>
                          <th>Last Name</th>
                          <th>Sex</th>
                          <th>Email Address</th>
                        </tr>
                      </thead>
                      {/* {students.length == 0 ? (
                        <tbody>
                          <tr>
                            <td colSpan="6" style={{ color: "red" }}>
                              There are no records
                            </td>
                          </tr>
                        </tbody>
                      ) : null} */}

                      {sectionedstudents.map((item, idx) => {
                        return (
                          <tbody key={idx}>
                            <tr>
                              <td>{idx + 1}</td>
                              <td>{item.Firstname}</td>
                              <td>{item.Middlename}</td>
                              <td>{item.Lastname}</td>
                              <td>{item.Sex}</td>
                              <td>{item.Email}</td>
                            </tr>
                          </tbody>
                        );
                      })}
                    </table>
                  </div>
                </div>
              )}

              <div style={{ display: assigninstructor }}>
                <strong>
                  <p>Select the instructor</p>
                </strong>
                {instructors != null ? (
                  instructors.map((item, idx) => {
                    return (
                      <div key={idx}>
                        <input
                          type="checkbox"
                          value={item.Instructorfname}
                          id={idx}
                          name={item.InstructorFname}
                          onChange={(event) =>
                            handleselectedinstructor(event, item._id)
                          }
                        />
                        <label htmlFor={idx}>
                          {" "}
                          {item.Instructorfname} {item.Instructormname}{" "}
                          {item.Instructorlname}
                        </label>
                      </div>
                    );
                  })
                ) : (
                  <p style={{ color: "red" }}>The instructor list is empty</p>
                )}

                <strong>
                  <p>Select the Course</p>
                </strong>
                {semisteredcourses.length != 0 ? (
                  semisteredcourses.map((item, idx) => {
                    return (
                      <div key={idx}>
                        {item.Courses.map((item2, idx2) => {
                          return (
                            <div key={idx2}>
                              <input
                                type="checkbox"
                                value={item2}
                                id={idx2 + item2}
                                name={item2}
                                onChange={handleselectedcourse}
                              />
                              <label htmlFor={idx2 + item2}> {item2}</label>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })
                ) : (
                  <p style={{ color: "red" }}>The course list is empty</p>
                )}

                <Button
                  variant="contained"
                  style={{
                    marginTop: 20,
                    marginLeft: 50,
                    width: 100,
                    color: "green",
                  }}
                  onClick={handleassigninstructordone}
                >
                  Done
                </Button>
              </div>

              {students.length != 0 && classarray.length == 0 ? (
                <div>
                  <Button
                    variant="outlined"
                    color="primary"
                    style={{ marginLeft: 200, marginTop: 100 }}
                    onClick={handleopen}
                  >
                    Create Section
                  </Button>

                  <div style={{ display: open, marginBottom: 100 }}>
                    <TextField
                      name="Classno"
                      label="No of Classes"
                      value={Classno}
                      onChange={(e) => changer(e)}
                      style={{ marginLeft: 50 }}
                    />

                    <TextField
                      name="Studentno"
                      label="No of Students"
                      value={Studentno}
                      onChange={(e) => changer(e)}
                      style={{ marginLeft: 50 }}
                    />

                    <Button
                      variant="contained"
                      style={{
                        marginTop: 20,
                        marginLeft: 50,
                        width: 100,
                        color: "green",
                      }}
                      onClick={createclasshandler}
                    >
                      Done
                    </Button>
                  </div>
                </div>
              ) : null}
            </div>
          )}
        </Grid>
      </Grid>

      <Footer />
    </Fragment>
  );
};

// Studentstaff.propTypes = {
//     giveapplication: PropTypes.func.isRequired
//   };

const mapStateToProps = (state) => ({
  // studapplication: state.reducer.studapplication,
  // loading: state.reducer.loading,

  // loading: state.survey.loading
  user: state.authreducer.user,
  students: state.students.students,
  sectionedstudents: state.students.sectionedstudents,
  courses: state.course.courses,
  instructors: state.instructor.instructors,
  semisteredcourses: state.course.semisteredcourses,
});

export default connect(mapStateToProps, {
  loaduser,
  selectedstudents,
  createclass,
  selectsectioned,
  getcourses,
  getinstructor,
  getsemisteredcourses,
  sendassigninstructor,
})(Studentstaff);

//export default Studentstaff;
