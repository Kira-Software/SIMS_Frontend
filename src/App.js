import React, { Fragment } from "react";

import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";

import store from "./Main/Redux/Store/store";

import Application from "./Main/Student/application";
import Registrar from "./Main/Registrar/registrar";
import Headerlogin from "./Main/Header/headerlogin";
import Request from "./Main/Registrar/request";
import Approved from "./Main/Registrar/approved";
import Registrarapproval from "./Main/Registrar/registrarapproval";
import Displayregistrarapproval from "./Main/Registrar/displayregistrarapproval";
import Academiccalendar from "./Main/Registrar/academiccalendar";
import Showcalendar from "./Main/Registrar/showcalendar";

import Loging from "./Main/Student/login";
import Homestudent from "./Main/Student/Homestudent";
import Adddepartment from "./Main/Registrar/adddeparment";
import Department from "./Main/Department/department";
import addcourse from "./Main/Department/addcourse";
import Coursestaff from "./Main/Department/coursestaff";
import Departmentlogin from "./Main/Department/departmentlogin";
import Studentstaff from "./Main/Department/Studentstaff";
import Instructorstaff from "./Main/Department/instructorstaff";
import Gradeapproval from "./Main/Department/gradeapproval";
import Displaygraderequests from "./Main/Department/displayapprovalrequests";

import Courseregistration from "./Main/Student/courseregistration";

import Loginforinstructor from "./Main/Instructor/login";
import Homeinstructor from "./Main/Instructor/homeinstructor";
import Instructorgrade from "./Main/Instructor/instructorgrade";
import Rresultsummary from "./Main/Instructor/Pagecomponents/Regular/Rresultsummary";

import Studentstatus from "./Main/Student/studentstatus";
import Addcourse from "./Main/Student/addcourse";
import Dropcourse from "./Main/Student/dropcourse";

import Privateroute from "./Main/utils/privateroute";

//new imports for instructor
import {
  Regularentry,
  Regularassessmentweight,
  Regularassessmententry,
  Regularresultsummary,
} from "./Main/Instructor/Pages/regularentry";
import {
  Specialentry,
  Makeupassessmentweight,
  Makeupassessmententry,
  Makeupresultsummary,
} from "./Main/Instructor/Pages/specialentry";

import Attendancetable from "./Main/Instructor/Pagecomponents/Studentattendance/attendancetable";

const Home = () => {
  return (
    <Fragment>
      <Headerlogin />
      <h1>Wellcome to the the new site</h1>
    </Fragment>
  );
};

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/application" exact component={Application} />
          <Route
            path="/courseregistration"
            exact
            component={Courseregistration}
          />

          <Route path="/registrar" exact component={Registrar} />
          <Privateroute path="/request" exact component={Request} />
          <Privateroute path="/approved" exact component={Approved} />
          <Privateroute
            path="/registrarapproval"
            exact
            component={Registrarapproval}
          />
          <Privateroute
            path="/displayregistrarapproval"
            exact
            component={Displayregistrarapproval}
          />
          <Privateroute
            path="/academiccalendar"
            exact
            component={Academiccalendar}
          />

          <Privateroute
            path="/showcalendar"
            exact
            component={Showcalendar}
          />

          <Route path="/login" exact component={Loging} />
          <Route path="/homestudent" exact component={Homestudent} />
          <Route path="/adddepartment" exact component={Adddepartment} />

          <Route path="/mainlogin" exact component={Departmentlogin} />
          <Privateroute path="/department" exact component={Department} />
          <Privateroute path="/course" exact component={Coursestaff} />
          <Privateroute path="/studentstaff" exact component={Studentstaff} />
          <Privateroute
            path="/instructorstaff"
            exact
            component={Instructorstaff}
          />

          <Privateroute path="/gradeapproval" exact component={Gradeapproval} />
          <Privateroute
            path="/displaygraderequests"
            exact
            component={Displaygraderequests}
          />

          <Route path="/logininstructor" exact component={Loginforinstructor} />
          <Route path="/homeinstructor" exact component={Homeinstructor} />
          <Route path="/instructorgrade" exact component={Instructorgrade} />

          {/* new routes for instructors */}
          <Route
            path="/instructor/regularentry"
            exact
            component={Regularentry}
          />
          <Route
            path="/instructor/regularentry/regularassessmentweight"
            exact
            component={Regularassessmentweight}
          />
          <Route
            path="/instructor/regularentry/regularassessmententry"
            exact
            component={Regularassessmententry}
          />

          <Route
            path="/instructor/regularentry/regularresultsummary"
            exact
            component={Regularresultsummary}
          />

          <Route
            path="/instructor/specialentry"
            exact
            component={Specialentry}
          />
          <Route
            path="/instructor/specialentry/makeupassessmentweight"
            exact
            component={Makeupassessmentweight}
          />
          <Route
            path="/instructor/specialentry/makeupassessmententry"
            exact
            component={Makeupassessmententry}
          />

          <Route
            path="/instructor/specialentry/makeupresultsummary"
            exact
            component={Makeupresultsummary}
          />

          <Route path="/resultsummary" exact component={Rresultsummary} />

          <Route path="/attendancetable" exact component={Attendancetable} />

          <Route path="/studentstatus" exact component={Studentstatus} />
          <Route path="/addcourse" exact component={Addcourse} />
          <Route path="/dropcourse" exact component={Dropcourse} />

          {/* <Route path="/addproduct" exact component={Addproduct} /> */}
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
