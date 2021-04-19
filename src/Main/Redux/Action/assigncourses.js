import {GET_ASSIGNED_COURSES} from "../Action/type"
import axios from "axios";

import setalert from "./alert";

export const docourseassign = ( Year, Semister, Courses) => async dispatch => {
     console.log("inside the docourseassign action file");
     console.log("the value of year and semister and courses is " + Year, Semister, Courses);

    const newcourse = {
      Year,
      Semister,
      Courses
    };
  
    const config = {
      headers: {
        "Content-type": "application/json"
      }
    };
  
    const body = JSON.stringify(newcourse);
  
    try {
      //console.log("i am in the login try");
      const res = await axios.post("/api/courseassign", body, config);
      // console.log("the res.data value is that ",res.data)
  
  
      console.log(res);
    } catch (err) {
        console.log("i am in assigncourse catch");
      //console.log("the main error is that ", err.response.data.errors);
  
      const errors = err.response.data.errors;
      console.log("the error is", errors);
      // console.log("the length of the error array is", errors.length);
  
      if (errors) {
        errors.forEach(err => {
          dispatch(setalert(err.msg, "danger"));
        });
      }
  
    //   dispatch({
    //     type: LOGIN_FAIL
    //   });
      console.error(err.message);
    }
  };

  export const getassignedcourses = () => async dispatch => {
    //  console.log("inside the getmysurvey action");
    //dispatch(loaduser());
    try {
      const res = await axios.get(`/api/courseassign`);
        console.log("the result of getassignedcourses in action is", res.data);
  
      dispatch({
        type: GET_ASSIGNED_COURSES,
        payload: res.data
      });
  
      // dispatch({
      //   type: CLEAR_MYSURVEY
      // });
      //console.log("the value of res.data after dispatch is ", re);
    } catch (err) {
      console.log("there is some error while feching instructors for you");
      console.error(err.message);
    }
};