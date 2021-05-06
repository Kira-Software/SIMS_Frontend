//import {LOGIN_SUCCESS, LOGOUT} from "../Action/type"
import axios from "axios";

import setalert from "./alert";

export const adddepartment = (Departmentname, Duration, Password) => async (
  dispatch
) => {
  // console.log("inside the login");
  const newdepartment = {
    Departmentname,
    Duration,
    Password,
  };

  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  const body = JSON.stringify(newdepartment);

  try {
    //console.log("i am in the login try");
    const res = await axios.post("/api/adddepartment", body, config);
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

export const changedepartmentpassword = (Departmentname, Newpassword) => async (
  dispatch
) => {
  // console.log("inside the login");
  const newdepartment = {
    Departmentname,
    Newpassword,
  };

  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  const body = JSON.stringify(newdepartment);

  try {
    //console.log("i am in the login try");
    const res = await axios.patch("/api/adddepartment", body, config);
    // console.log("the res.data value is that ",res.data)

    console.log(res);
    if (res.data === "OK") {
      dispatch(setalert("Password resetted", "done"));
    }
  } catch (err) {
    //  console.log("i am in login catch");
    //console.log("the main error is that ", err.response.data.errors);

    // const errors = err.response.data.errors;
    // console.log("the error is", errors);
    // // console.log("the length of the error array is", errors.length);

    // if (errors) {
    //   errors.forEach(err => {
    //     dispatch(setalert(err.msg, "danger"));
    //   });
    // }

    //   dispatch({
    //     type: LOGIN_FAIL
    //   });
    console.error(err.message);
  }
};

export const blockdepartmentaccount = (Departmentname, kind) => async (
  dispatch
) => {
  // console.log("inside the login");
  const newdepartment = {
    Departmentname,
    kind,
  };

  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  const body = JSON.stringify(newdepartment);

  try {
    //console.log("i am in the login try");
    // if (kind === "block") {
    //   dispatch(setalert("Account Blocked", "danger"));
    // } else if (kind === "unblock") {
    //   dispatch(setalert("Account Unblocked successfully!", "done"));
    // }
    const res = await axios.patch("/api/accountblock", body, config);
    if (res.data === "Blocked") {
      dispatch(setalert("Account Blocked", "danger"));
    } else {
      dispatch(setalert("Account Unblocked!", "done"));
    }

    console.log(res);
  } catch (err) {
    console.error(err.message);
  }
};
