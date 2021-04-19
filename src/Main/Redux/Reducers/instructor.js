import {
  GET_INSTRUCTORS,
  CLEAR_INSTRUCTORS,
  GET_INSTRUCTOR_JOB,
  SET_TEMPJOB,
  GET_INSTRUCTOR_ASSESSMENT,
  GET_INSTRUCTOR_MARK,
  SET_ATTENDANCE_HEADER,
  SET_MARK_ONLY,
} from "../Action/type";

const initialstate = {
  loading: true,
  instructors: [],
  instructorjob: [],
  tempjob: null,
  instructorassessment: [],
  instructormark: [],
  attendanceheader: [],
  markonly: [],
};

export default function (state = initialstate, action) {
  const { type, payload } = action;
  // console.log("inside of the reducer");

  switch (type) {
    case GET_INSTRUCTORS:
      return {
        ...state,
        instructors: payload,
        loading: false,
      };
    case CLEAR_INSTRUCTORS:
      return {
        ...state,
        instructors: null,
        loading: false,
      };

    case GET_INSTRUCTOR_JOB:
      return {
        ...state,
        instructorjob: payload,
        loading: false,
      };

    case SET_TEMPJOB:
      return {
        ...state,
        tempjob: payload,
        loading: false,
      };

    case GET_INSTRUCTOR_ASSESSMENT:
      return {
        ...state,
        instructorassessment: payload,
        loading: false,
      };

    case GET_INSTRUCTOR_MARK:
      return {
        ...state,
        instructormark: payload,
        loading: false,
      };

    case SET_ATTENDANCE_HEADER:
      return {
        ...state,
        attendanceheader: payload,
        loading: false,
      };
    case SET_MARK_ONLY:
      return {
        ...state,
        markonly: payload,
        loading: false,
      };

    default:
      return state;
  }
}
