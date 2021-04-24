import {
  GET_DEPARTMENT_APPROVAL_REQUEST,
  SET_INSTRUCTOR_ID,
  GET_REGISTRAR_APPROVAL_REQUEST,
} from "../Action/type";

const initialstate = {
  departmentapprovalrequests: [],
  loading: true,
  Instructorid: null,
  departmentrequest: []
};

export default function (state = initialstate, action) {
  const { type, payload } = action;
  //console.log("inside of the reducer");

  switch (type) {
    case GET_DEPARTMENT_APPROVAL_REQUEST:
      return {
        ...state,
        departmentapprovalrequests: payload,
        loading: false,
      };

    case SET_INSTRUCTOR_ID:
      return {
        ...state,
        Instructorid: payload,
        loading: false,
      };

      case GET_REGISTRAR_APPROVAL_REQUEST:
        return {
          ...state,
          departmentrequest: payload,
          loading: false,
        };

    default:
      return state;
  }
}
