import React, { Fragment, useState, useEffect, } from "react"

import {
  AppBar, Toolbar, Typography, Paper,
  FormControl, Grid, Button, TextField, FormLabel, RadioGroup, FormControlLabel, Radio,
  FormGroup, Checkbox, CircularProgress
} from "@material-ui/core"


import { connect } from "react-redux";
import PropTypes from "prop-types";

import { docourseassign } from "../Redux/Action/assigncourses"
import { getcourses } from "../Redux/Action/course"
import { loaduser } from "../Redux/Action/mainlogin";


const Assigncourse = ({ courses, user, docourseassign, getcourses, loaduser }) => {

  // useEffect(() => {
  //     giveapplication();
  //   }, []);

  // const [addcourse, setaddcourse] = useState("none")
  // const [displaycourse, setdisplaycourse] = useState("none")
  const [openlist, setopenlist] = useState("none")

  const [formdata, setformdata] = useState({
    Year: null,
    Semister: null,
    Courses: []
  });

  const { Year, Semister, Courses } = formdata;


  let checkarray = []

  const handlecheckbox = (event) => {
    let val = event.target.value
    let checking = document.getElementById(event.target.id).checked
    //console.log("the target check value is ",document.getElementById(event.target.id).checked )

    if (checking === false) {
      console.log("the target check value is ", checking)

      if (Courses.includes(val)) {
        // let x = indexOf(val)
        let j;
        for (let i = 0; i < Courses.length; i++) {
          if (val == Courses[i]) {
            j = i
          }
        }
        Courses.splice(j, 1)
      }
    }

    else if (checking === true) {
      console.log("the target check value is ", checking)

      Courses.push(val)
    }
    // else{
    //   Courses.push(val)
    // }
    console.log("the value of the the courses array is " + Courses)
  }

  const handleassigncourse = () => {
    console.log("the value of year and semister and checkarray is " + Year + Semister + Courses);
    docourseassign(Year, Semister, Courses);

    let temparray = Courses.splice(0, Courses.length)
    setformdata({ ...formdata, Courses: temparray });

    console.log("the value of courses after click is " + Courses)
    // setformdata({ ...formdata, Year: year, Semister: semister });
    //loaduser()
  };

  const handlesearchcourse = (year, semister) => {

    getcourses()
    setformdata({ ...formdata, Year: year, Semister: semister });
    setopenlist("block")

  }

  let data = null;
  if (user != null) {
    data = Object.values(user);
  }

  let newarr = [];


  return (
    <Fragment>

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
                  onClick={() => handlesearchcourse(item, 1)}
                // onClick={handlesearchcourse}

                >
                  Semister 1
                </Button>
                {/* <br></br> <br></br> */}
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginLeft: 60 }}
                  onClick={() => handlesearchcourse(item, 2)}

                // onClick={handlesearchcourse}
                >
                  Semister 2
                </Button>
                {/* <br></br> */}
              </Fragment>
            );
          })}
        </Grid>

        <Grid item lg={7} xl={7}>
          <div style={{ display: openlist }}>
            {Year !== null && Semister !== null ? <p style={{ textDecoration: "underline", marginTop: 100 }}>
              <strong>Select Course Lists For Year {Year} and Semister {Semister} </strong> </p> : null}

            {courses.length != 0 ? courses.map((item, idx) => {
              return (
                <div key={idx}>

                  <input type="checkbox" value={item.Coursename} id={item.Coursename}
                    name={item.Coursename} onChange={handlecheckbox} />
                  <label htmlFor={item.Coursename}> {item.Coursename}</label>
                </div>

              )

            }) : null}

            <Button
              variant="contained"
              style={{
                marginTop: 20,
                marginLeft: 50,
                width: 100,
                color: "green"
              }}
              onClick={handleassigncourse}
            >
              Done
                    </Button>
          </div>

        </Grid>


      </Grid>



    </Fragment>
  )

}

// Assigncourse.propTypes = {
//     giveapplication: PropTypes.func.isRequired
//   };

const mapStateToProps = state => ({
  // studapplication: state.reducer.studapplication,
  // loading: state.reducer.loading,

  // loading: state.survey.loading
  user: state.authreducer.user,
  courses: state.course.courses,
  loading: state.course.loading,
  // assignedcourses: state.course.assignedcourses
});

export default connect(mapStateToProps, { getcourses, docourseassign, loaduser })(Assigncourse);

