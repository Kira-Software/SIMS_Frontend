import React, { useEffect } from "react";
import { Fragment } from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Regheader from "../Header/regheader";
import { getregistrarapprovalrequests } from "../Redux/Action/departmentgradeaproval";
import { getmarkforregistrar } from "../Redux/Action/instructorassessment";
import { getstudentid } from "../Redux/Action/selectstudents";
import {
  updateattendanceheader,
  updatetempjob,
  updateinstructorid,
  updatedepartmentname
} from "../Redux/Action/instructorjob";
import { clearfinalapproval } from "../Redux/Action/instructorgradeapproval";

const Registrarapproval = ({
  user,
  registrarrequest,
  getregistrarapprovalrequests,
  getmarkforregistrar,
  getstudentid,
  updateattendanceheader,
  updatetempjob,
  updateinstructorid,
  clearfinalapproval,
  updatedepartmentname
}) => {
  useEffect(() => {
    getregistrarapprovalrequests();
    clearfinalapproval()
  }, []);

  const handledisplayrequest = (
    Department,
    Year,
    Semister,
    Section,
    Coursename,
    Instructorid
  ) => {
    getmarkforregistrar(Coursename, Year, Semister, Section, Instructorid);
    getstudentid();
    updateattendanceheader(Year, Semister, Section);
    updatetempjob(Coursename);
    updateinstructorid(Instructorid);
    updatedepartmentname(Department)
  };
  return (
    <Fragment>
      <Regheader />
      <h3>Registrar approval page</h3>

      <div className="card" style={{ marginTop: 50, marginBottom: 100 }}>
        <h3 className="card-header text-center font-weight-bold text-uppercase py-4">
          Registrar Grade Approval
        </h3>

        <div className="cardbody" style={{ marginTop: 20 }}>
          <table className="table table-bordered table-responsive-md table-striped text-center">
            <thead>
              <tr>
                <th>Department</th>
                <th>Course Name</th>
                <th>Instructor Name</th>
                <th>Year</th>
                <th>Semister</th>
                <th>Section</th>
              </tr>
            </thead>
            <tbody>
              {registrarrequest.length !== 0
                ? registrarrequest.map((item, itemidx) => {
                    return (
                      <tr key={itemidx}>
                        <td>{item.Departmentname}</td>
                        <td>{item.Coursename}</td>
                        <td>{item.Instructorname}</td>
                        <td>{item.Year}</td>
                        <td>{item.Semister}</td>
                        <td>
                          <Link to="/displayregistrarapproval">
                            <button
                              className="btn btn-success btn-rounded"
                              style={{ width: 100 }}
                              onClick={() =>
                                handledisplayrequest(
                                  item.Departmentname,
                                  item.Year,
                                  item.Semister,
                                  item.Section,
                                  item.Coursename,
                                  item.Instructorid
                                )
                              }
                            >
                              {item.Section}
                            </button>
                          </Link>
                        </td>
                      </tr>
                    );
                  })
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  user: state.authreducer.user,
  registrarrequest: state.registrar.registrarrequest,
});

export default connect(mapStateToProps, {
  getregistrarapprovalrequests,
  getmarkforregistrar,
  getstudentid,
  updateattendanceheader,
  updatetempjob,
  updateinstructorid,
  clearfinalapproval,
  updatedepartmentname
})(Registrarapproval);
