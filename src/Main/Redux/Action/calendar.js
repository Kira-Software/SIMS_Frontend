//import { GET_COURSES, GET_SEMISTERED_COURSES } from "../Action/type";
import axios from "axios";

import setalert from "./alert";
import { GET_CALENDAR } from "./type";

export const createcalendar = (AC, Program, Year, Semister, Calendar) => async (
  dispatch
) => {
  // console.log("inside the login");
  const newcalendar = {
    AC,
    Program,
    Year,
    Semister,
    Calendar,
  };

  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  const body = JSON.stringify(newcalendar);

  try {
    const res = await axios.post("/api/calendar", body, config);
    // console.log("the res.data value is that ",res.data)

    console.log(res);
    dispatch(setalert("Calendar created successfully!", "done"));
  } catch (err) {
    console.error("the error is", err.message);
  }
};

export const getcalendar = (AC, Program, Year, Semister) => async (dispatch) => {
  //  console.log("inside the getmysurvey action");
  //dispatch(loaduser());
  try {
    const res = await axios.get(`/api/calendar?AC=${AC}&Program=${Program}&Year=${Year}&Semister=${Semister}`);
    console.log("the result of calendar in action is", res.data);

    dispatch({
      type: GET_CALENDAR,
      payload: res.data,
    });

   // console.log("the res.data value is ", res.data)
    if(res.data === []){
        console.log("alehuuuu")
        dispatch(setalert("No results found!", "danger"));

    }

    // dispatch({
    //   type: CLEAR_MYSURVEY
    // });
    //console.log("the value of res.data after dispatch is ", re);
  } catch (err) {
    console.log("there is some error while feching calendar for you");
    console.error(err.message);
  }
};

// export const getcourseforstudents = (Departmentname) => async (dispatch) => {
//   //  console.log("inside the getmysurvey action");
//   //dispatch(loaduser());
//   try {
//     const res = await axios.get(
//       `/api/courseforstudents?Departmentname=${Departmentname}`
//     );
//     console.log("the result of givecourse in action is", res.data);

//     dispatch({
//       type: GET_COURSES,
//       payload: res.data,
//     });

//     // dispatch({
//     //   type: CLEAR_MYSURVEY
//     // });
//     //console.log("the value of res.data after dispatch is ", re);
//   } catch (err) {
//     console.log("there is some error while feching instructors for you");
//     console.error(err.message);
//   }
// };

// export const getsemisteredcourses = (Year, Semister) => async (dispatch) => {
//   //  console.log("inside the getmysurvey action");
//   //dispatch(loaduser());
//   try {
//     const res = await axios.get(
//       `/api/semisteredcourses?Year=${Year}&Semister=${Semister}`
//     );
//     console.log("the result of getsemisteredcourses in action is", res.data);

//     dispatch({
//       type: GET_SEMISTERED_COURSES,
//       payload: res.data,
//     });

//     // dispatch({
//     //   type: CLEAR_MYSURVEY
//     // });
//     //console.log("the value of res.data after dispatch is ", re);
//   } catch (err) {
//     console.log("there is some error while feching instructors for you");
//     console.error(err.message);
//   }
// };

// export const getsemisteredcoursesstudent = (Year, Semister) => async (
//   dispatch
// ) => {
//   //  console.log("inside the getmysurvey action");
//   //dispatch(loaduser());
//   try {
//     const res = await axios.get(
//       `/api/semisteredcoursesstudent?Year=${Year}&Semister=${Semister}`
//     );
//     console.log("the result of getsemisteredcourses in action is", res.data);

//     dispatch({
//       type: GET_SEMISTERED_COURSES,
//       payload: res.data,
//     });

//     // dispatch({
//     //   type: CLEAR_MYSURVEY
//     // });
//     //console.log("the value of res.data after dispatch is ", re);
//   } catch (err) {
//     console.log("there is some error while feching instructors for you");
//     console.error(err.message);
//   }
// };
