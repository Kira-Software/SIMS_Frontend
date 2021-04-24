import { GET_NEW_STUDENT_GRADE } from "./type";

import axios from "axios";

export const getnewstudentgrade = (Year, Semister, Departmentname) => async (
  dispatch
) => {
  try {
    const res = await axios.get(
      `/api/forstudentmarkentries?Year=${Year}&Semister=${Semister}&Departmentname=${Departmentname}`
    );

    console.log("the result value is ", res);

    dispatch({
      type: GET_NEW_STUDENT_GRADE,
      payload: res.data,
    });
  } catch (err) {
    console.log("there is some error and the error is ", err.message);
  }
};
