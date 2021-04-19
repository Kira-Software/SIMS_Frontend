import { GET_SECTIONED_STUDENTS } from "./type";
import axios from "axios";


export const selectsectioned = (year, semister,section) => async dispatch => {
  console.log("the value of year and semister in the action is " + year + semister+section);
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
    const res = await axios.get(`/api/createsection?year=${year}&semister=${semister}&section=${section}`);

    console.log("the result of selected sectioned students in action is", res.data);

    dispatch({
      type: GET_SECTIONED_STUDENTS,
      payload: res.data
    });

    // dispatch({
    //   type: CLEAR_MYSURVEY
    // });
    //console.log("the value of res.data after dispatch is ", re);
  } catch (err) {
    console.log("there is some error while ferching sectioned students for you");
    console.error(err.message);
  }
};

