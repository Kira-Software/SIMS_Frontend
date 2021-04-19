import { GET_WITHDRAWAL } from "../Action/type";
import axios from "axios";

import setalert from "./alert";

export const studentwithdrawal = () => async (dispatch) => {
  console.log("inside the studentwithdraw action file");

  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  //const body = JSON.stringify(obj);

  try {
    //console.log("i am in the login try");
    const res = await axios.post("/api/withdrawal", config);
    // console.log("the res.data value is that ",res.data)

    console.log(res);
  } catch (err) {
    console.log("i am in student withdraw catch");
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

  export const getwithdrawal = () => async dispatch => {
    //  console.log("inside the getmysurvey action");
    //dispatch(loaduser());
    try {
      const res = await axios.get(`/api/withdrawal`);
        console.log("the result of withdrawal in action is", res.data);

      dispatch({
        type: GET_WITHDRAWAL,
        payload: res.data
      });

      // dispatch({
      //   type: CLEAR_MYSURVEY
      // });
      //console.log("the value of res.data after dispatch is ", re);
    } catch (err) {
      console.log("there is some error while feching withdraw data");
      console.error(err.message);
    }
};
