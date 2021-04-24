import {
  GET_STUDENTS,
  CLEAR_STUDENTS,
  GET_SECTIONED_STUDENTS,
  CLEAR_SECTIONED_STUDENTS,
  GET_INSTRUCTOR_STUDENT_GRADE,
  GET_STUDENT_COURSE_REGISTERED,
  GET_STUDENT_GRADES,
  GET_STUDENT_COURSES,
  GET_ADD_SEMISTER_COURSES,
  GET_ADD_TAKEN_COURSES,
  GET_WITHDRAWAL,
  GET_ALL_COURSES,
  GET_NEW_STUDENT_GRADE,
} from "../Action/type";

const initialstate = {
  loading: true,
  students: null,
  sectionedstudents: null,
  instructorstudents: [],
  studentscourseregistered: [],
  studentgrades: [],
  studentcourses: [],

  addsemistercourses: [],
  addtakencourses: [],

  withdrawstud: [],
  allcourses: [],
  newstudentgrade: [],
};

export default function (state = initialstate, action) {
  const { type, payload } = action;
  // console.log("inside of the reducer");

  switch (type) {
    case GET_STUDENTS:
      return {
        ...state,
        students: payload,
        loading: false,
      };
    case CLEAR_STUDENTS:
      return {
        ...state,
        students: null,
        loading: false,
      };

    case GET_SECTIONED_STUDENTS:
      return {
        ...state,
        sectionedstudents: payload,
        loading: false,
      };

    case CLEAR_SECTIONED_STUDENTS:
      return {
        ...state,
        sectionedstudents: null,
        loading: false,
      };

    case GET_INSTRUCTOR_STUDENT_GRADE:
      return {
        ...state,
        instructorstudents: payload,
        loading: false,
      };

    case GET_STUDENT_COURSE_REGISTERED:
      return {
        ...state,
        studentscourseregistered: payload,
        loading: false,
      };

    case GET_STUDENT_GRADES:
      return {
        ...state,
        studentgrades: payload,
        loading: false,
      };

    case GET_STUDENT_COURSES:
      return {
        ...state,
        studentcourses: payload,
        loading: false,
      };

    case GET_ADD_SEMISTER_COURSES:
      return {
        ...state,
        addsemistercourses: payload,
        loading: false,
      };

    case GET_ADD_TAKEN_COURSES:
      return {
        ...state,
        addtakencourses: payload,
        loading: false,
      };

    case GET_WITHDRAWAL:
      return {
        ...state,
        withdrawstud: payload,
        loading: false,
      };

    case GET_ALL_COURSES:
      return {
        ...state,
        allcourses: payload,
        loading: false,
      };

    case GET_NEW_STUDENT_GRADE:
      return {
        ...state,
        newstudentgrade: payload,
        loading: false,
      };
    default:
      return state;
  }
}
