import React, { useEffect } from "react";
import { Fragment } from "react";
import { Typography } from "@material-ui/core";
import { connect } from "react-redux";

import Regheader from "../Header/regheader";

import {
  sendfinalapproval,
  getfinalapproval,
} from "../Redux/Action/instructorgradeapproval";

const Displayregistrarapproval = ({
  user,
  studentid,
  markonly,
  attendanceheader,
  tempjob,
  Instructorid,
  sendregistrarapproval,
  registrarrequest,
  loading,
  sendfinalapproval,
  finalapproved,
  getfinalapproval,
  departmentname,
  //registrarrequest
}) => {
  const submitfinalapproval = (
    Year,
    Semister,
    Section,
    Coursename,
    Instructorid,
    departmentname
  ) => {
    // console.log(
    //   "the coming values are",
    //   Year,
    //   Semister,
    //   Section,
    //   Coursename,
    //   Instructorid
    // );
    sendfinalapproval(
      Year,
      Semister,
      Section,
      Coursename,
      Instructorid,
      departmentname
    );
    getfinalapproval(
      Year,
      Semister,
      Section,
      Coursename,
      Instructorid,
      departmentname
    );
  };

  let assessmentcount = 0;
  return (
    <Fragment>
      <Regheader />
      <h1>from the Displayregistrarapproval</h1>

      <div className="card" style={{ marginTop: 50, marginBottom: 100 }}>
        <h3 className="card-header text-center font-weight-bold text-uppercase py-4">
          Registrar Result Summary
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
              {registrarrequest.length !== 0 &&
              attendanceheader.length !== 0 &&
              tempjob !== null &&
              Instructorid !== null
                ? registrarrequest.map((item, idx) => {
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

              {markonly.length !== 0 && studentid.length !== 0 ? (
                markonly.map((individualmark, individualmarkidx) => {
                  return (
                    <Fragment key={individualmarkidx}>
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
                      Instructorid !== null ? (
                        <tr>
                          <td colSpan="2">
                            <button
                              className="btn btn-warning btn-rounded"
                              disabled={
                                finalapproved.length === 0 ? false : true
                              }
                              onClick={() =>
                                submitfinalapproval(
                                  attendanceheader[0],
                                  attendanceheader[1],
                                  attendanceheader[2],
                                  tempjob,
                                  Instructorid,
                                  departmentname
                                )
                              }
                            >
                              {loading ===
                              true ? null : finalapproved.length === 0 ? (
                                <span>Submit for approval</span>
                              ) : (
                                <span>Grade released for students </span>
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
  registrarrequest: state.registrar.registrarrequest,
  loading: state.registrar.loading,
  finalapproved: state.registrar.finalapproved,
  departmentname: state.registrar.departmentname,
  registrarrequest: state.registrar.registrarrequest,
});

export default connect(mapStateToProps, {
  sendfinalapproval,
  getfinalapproval,
})(Displayregistrarapproval);
