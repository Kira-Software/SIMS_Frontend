import { GET_WITHDRAWAL } from "../Action/type";
import axios from "axios";

import setalert from "./alert";

export const studentreadmission = () => async (dispatch) => {
  console.log("inside the studentreadmission action file");

  //   const config = {
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //   };

  //const body = JSON.stringify(obj);

  try {
    //console.log("i am in the login try");
    const res = await axios.delete("/api/readmission");
    // console.log("the res.data value is that ",res.data)

    console.log(res);
  } catch (err) {
    console.log("i am in student readmission catch");
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
