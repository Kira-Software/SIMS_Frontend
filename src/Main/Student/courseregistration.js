import { Button } from "@material-ui/core";
import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Header from "../Header/headerstudent";
// import { docourseassign } from "../Redux/Action/assigncourses";
// import { getcourses } from "../Redux/Action/course";
// import { loaduser } from "../Redux/Action/mainlogin";
import { getsemisteredcoursesstudent } from "../Redux/Action/course";
import { studentcoursereg } from "../Redux/Action/studentcourse";

const Courseregistration = ({
  getsemisteredcoursesstudent,
  user,
  loading,
  semisteredcourses,
  isauthenticated,
  studentcoursereg,
}) => {
  //   useEffect(() => {
  //      if(user !==null){
  //          getsemisteredcourses(user.Year, user.Semister);
  //      }
  //     }, []);

  // const [addcourse, setaddcourse] = useState("none")
  // const [displaycourse, setdisplaycourse] = useState("none")
  //   const [openlist, setopenlist] = useState("none");

  const [formdata, setformdata] = useState({
    Courses: [],
  });

  const { Courses } = formdata;

  let checkarray = [];

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

  //   const handleassigncourse = () => {
  //     console.log(
  //       "the value of year and semister and checkarray is " +
  //         Year +
  //         Semister +
  //         Courses
  //     );
  //     docourseassign(Year, Semister, Courses);

  //     let temparray = Courses.splice(0, Courses.length);
  //     setformdata({ ...formdata, Courses: temparray });

  //     console.log("the value of courses after click is " + Courses);
  //     // setformdata({ ...formdata, Year: year, Semister: semister });
  //     //loaduser()
  //   };

  //   const handlesearchcourse = (year, semister) => {
  //     getcourses();
  //     setformdata({ ...formdata, Year: year, Semister: semister });
  //     setopenlist("block");
  //   };

  const [opencourse, setopencourse] = useState("none");

  const handleshowcourse = () => {
    if (user !== null) {
      getsemisteredcoursesstudent(user.Year, user.Semister);
    }

    if (opencourse === "none") {
      setopencourse("block");
    } else {
      setopencourse("none");
    }
  };

  const handleregister = () => {
    studentcoursereg(Courses);
  };

  if (!isauthenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <Fragment>
      <Header name={user !== null ? user.Firstname : null} />
      <Button
        variant="contained"
        style={{
          marginTop: 20,
          marginLeft: 50,
          color: "green",
        }}
        onClick={handleshowcourse}
      >
        Show courses
      </Button>
      {/* {Year !== null && Semister !== null ? (
          <p style={{ textDecoration: "underline", marginTop: 100 }}>
            <strong>
              Select Course Lists For Year {Year} and Semister {Semister}{" "}
            </strong>{" "}
          </p>
        ) : null} */}

      <div style={{ display: opencourse, marginLeft: 200 }}>
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
          onClick={handleregister}
        >
          Register
        </Button>
      </div>
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
  user: state.authreducer.user,
  //   courses: state.course.courses,
  loading: state.course.loading,
  semisteredcourses: state.course.semisteredcourses,
  isauthenticated: state.authreducer.isauthenticated,
});

export default connect(mapStateToProps, {
  getsemisteredcoursesstudent,
  studentcoursereg,
})(Courseregistration);
