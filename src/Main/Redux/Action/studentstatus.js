import {
  GET_STUDENT_COURSES,
  GET_STUDENT_GRADES
  } from "./type";
  import axios from "axios";
  
  export const getgrades = (id) => async (dispatch) => {
    //  console.log("inside the getmysurvey action");
    //dispatch(loaduser());
  
    console.log("the coming id is " + id);
  
    try {
      ///////////making the application approved
      const res = await axios.get(`/api/getmygrades/${id}`);
      // console.log("the result of giveapplication in action is", res.data);
  
      dispatch({
        type: GET_STUDENT_GRADES,
        payload: res.data,
      });
    } catch (err) {
      console.log("there is some error while fetching grades for you");
      console.error(err.message);
    }
  };

  export const getcourses = (id) => async (dispatch) => {
    //  console.log("inside the getmysurvey action");
    //dispatch(loaduser());
  
    console.log("the coming id is " + id);
  
    try {
      ///////////making the application approved
      const res = await axios.get(`/api/getmycourses/${id}`);
      // console.log("the result of giveapplication in action is", res.data);
  
      dispatch({
        type: GET_STUDENT_COURSES,
        payload: res.data,
      });
    } catch (err) {
      console.log("there is some error while fetching courses for you");
      console.error(err.message);
    }
  };