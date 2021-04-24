import { GET_COURSES, GET_SEMISTERED_COURSES } from "../Action/type";
import axios from "axios";

import setalert from "./alert";

export const addcourse = (
  Coursename,
  Coursecode,
  Credithour,
  Prerequisite
) => async (dispatch) => {
  // console.log("inside the login");
  const newcourse = {
    Coursename,
    Coursecode,
    Credithour,
    Prerequisite,
  };

  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  const body = JSON.stringify(newcourse);

  try {
    //console.log("i am in the login try");
    const res = await axios.post("/api/course", body, config);
    // console.log("the res.data value is that ",res.data)

    console.log(res);
  } catch (err) {
    //  console.log("i am in login catch");
    //console.log("the main error is that ", err.response.data.errors);

    const errors = err.response.data.errors;
    console.log("the error is", errors);
    // console.log("the length of the error array is", errors.length);

    if (errors) {
      errors.forEach((err) => {
        dispatch(setalert(err.msg, "danger"));
      });
    }

    //   dispatch({
    //     type: LOGIN_FAIL
    //   });
    console.error(err.message);
  }
};

export const getcourses = () => async (dispatch) => {
  //  console.log("inside the getmysurvey action");
  //dispatch(loaduser());
  try {
    const res = await axios.get(`/api/course`);
    console.log("the result of givecourse in action is", res.data);

    dispatch({
      type: GET_COURSES,
      payload: res.data,
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

export const getcourseforstudents = (Departmentname) => async (dispatch) => {
  //  console.log("inside the getmysurvey action");
  //dispatch(loaduser());
  try {
    const res = await axios.get(`/api/courseforstudents?Departmentname=${Departmentname}`);
    console.log("the result of givecourse in action is", res.data);

    dispatch({
      type: GET_COURSES,
      payload: res.data,
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

export const getsemisteredcourses = (Year, Semister) => async (dispatch) => {
  //  console.log("inside the getmysurvey action");
  //dispatch(loaduser());
  try {
    const res = await axios.get(
      `/api/semisteredcourses?Year=${Year}&Semister=${Semister}`
    );
    console.log("the result of getsemisteredcourses in action is", res.data);

    dispatch({
      type: GET_SEMISTERED_COURSES,
      payload: res.data,
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

export const getsemisteredcoursesstudent = (Year, Semister) => async (
  dispatch
) => {
  //  console.log("inside the getmysurvey action");
  //dispatch(loaduser());
  try {
    const res = await axios.get(
      `/api/semisteredcoursesstudent?Year=${Year}&Semister=${Semister}`
    );
    console.log("the result of getsemisteredcourses in action is", res.data);

    dispatch({
      type: GET_SEMISTERED_COURSES,
      payload: res.data,
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
