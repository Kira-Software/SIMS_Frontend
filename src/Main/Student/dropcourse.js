import { Button } from "@material-ui/core";
import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import Header from "../Header/headerstudent";
//import {giveapplication} from "../Redux/Action/giveapplication"
import { loaduserstud } from "../Redux/Action/authentication";
import { studentcoursedrop } from "../Redux/Action/studentdrop";
import { getcourses } from "../Redux/Action/studentstatus";

const Dropcourse = ({
  isauthenticated,
  loaduserstud,
  user,
  getcourses,
  studentcourses,
  studentcoursedrop,
}) => {
  useEffect(() => {
    loaduserstud();
  }, []);

  const [displaycourse, setdisplaycourse] = useState("none");

  const handledisplaycourse = (id) => {
    if (displaycourse === "none") {
      getcourses(id);
      setdisplaycourse("block");
    } else {
      setdisplaycourse("none");
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

  const handledrop = () => {
    studentcoursedrop(Courses);
  };
  return (
    <Fragment>
      <Header name={user !== null ? user.Firstname : null} />

      <h3>Course Drop Section</h3>

      <Button
        style={{ marginTop: 50, marginLeft: 100, width: 200 }}
        variant="outlined"
        color="primary"
        onClick={() => handledisplaycourse(user._id)}
      >
        Choose a Course
      </Button>

      <div style={{ display: displaycourse }}>
        {studentcourses.length != 0 ? (
          studentcourses.map((item, idx) => {
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
                        onChange={handlecheckbox}
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
          onClick={handledrop}
        >
          Drop
        </Button>
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
  studentcourses: state.students.studentcourses,
});

export default connect(mapStateToProps, {
  loaduserstud,
  getcourses,
  studentcoursedrop,
})(Dropcourse);

//export default Dropcourse;
