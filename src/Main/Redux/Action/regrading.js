//import { GET_COURSES, GET_SEMISTERED_COURSES } from "../Action/type";
import axios from "axios";

import setalert from "./alert";
import { GET_CALENDAR, GET_REGRADING } from "./type";

export const createregrading = (
  Id,
  Department,
  Year,
  Semister,
  Section,
  Coursename
) => async (dispatch) => {
  // console.log("inside the login");
  const newregrading = {
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

  const body = JSON.stringify(newregrading);

  try {
    const res = await axios.post("/api/regrading", body, config);
    // console.log("the res.data value is that ",res.data)

    console.log(res);
    dispatch(setalert("Calendar created successfully!", "done"));
  } catch (err) {
    console.error("the error is", err.message);
  }
};

export const getregrading = () => async (dispatch) => {
  //  console.log("inside the getmysurvey action");
  //dispatch(loaduser());
  try {
    const res = await axios.get(`/api/regrading`);
    console.log("the result of regrading in action is", res.data);

    dispatch({
      type: GET_REGRADING,
      payload: res.data,
    });

    // console.log("the res.data value is ", res.data)
  } catch (err) {
    console.log("there is some error while feching regrading list for you");
    console.error(err.message);
  }
};

export const submitregrading = (
  Year,
  Semister,
  Section,
  Department,
  Coursename,
  
) => async (dispatch) => {
  // console.log("inside the login");
  const newregrading = {
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

  const body = JSON.stringify(newregrading);

  try {
    const res = await axios.patch("/api/regradingapproval", body, config);
    // console.log("the res.data value is that ",res.data)

    console.log(res);
    dispatch(setalert("regrading submitted!", "done"));
   // dispatch(getinstructorregrading());

  } catch (err) {
    console.error("the error is", err.message);
  }
};

export const getinstructorregrading = () => async (dispatch) => {
  //  console.log("inside the getmysurvey action");
  //dispatch(loaduser());
  try {
    const res = await axios.get(`/api/regradingapproval`);
    console.log("the result of regrading in action is", res.data);

    dispatch({
      type: GET_REGRADING,
      payload: res.data,
    });

    // console.log("the res.data value is ", res.data)
  } catch (err) {
    console.log("there is some error while feching regrading list for you");
    console.error(err.message);
  }
};
