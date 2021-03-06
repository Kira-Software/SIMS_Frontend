import React, { useEffect } from "react";
import { connect } from "react-redux";
import Header from "../../../Header/header";

import { Typography } from "@material-ui/core";
import { Fragment } from "react";

import { loaduserinstructor } from "../../../Redux/Action/authinstructor";
import {
  senddeptapproval,
  getdeptapproval,
} from "../../../Redux/Action/instructorgradeapproval";

const Rresultsummary = ({
  user,
  studentid,
  markonly,
  attendanceheader,
  tempjob,
  loaduserinstructor,
  senddeptapproval,
  approvalrequest,
  loading,
  instructorassessment,
}) => {
  useEffect(() => {
    loaduserinstructor();
  }, []);

  const submitdeptapproval = (
    Departmentname,
    Year,
    Semister,
    Section,
    Coursename,
    Instructorname,
    Assessmentnumber
  ) => {
    //some code here
    console.log(
      "the coming parameters are ",
      Departmentname,
      Year,
      Semister,
      Section,
      Coursename,
      Instructorname,
      Assessmentnumber
    );

    senddeptapproval(
      Departmentname,
      Year,
      Semister,
      Section,
      Coursename,
      Instructorname,
      Assessmentnumber
    );
  };

  let flag = "none";

  let btnstyle = {
    display: flag,
  };

  let countassessment = 0;
  return (
    <>
      <Header name={user !== null ? user.Instructorfname : null} />
      <div className="card" style={{ marginTop: 50, marginBottom: 100 }}>
        <h3 className="card-header text-center font-weight-bold text-uppercase py-4">
          Result Summary
        </h3>

        {loading
          ? null
          : instructorassessment.length !== 0
          ? instructorassessment.map((item, idx) => {
              countassessment =
                item.Quiz.length +
                item.Assignment.length +
                item.Project.length +
                item.Attendance.length;
            })
          : null}

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
              <Typography color="primary">
                <strong>
                  Instructor name: {user.Instructorfname} {user.Instructormname}
                </strong>
              </Typography>
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
              {markonly.length !== 0 &&
              studentid.length !== 0 &&
              countassessment !== 0 ? (
                markonly.map((individualmark, individualmarkidx) => {
                  return (
                    <Fragment key={individualmarkidx}>
                      {studentid.map((individualid, individualididx) => {
                        // console.log(
                        //   "studentid iteration loop",
                        //   individualididx + 1
                        // );
                        if (
                          individualmark[countassessment + 4] ===
                          individualid.Studid
                        ) {
                          console.log(
                            "the value of countassessment is ",
                            countassessment
                          );
                          return (
                            <tr key={individualididx}>
                              <td>{individualid.Id}</td>
                              <td>{individualmark[countassessment + 3]}</td>
                            </tr>
                          );
                        }
                      })}

                      {individualmarkidx === markonly.length - 1 &&
                      attendanceheader.length !== 0 &&
                      tempjob !== null &&
                      user.length !== 0 ? (
                        <tr>
                          <td colSpan="2">
                            <button
                              className="btn btn-warning btn-rounded"
                              disabled={
                                approvalrequest.length === 0 ? false : true
                              }
                              onClick={() =>
                                submitdeptapproval(
                                  user.Department,
                                  attendanceheader[0],
                                  attendanceheader[1],
                                  attendanceheader[2],
                                  tempjob,
                                  user.Instructorfname +
                                    " " +
                                    user.Instructormname +
                                    " " +
                                    user.Instructorlname +
                                    " ",
                                  countassessment
                                )
                              }
                            >
                              {loading ===
                              true ? null : approvalrequest.length === 0 ? (
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
    </>
  );
};

const mapStateToProps = (state) => ({
  studentid: state.instructor.studentid,
  user: state.authreducer.user,
  markonly: state.instructor.markonly,
  attendanceheader: state.instructor.attendanceheader,
  tempjob: state.instructor.tempjob,
  approvalrequest: state.instructor.approvalrequest,
  loading: state.instructor.loading,
  instructorassessment: state.instructor.instructorassessment,
});

export default connect(mapStateToProps, {
  loaduserinstructor,
  senddeptapproval,
})(Rresultsummary);
