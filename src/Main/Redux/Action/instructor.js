//import {LOGIN_SUCCESS, LOGOUT} from "../Action/type"
import axios from "axios";

import setalert from "./alert";
import {GET_INSTRUCTORS} from "./type"

export const addinstructor = (Instructorfname, Instructormname, Instructorlname, Birthdate, Sex) =>
    async dispatch => {
        // console.log("inside the login");
        const newinstructor = {
            Instructorfname,
            Instructormname,
            Instructorlname,
            Birthdate,
            Sex
        };

        const config = {
            headers: {
                "Content-type": "application/json"
            }
        };

        const body = JSON.stringify(newinstructor);

        try {
            //console.log("i am in the login try");
            const res = await axios.post("/api/instructor", body, config);
            // console.log("the res.data value is that ",res.data)


            console.log(res);
        } catch (err) {
            //  console.log("i am in login catch");
            //console.log("the main error is that ", err.response.data.errors);

            const errors = err.response.data.errors;
            console.log("the error is", errors);
            // console.log("the length of the error array is", errors.length);

            if (errors) {
                errors.forEach(err => {
                    dispatch(setalert(err.msg, "danger"));
                });
            }

            //   dispatch({
            //     type: LOGIN_FAIL
            //   });
            console.error(err.message);
        }
    };

    
export const getinstructor = () => async dispatch => {
    //  console.log("inside the getmysurvey action");
    //dispatch(loaduser());
    try {
      const res = await axios.get(`/api/instructor`);
        console.log("the result of giveinstructor in action is", res.data);
  
      dispatch({
        type: GET_INSTRUCTORS,
        payload: res.data
      });
  
      // dispatch({
      //   type: CLEAR_MYSURVEY
      // });
      //console.log("the value of res.data after dispatch is ", re);
    } catch (err) {
      console.log("there is some error while feching instructors for you");
      console.error(err.message);
    }
};