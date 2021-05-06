//import { GET_COURSES, GET_SEMISTERED_COURSES } from "../Action/type";
import axios from "axios";

import setalert from "./alert";
import { GET_SPECIAL_ENTRY } from "./type";

export const createspecialentry = (
  Id,
  Department,
  Year,
  Semister,
  Section,
  Coursename
) => async (dispatch) => {
  // console.log("inside the login");
  const newspecial = {
    Id,
    Department,
    Year,
    Semister,
    Section,
    Coursename,
  };

  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  const body = JSON.stringify(newspecial);

  try {
    const res = await axios.post("/api/specialentry", body, config);
    // console.log("the res.data value is that ",res.data)

    console.log(res);
    dispatch(setalert("Calendar created successfully!", "done"));
  } catch (err) {
    console.error("the error is", err.message);
  }
};

export const getspecialentry = () => async (dispatch) => {
  //  console.log("inside the getmysurvey action");
  //dispatch(loaduser());
  try {
    const res = await axios.get(`/api/specialentry`);
    console.log("the result of special entry in action is", res.data);

    dispatch({
      type: GET_SPECIAL_ENTRY,
      payload: res.data,
    });

    // console.log("the res.data value is ", res.data)
  } catch (err) {
    console.log("there is some error while feching special entry list for you");
    console.error(err.message);
  }
};

export const submitspecialentry = (
  Year,
  Semister,
  Section,
  Department,
  Coursename,

) => async (dispatch) => {
  // console.log("inside the login");
  const newspecialentry = {
    Year,
    Semister,
    Section,
    Department,
    Coursename,

  };

  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  const body = JSON.stringify(newspecialentry);

  try {
    const res = await axios.patch("/api/specialentryapproval", body, config);
    // console.log("the res.data value is that ",res.data)

    console.log(res);
    dispatch(setalert("special entry submitted!", "done"));
   // dispatch(getinstructorspecial entry());

  } catch (err) {
    console.error("the error is", err.message);
  }
};

export const getinstructorspecialentry = () => async (dispatch) => {
  //  console.log("inside the getmysurvey action");
  //dispatch(loaduser());
  try {
    const res = await axios.get(`/api/specialentryapproval`);
    console.log("the result of special entry in action is", res.data);

    dispatch({
      type: GET_SPECIAL_ENTRY,
      payload: res.data,
    });

    // console.log("the res.data value is ", res.data)
  } catch (err) {
    console.log("there is some error while feching special entry list for you");
    console.error(err.message);
  }
};
