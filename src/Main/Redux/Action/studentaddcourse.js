import { GET_ADD_TAKEN_COURSES, GET_ADD_SEMISTER_COURSES } from "./type";
import axios from "axios";

export const getaddsemistercourses = (Semister) => async (dispatch) => {
  //  console.log("inside the getmysurvey action");
  //dispatch(loaduser());

  // console.log("the coming id is " + id);

  try {
    ///////////making the application approved
    const res = await axios.get(`/api/getsemistercourses?Semister=${Semister}`);
    // console.log("the result of giveapplication in action is", res.data);

    dispatch({
      type: GET_ADD_SEMISTER_COURSES,
      payload: res.data,
    });
  } catch (err) {
    console.log(
      "there is some error while fetching add semister courses for you"
    );
    console.error(err.message);
  }
};

export const getaddtakencourses = () => async (dispatch) => {
  //  console.log("inside the getmysurvey action");
  //dispatch(loaduser());

  //  console.log("the coming id is " + id);

  try {
    ///////////making the application approved
    const res = await axios.get(`/api/takencourse`);
    // console.log("the result of giveapplication in action is", res.data);

    dispatch({
      type: GET_ADD_TAKEN_COURSES,
      payload: res.data,
    });
  } catch (err) {
    console.log("there is some error while fetching taken courses for you");
    console.error(err.message);
  }
};

export const addcourse = (Courses) => async (dispatch) => {
  console.log("inside the studentcourse add  action file");
  //   console.log(
  //     "the value of year and semister and courses is " + Year,
  //     Semister,
  //     Courses
  //   );

  const obj = {
    Courses,
  };

  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  const body = JSON.stringify(obj);

  try {
    //console.log("i am in the login try");
    const res = await axios.post("/api/addacourse", body, config);
    // console.log("the res.data value is that ",res.data)

    console.log(res);
  } catch (err) {
    console.log("i am in assigninstructor catch");
    //console.log("the main error is that ", err.response.data.errors);

    const errors = err.response.data.errors;
    console.log("the error is", errors);
    // console.log("the length of the error array is", errors.length);

    console.error(err.message);
  }
};
