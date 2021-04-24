import {
  GET_INSTRUCTOR_JOB,
  GET_INSTRUCTOR_STUDENT_GRADE,
  GET_STUDENT_COURSE_REGISTERED,
  SET_TEMPJOB,
  SET_ATTENDANCE_HEADER,
  SET_INSTRUCTOR_ID,
  GET_DEPARTMENT_NAME,
} from "./type";
import axios from "axios";

export const getinstructorjob = (id) => async (dispatch) => {
  //  console.log("inside the getmysurvey action");
  //dispatch(loaduser());

  console.log("the coming id is " + id);

  try {
    ///////////making the application approved
    const res = await axios.get(`/api/instructorjob/${id}`);
    // console.log("the result of giveapplication in action is", res.data);

    dispatch({
      type: GET_INSTRUCTOR_JOB,
      payload: res.data,
    });
  } catch (err) {
    console.log("there is some error while fetching survey for you");
    console.error(err.message);
  }
};

export const getinstructorstudentgrade = (
  Department,
  Year,
  Semister,
  Section
) => async (dispatch) => {
  console.log("inside the getinstructorstudentgrade action");
  //dispatch(loaduser());

  // console.log("the coming id is " + id);

  try {
    ///////////making the application approved
    const res = await axios.get(
      `/api/instructorstudents?Department=${Department}&Year=${Year}&Semister=${Semister}&Section=${Section}`
    );
    // console.log("the result of giveapplication in action is", res.data);

    dispatch({
      type: GET_INSTRUCTOR_STUDENT_GRADE,
      payload: res.data,
    });
  } catch (err) {
    console.log("there is some error while ferching survey for you");
    console.error(err.message);
  }
};

export const getstudentscourseregistered = (
  Department,
  Year,
  Semister,
  Section
) => async (dispatch) => {
  console.log("inside the getstudentscourseregistered action");
  //dispatch(loaduser());

  // console.log("the coming id is " + id);

  try {
    ///////////making the application approved
    const res = await axios.get(
      `/api/studentcoursereg?Department=${Department}&Year=${Year}&Semister=${Semister}&Section=${Section}`
    );
    // console.log("the result of giveapplication in action is", res.data);

    dispatch({
      type: GET_STUDENT_COURSE_REGISTERED,
      payload: res.data,
    });
  } catch (err) {
    console.log("there is some error while fetching data for you");
    console.error(err.message);
  }
};

export const updatetempjob = (Coursename) => async (dispatch) => {
  console.log("inside the updatetempjob action");
  //dispatch(loaduser());

  // console.log("the coming id is " + id);

  try {
    ///////////making the application approved

    dispatch({
      type: SET_TEMPJOB,
      payload: Coursename,
    });
  } catch (err) {
    console.log("there is some error while fetching data for you");
    console.error(err.message);
  }
};

export const updateinstructorid = (Instructorid) => async (dispatch) => {
  console.log("inside the updatetempjob action");
  //dispatch(loaduser());

  // console.log("the coming id is " + id);

  try {
    ///////////making the application approved

    dispatch({
      type: SET_INSTRUCTOR_ID,
      payload: Instructorid,
    });
  } catch (err) {
    console.log("there is some error while fetching data for you");
    console.error(err.message);
  }
};

export const updatedepartmentname = (Departmentname) => async (dispatch) => {
  console.log("inside the updatetempjob action");
  //dispatch(loaduser());

  // console.log("the coming id is " + id);

  try {
    ///////////making the application approved

    dispatch({
      type: GET_DEPARTMENT_NAME,
      payload: Departmentname,
    });
  } catch (err) {
    console.log("there is some error while fetching data for you");
    console.error(err.message);
  }
};

export const updateattendanceheader = (Year, Semister, Section) => async (
  dispatch
) => {
  console.log("inside the updatetempjob action");
  //dispatch(loaduser());

  // console.log("the coming id is " + id);
  const temp = [Year, Semister, Section];

  try {
    ///////////making the application approved

    dispatch({
      type: SET_ATTENDANCE_HEADER,
      payload: temp,
    });
  } catch (err) {
    console.log("there is some error while fetching data for you");
    console.error(err.message);
  }
};

export const setgrade = (
  Studid,
  Year,
  Semister,
  Section,
  Course,
  Grade
) => async (dispatch) => {
  // console.log("inside the login");
  const newgrade = {
    Studid,
    Year,
    Semister,
    Section,
    Course,
    Grade,
  };

  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  const body = JSON.stringify(newgrade);

  try {
    //console.log("i am in the login try");
    const res = await axios.post("/api/gradestaff", body, config);
    // console.log("the res.data value is that ",res.data)

    console.log(res);
  } catch (err) {
    //  console.log("i am in login catch");
    //console.log("the main error is that ", err.response.data.errors);

    const errors = err.response.data.errors;
    console.log("the error is", errors);

    // if (errors) {
    //   errors.forEach((err) => {
    //     dispatch(setalert(err.msg, "danger"));
    //   });
    // }

    console.error(err.message);
  }
};
