import {
  GET_INSTRUCTOR_ASSESSMENT,
  GET_INSTRUCTOR_MARK,
  SET_MARK_ONLY,
} from "../Action/type";
import axios from "axios";

import setalert from "./alert";

export const addassessment = (
  Quiz,
  Assignment,
  Project,
  Attendance,
  Final
) => async (dispatch) => {
  console.log("inside the add assessment");
  console.log(
    "the coming values are ",
    Quiz,
    Assignment,
    Project,
    Attendance,
    Final
  );
  const newassessment = {
    Quiz,
    Assignment,
    Project,
    Attendance,
    Final,
  };

  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  const body = JSON.stringify(newassessment);

  try {
    //console.log("i am in the login try");
    const res = await axios.post("/api/markclassification", body, config);
    // console.log("the res.data value is that ",res.data)

    console.log(res);

    dispatch(setalert(["Document updated successfully"], "done"));

    dispatch(getassessment());
  } catch (err) {
    //  console.log("i am in login catch");
    //console.log("the main error is that ", err.response.data.errors);

    const errors = err.response.data.errors;
    console.log("the error is", errors);
    // console.log("the length of the error array is", errors.length);

    // if (errors) {
    //   errors.forEach((err) => {
    //     dispatch(setalert(err.msg, "danger"));
    //   });
    // }

    //   dispatch({
    //     type: LOGIN_FAIL
    //   });
    console.error(err.message);
  }
};

export const getassessment = (Coursename, Year, Semister, Section) => async (
  dispatch
) => {
  //  console.log("inside the getmysurvey action");
  //dispatch(loaduser());
  try {
    const res = await axios.get(`/api/markclassification`);
    console.log("the result of getassessment in action is", res.data);

    dispatch({
      type: GET_INSTRUCTOR_ASSESSMENT,
      payload: res.data,
    });

    // dispatch(getmark(Coursename, Year, Semister, Section));
  } catch (err) {
    console.log("there is some error while getting assessment");
    console.error(err.message);
  }
};

export const setmark = (
  Year,
  Semister,
  Section,
  Coursename,
  Assessment
) => async (dispatch) => {
  // console.log("inside the login");
  const newmark = {
    Year,
    Semister,
    Section,
    Coursename,
    Assessment,
  };

  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  const body = JSON.stringify(newmark);

  try {
    //console.log("i am in the login try");
    const res = await axios.post("/api/markentry", body, config);
    // console.log("the res.data value is that ",res.data)

    console.log(res);
    dispatch(getmark(Coursename, Year, Semister, Section));
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

export const getmark = (Coursename, Year, Semister, Section) => async (
  dispatch
) => {
  console.log("inside of the getmark action");
  console.log(
    "the accepted parameters are ",
    Coursename,
    Year,
    Semister,
    Section
  );

  //dispatch(loaduser());
  try {
    const res = await axios.get(
      `/api/markentry?Coursename=${Coursename}&Year=${Year}&Semister=${Semister}&Section=${Section}`
    );
    console.log("the result of getmark in action is", res.data);

    dispatch({
      type: GET_INSTRUCTOR_MARK,
      payload: res.data,
    });

    res.data.map((data, dataidx) => {
      dispatch({
        type: SET_MARK_ONLY,
        payload: data.Assessment,
      });
    });

    // dispatch({
    //   type: CLEAR_MYSURVEY
    // });
    //console.log("the value of res.data after dispatch is ", re);
  } catch (err) {
    console.log("there is some error while getting mark");
    console.error(err.message);
  }
};

export const getmarkfordept = (
  Coursename,
  Year,
  Semister,
  Section,
  Instructorid
) => async (dispatch) => {
  console.log("inside of the getmarkfordept action");
  console.log(
    "the accepted parameters are ",
    Coursename,
    Year,
    Semister,
    Section,
    Instructorid
  );

  //dispatch(loaduser());
  try {
    const res = await axios.get(
      `/api/instructormarkfordept?Coursename=${Coursename}&Year=${Year}&Semister=${Semister}&Section=${Section}&Instructorid=${Instructorid}`
    );
    console.log("the result of getmark in action is", res.data);

    dispatch({
      type: GET_INSTRUCTOR_MARK,
      payload: res.data,
    });

    res.data.map((data, dataidx) => {
      dispatch({
        type: SET_MARK_ONLY,
        payload: data.Assessment,
      });
    });

    // dispatch({
    //   type: CLEAR_MYSURVEY
    // });
    //console.log("the value of res.data after dispatch is ", re);
  } catch (err) {
    console.log("there is some error while getting mark");
    console.error(err.message);
  }
};

export const getmarkforregistrar = (
  Coursename,
  Year,
  Semister,
  Section,
  Instructorid
) => async (dispatch) => {
  console.log("inside of the getmarkfordept action");
  console.log(
    "the accepted parameters are ",
    Coursename,
    Year,
    Semister,
    Section,
    Instructorid
  );

  //dispatch(loaduser());
  try {
    const res = await axios.get(
      `/api/instructormarkforregistrar?Coursename=${Coursename}&Year=${Year}&Semister=${Semister}&Section=${Section}&Instructorid=${Instructorid}`
    );
    console.log("the result of getmark in action is", res.data);

    dispatch({
      type: GET_INSTRUCTOR_MARK,
      payload: res.data,
    });

    res.data.map((data, dataidx) => {
      dispatch({
        type: SET_MARK_ONLY,
        payload: data.Assessment,
      });
    });

    // dispatch({
    //   type: CLEAR_MYSURVEY
    // });
    //console.log("the value of res.data after dispatch is ", re);
  } catch (err) {
    console.log("there is some error while getting mark");
    console.error(err.message);
  }
};

