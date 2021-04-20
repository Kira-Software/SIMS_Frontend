import { GET_STUDENTS, CLEAR_SECTIONED_STUDENTS, GET_STUDENT_ID } from "./type";
import axios from "axios";


export const selectedstudents = (year, semister) => async dispatch => {
  console.log("the value of year and semister in the action is " + year + semister);
  //dispatch(loaduser());

  // const pa = { year, semister }
  // const body = JSON.stringify(pa)
  // console.log("the value of body after stringify is " + body)

  // const config = {
  //   headers: {
  //     "Content-type": "application/json"
  //   }
  // };
  try {
    const res = await axios.get(`/api/getstudents?year=${year}&semister=${semister}`);

    console.log("the result of selected students in action is", res.data);

    dispatch({
      type: GET_STUDENTS,
      payload: res.data
    });

    dispatch({
      type: CLEAR_SECTIONED_STUDENTS
    });
    //console.log("the value of res.data after dispatch is ", re);
  } catch (err) {
    console.log("there is some error while ferching survey for you");
    console.error(err.message);
  }
};


export const getstudentid = () => async dispatch => {
 
  try {
    const res = await axios.get(`/api/getstudentid`);

    console.log("the result of selected students id in action is", res.data);

    dispatch({
      type: GET_STUDENT_ID,
      payload: res.data
    });

    // dispatch({
    //   type: CLEAR_SECTIONED_STUDENTS
    // });
    //console.log("the value of res.data after dispatch is ", re);
  } catch (err) {
    console.log("there is some error while ferching student id's for you");
    console.error(err.message);
  }
};

