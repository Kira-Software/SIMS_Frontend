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
//import {giveapplication} from "../Redux/Action/giveapplication"
import { loaduserstud } from "../Redux/Action/authentication";
import {
  getaddsemistercourses,
  getaddtakencourses,
  addcourse,
} from "../Redux/Action/studentaddcourse";

import { getallcourses } from "../Redux/Action/studentcourse";

const Addcourse = ({
  isauthenticated,
  loaduserstud,
  user,
  getaddsemistercourses,
  getaddtakencourses,
  addsemistercourses,
  addtakencourses,
  addcourse,
  allcourses,
  getallcourses,
}) => {
  useEffect(() => {
    loaduserstud();
  }, []);

  const [adddisplay, setadddisplay] = useState("none");

  const handleselect = () => {
    if (adddisplay === "none") {
      setadddisplay("block");
      getaddsemistercourses(user.Semister);
      getaddtakencourses();
      getallcourses(user.Field);
    } else {
      setadddisplay("none");
    }
  };

  const [formdata, setformdata] = useState({
    Courses: [],
  });

  const { Courses } = formdata;

  const handlecheckbox = (event) => {
    let val = event.target.value;
    let checking = document.getElementById(event.target.id).checked;
    //console.log("the target check value is ",document.getElementById(event.target.id).checked )

    if (checking === false) {
      console.log("the target check value is ", checking);

      if (Courses.includes(val)) {
        // let x = indexOf(val)
        let j;
        for (let i = 0; i < Courses.length; i++) {
          if (val == Courses[i]) {
            j = i;
          }
        }
        Courses.splice(j, 1);
      }
    } else if (checking === true) {
      console.log("the target check value is ", checking);

      Courses.push(val);
    }
    // else{
    //   Courses.push(val)
    // }
    console.log("the value of the the courses array is " + Courses);
  };

  const handleaddcourse = () => {
    addcourse(Courses);
  };

  // if (!isauthenticated) {
  //   return <Redirect to="/login" />;
  // }

  let localsemisteredcourses = [];
  let localtakencourses = [];
  let localallcourses = [];

  return (
    <Fragment>
      <Header name={user !== null ? user.Firstname : null} />

      {/* <h3>Inside addcourse Component</h3> */}

      <Button
        style={{ marginTop: 50, marginLeft: 50 }}
        variant="outlined"
        color="primary"
        onClick={handleselect}
      >
        {" "}
        Choose course
      </Button>

      <div style={{ display: adddisplay }}>
        {" "}
        {addsemistercourses.length !== 0
          ? addsemistercourses.map((item, idx) => {
              return (
                <div key={idx}>
                  {item.Courses.map((item2, idx2) => {
                    localsemisteredcourses.push(item2);
                  })}
                </div>
              );
            })
          : null}
        {addtakencourses.map((item, idx) => {
          console.log(
            "the value of the localtakencourses is ",
            localtakencourses
          );
          return (
            <div key={idx}>
              {item.Registeredcourses.map((item2, idx2) => {
                if (localsemisteredcourses.includes(item2)) {
                  // let x = indexOf(item2)
                  let j;
                  for (let i = 0; i < localsemisteredcourses.length; i++) {
                    if (item2 == localsemisteredcourses[i]) {
                      j = i;
                    }
                  }
                  localsemisteredcourses.splice(j, 1);
                }
                // console.log(
                //   "the value of localsemisteredcourses is ",
                //   localsemisteredcourses
                // );
              })}

              {item.Takencourses.map((item2, idx2) => {
                localtakencourses.push(item2);
                if (localsemisteredcourses.includes(item2)) {
                  // let x = indexOf(item2)
                  let j;
                  for (let i = 0; i < localsemisteredcourses.length; i++) {
                    if (item2 == localsemisteredcourses[i]) {
                      j = i;
                    }
                  }
                  localsemisteredcourses.splice(j, 1);
                }
                // console.log(
                //   "the value of localsemisteredcourses is ",
                //   localsemisteredcourses
                // );
              })}
            </div>
          );
        })}
        {allcourses.length !== 0
          ? allcourses.map((item, idx) => {
              {
                localallcourses.push(item.Coursename);
              }
            })
          : null}
        {allcourses.length !== 0
          ? allcourses.map((itemall, idxall) => {
              //console.log("the value of localallcourses is", localallcourses);
              if (localsemisteredcourses.includes(itemall.Coursename)) {
                itemall.Prerequisite.map((itempre, idxpre) => {
                  if (
                    !localtakencourses.includes(itempre) &&
                    localallcourses.includes(itempre)
                  ) {
                    let j;
                    for (let i = 0; i < localsemisteredcourses.length; i++) {
                      if (itemall.Coursename == localsemisteredcourses[i]) {
                        j = i;
                      }
                    }
                    localsemisteredcourses.splice(j, 1);
                  }
                });
              }
            })
          : null}
        {localsemisteredcourses.length !== 0
          ? localsemisteredcourses.map((item2, idx2) => {
              return (
                <div key={idx2}>
                  <input
                    type="checkbox"
                    value={item2}
                    id={idx2 + item2}
                    name={item2}
                    onChange={handlecheckbox}
                  />
                  <label htmlFor={idx2 + item2}> {item2}</label>
                </div>
              );
            })
          : null}
        <Button
          variant="contained"
          style={{
            marginTop: 20,
            marginLeft: 50,
            width: 100,
            color: "green",
          }}
          onClick={handleaddcourse}
        >
          Add
        </Button>{" "}
      </div>
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
  sectionedstudents: state.students.sectionedstudents,
  addsemistercourses: state.students.addsemistercourses,
  addtakencourses: state.students.addtakencourses,
  allcourses: state.students.allcourses,
});

export default connect(mapStateToProps, {
  loaduserstud,
  getaddsemistercourses,
  getaddtakencourses,
  addcourse,
  getallcourses,
})(Addcourse);

//export default Addcourse;
