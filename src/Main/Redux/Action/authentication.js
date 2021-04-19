import {
  LOGIN_SUCCESS,
  LOGOUT,
  CLEAR_INSTRUCTORS,
  CLEAR_STUDENTS,
  USER_LOADED,
  AUTH_ERROR,
} from "../Action/type";
import axios from "axios";

import setalert from "./alert";
import setAuthToken from "../../utils/setAuthToken";

export const loaduserstud = () => async (dispatch) => {
  // console.log("inside the loaduser function");
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("/api/userlogin");
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

export const login = (Id, Temppass, Newpass) => async (dispatch) => {
  // console.log("inside the login");
  const newuser = {
    Id,
    Temppass,
    Newpass,
  };

  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  const body = JSON.stringify(newuser);

  try {
    //console.log("i am in the login try");
    const res = await axios.post("/api/userlogin", body, config);
    console.log("the res.data value is that ", res.data);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loaduserstud());

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

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
  dispatch({
    type: CLEAR_INSTRUCTORS,
  });

  dispatch({
    type: CLEAR_STUDENTS,
  });
  // dispatch({
  //   type: CLEAR_MYSURVEY
  // });
};
