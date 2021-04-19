import { combineReducers } from "redux";

import application from "./application"
import authreducer from "./authreducer"
import alert from "./alert"
import students from "./students"
import instructor from "./instructor"
import course from "./course"


export default combineReducers({ application,authreducer,alert, students,instructor,course });
