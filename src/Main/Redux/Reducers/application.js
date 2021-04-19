import { POST_APPLICATION,GET_APPLICATION} from "../Action/type"

const initialstate = {
  sendapplication: null,
  loading: true,
  studapplication: null
};

export default function(state = initialstate, action) {
  const { type, payload } = action;
  //console.log("inside of the reducer");
  
  switch (type) {
    case POST_APPLICATION:
      return {
        ...state,
        loading: false,
        sendapplication: payload
      };

    case GET_APPLICATION:
      return {
        ...state,
        studapplication: payload,
        loading: false
        
      };

    default:
      return state;
  }
}
