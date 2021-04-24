import {
  // GET_DEPARTMENT_APPROVAL_REQUEST,
  // SET_INSTRUCTOR_ID,
  GET_REGISTRAR_APPROVAL_DISPLAY,
  GET_FINAL_APPROVAL_REQUEST,
  CLEAR_FINAL_APPROVAL_REQUEST,
  GET_DEPARTMENT_NAME,
} from "../Action/type";

const initialstate = {
  // departmentapprovalrequests: [],
  loading: true,
  //Instructorid: null,
  registrarrequest: [],
  finalapproved: [],
  departmentname: null,
};

export default function (state = initialstate, action) {
  const { type, payload } = action;
  //console.log("inside of the reducer");

  switch (type) {
    case GET_REGISTRAR_APPROVAL_DISPLAY:
      return {
        ...state,
        registrarrequest: payload,
        loading: false,
      };

    case GET_FINAL_APPROVAL_REQUEST:
      return {
        ...state,
        finalapproved: payload,
        loading: false,
      };

    case CLEAR_FINAL_APPROVAL_REQUEST:
      return {
        ...state,
        finalapproved: payload,
        loading: false,
      };

    case GET_DEPARTMENT_NAME:
      return {
        ...state,
        departmentname: payload,
        loading: false,
      };
    //   case SET_INSTRUCTOR_ID:
    //     return {
    //       ...state,
    //       Instructorid: payload,
    //       loading: false,
    //     };

    //     case GET_REGISTRAR_APPROVAL_REQUEST:
    //       return {
    //         ...state,
    //         departmentrequest: payload,
    //         loading: false,
    //       };

    default:
      return state;
  }
}
