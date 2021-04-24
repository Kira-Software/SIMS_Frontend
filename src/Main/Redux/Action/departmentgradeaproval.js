import {
  GET_DEPARTMENT_APPROVAL_REQUEST,
  GET_REGISTRAR_APPROVAL_DISPLAY,
  GET_REGISTRAR_APPROVAL_REQUEST,
} from "./type";
import axios from "axios";

import setalert from "./alert";

//   export const senddeptapproval = (
//     Departmentname,
//     Year,
//     Semister,
//     Section,
//     Coursename,
//     Instructorname
//   ) => async (dispatch) => {
//     const newrequest = {
//       Departmentname,
//       Year,
//       Semister,
//       Section,
//       Coursename,
//       Instructorname,
//     };

//     const config = {
//       headers: {
//         "Content-type": "application/json",
//       },
//     };

//     const body = JSON.stringify(newrequest);

//     try {
//       //console.log("i am in the login try");
//       const res = await axios.post("/api/departmentapproval", body, config);
//       // console.log("the res.data value is that ",res.data)

//       console.log(res);

//       dispatch(
//         getdeptapproval(Departmentname, Year, Semister, Section, Coursename)
//       );
//     } catch (err) {
//       const errors = err.response.data.errors;
//       console.log("the error is", errors);

//       console.error(err.message);
//     }
//   };

export const getdeptapprovalrequests = () => async (dispatch) => {
  //  console.log("inside the getmysurvey action");
  //dispatch(loaduser());
  try {
    const res = await axios.get(`/api/departmentapprovalrequests`);
    console.log("the result of get approval request in action is", res.data);

    dispatch({
      type: GET_DEPARTMENT_APPROVAL_REQUEST,
      payload: res.data,
    });

    //console.log("the fetched dep't approvals in action is ",res);

    // dispatch(getmark(Coursename, Year, Semister, Section));
  } catch (err) {
    console.log("there is some error while getting approval request");
    console.error(err.message);
  }
};

export const getregistrarapprovalrequests = () => async (dispatch) => {
  console.log("inside the getregistrarapprovalrequests action");
  //dispatch(loaduser());
  try {
    const res = await axios.get(`/api/regapprovalrequests`);
    console.log("the result of get approval request in action is", res.data);

    dispatch({
      type: GET_REGISTRAR_APPROVAL_DISPLAY,
      payload: res.data,
    });

    //console.log("the fetched dep't approvals in action is ",res);

    // dispatch(getmark(Coursename, Year, Semister, Section));
  } catch (err) {
    console.log("there is some error while getting approval request");
    console.error(err.message);
  }
};

//   export const setmark = (
//     Year,
//     Semister,
//     Section,
//     Coursename,
//     Assessment
//   ) => async (dispatch) => {
//     // console.log("inside the login");
//     const newmark = {
//       Year,
//       Semister,
//       Section,
//       Coursename,
//       Assessment,
//     };

//     const config = {
//       headers: {
//         "Content-type": "application/json",
//       },
//     };

//     const body = JSON.stringify(newmark);

//     try {
//       //console.log("i am in the login try");
//       const res = await axios.post("/api/markentry", body, config);
//       // console.log("the res.data value is that ",res.data)

//       console.log(res);
//       dispatch(getmark(Coursename, Year, Semister, Section));

//     } catch (err) {
//       //  console.log("i am in login catch");
//       //console.log("the main error is that ", err.response.data.errors);

//       const errors = err.response.data.errors;
//       console.log("the error is", errors);

//       // if (errors) {
//       //   errors.forEach((err) => {
//       //     dispatch(setalert(err.msg, "danger"));
//       //   });
//       // }

//       console.error(err.message);
//     }
//   };
