import { GET_COURSES,CLEAR_COURSES,GET_ASSIGNED_COURSES,GET_SEMISTERED_COURSES} from "../Action/type"

const initialstate = {
  loading: true,
  courses: [],
  assignedcourses : [],
  semisteredcourses : []

};

export default function(state = initialstate, action) {
  const { type, payload } = action;
 // console.log("inside of the reducer");
  
  switch (type) {

    case GET_COURSES:
      return {
        ...state,
        courses: payload,
        loading: false
        
      };
      case CLEAR_COURSES:
        return {
          ...state,
          courses: null,
          loading: false
          
        };

        case GET_ASSIGNED_COURSES:
          return {
            ...state,
            assignedcourses: payload,
            loading: false
            
          };

          case GET_SEMISTERED_COURSES:
            return {
              ...state,
              semisteredcourses: payload,
              loading: false
              
            };

    default:
      return state;
  }
}
