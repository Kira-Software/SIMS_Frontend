import React, { useEffect } from "react";
import { Fragment } from "react";
import { Typography } from "@material-ui/core";
import { connect } from "react-redux";

import Headerdept from "../Header/headerdept";

import {
  sendregistrarapproval,
  getregistrarapproval,
} from "../Redux/Action/instructorgradeapproval";

const Displaygraderequests = ({
  user,
  studentid,
  markonly,
  attendanceheader,
  tempjob,
  Instructorid,
  sendregistrarapproval,
  departmentrequest,
  loading,
  getregistrarapproval,
  departmentapprovalrequests,
}) => {
  const submittoregapproval = (
    Departmentname,
    Year,
    Semister,
    Section,
    Coursename,
    Instructorid
  ) => {
    //some code here
    // console.log(
    //   "the coming parameters are ",
    //   Departmentname,
    //   Year,
    //   Semister,
    //   Section,
    //   Coursename,
    //   Instructorid
    // );

    sendregistrarapproval(
      Departmentname,
      Year,
      Semister,
      Section,
      Coursename,
      Instructorid
    );

    getregistrarapproval(
      Departmentname,
      Year,
      Semister,
      Section,
      Coursename,
      Instructorid
    );
  };

  let assessmentcount = 0;

  return (
    <Fragment>
      <Headerdept name={user !== null ? user.Departmentname : null} />
      <div className="card" style={{ marginTop: 50, marginBottom: 100 }}>
        <h3 className="card-header text-center font-weight-bold text-uppercase py-4">
          Department Result Summary
        </h3>

        {attendanceheader.length !== 0 ? (
          <div>
            <div style={{ marginLeft: "80%", marginTop: 50 }}>
              <Typography color="secondary">
                <strong> Year: {attendanceheader[0]}</strong>
              </Typography>
              <Typography color="secondary">
                <strong>Semister: {attendanceheader[1]}</strong>
              </Typography>
              <Typography color="secondary">
                <strong> Section: {attendanceheader[2]}</strong>
              </Typography>
            </div>

            <div style={{ marginLeft: 50, marginBottom: 50 }}>
              <Typography color="primary">
                <strong>Course name: {tempjob}</strong>
              </Typography>
              {/* <Typography color="primary">
                <strong>
                  Instructor name: {user.Instructorfname} {user.Instructormname}
                </strong>
              </Typography> */}
            </div>
          </div>
        ) : null}

        <div
          className="cardbody"
          style={{ width: "50%", marginLeft: "25%", marginTop: 20 }}
        >
          <table className="table table-bordered table-responsive-md table-striped text-center">
            <thead>
              <tr>
                <th rowSpan="2">Student Id</th>
                <th rowSpan="2">Grade</th>
              </tr>
            </thead>
            <tbody>
              {markonly.length !== 0 && studentid.length !== 0 ? (
                markonly.map((individualmark, individualmarkidx) => {
                  return (
                    <Fragment key={individualmarkidx}>
                      {departmentapprovalrequests.length !== 0 &&
                      attendanceheader.length !== 0 &&
                      tempjob !== null &&
                      Instructorid !== null
                        ? departmentapprovalrequests.map((item, idx) => {
                            if (
                              item.Year === attendanceheader[0] &&
                              item.Semister === attendanceheader[1] &&
                              item.Section === attendanceheader[2] &&
                              item.Coursename === tempjob
                            ) {
                              assessmentcount = item.Assessmentnumber;
                            }
                          })
                        : null}

                      {studentid.map((individualid, individualididx) => {
                        if (
                          individualmark[assessmentcount + 4] ===
                          individualid.Studid
                        ) {
                          return (
                            <tr key={individualididx}>
                              <td>{individualid.Id}</td>
                              <td>{individualmark[assessmentcount + 3]}</td>
                            </tr>
                          );
                        }
                      })}

                      {individualmarkidx === markonly.length - 1 &&
                      attendanceheader.length !== 0 &&
                      tempjob !== null &&
                      Instructorid !== null &&
                      user.length !== 0 ? (
                        <tr>
                          <td colSpan="2">
                            <button
                              className="btn btn-warning btn-rounded"
                              disabled={
                                departmentrequest.length === 0 ? false : true
                              }
                              onClick={() =>
                                submittoregapproval(
                                  user.Departmentname,
                                  attendanceheader[0],
                                  attendanceheader[1],
                                  attendanceheader[2],
                                  tempjob,
                                  Instructorid
                                )
                              }
                            >
                              {loading ===
                              true ? null : departmentrequest.length === 0 ? (
                                <span>Submit for approval</span>
                              ) : (
                                <span>Submitted for approval </span>
                              )}
                            </button>
                          </td>
                        </tr>
                      ) : null}
                    </Fragment>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="2">
                    <Typography color="secondary">
                      There are no records
                    </Typography>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  studentid: state.instructor.studentid,
  user: state.authreducer.user,
  markonly: state.instructor.markonly,
  attendanceheader: state.instructor.attendanceheader,
  tempjob: state.instructor.tempjob,
  Instructorid: state.department.Instructorid,
  departmentrequest: state.department.departmentrequest,
  loading: state.department.loading,
  departmentapprovalrequests: state.department.departmentapprovalrequests,
});

export default connect(mapStateToProps, {
  sendregistrarapproval,
  getregistrarapproval,
})(Displaygraderequests);
