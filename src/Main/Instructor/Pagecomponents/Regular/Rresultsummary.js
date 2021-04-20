import React, { useEffect } from "react";
import { connect } from "react-redux";
import Header from "../../../Header/header";

import { Typography } from "@material-ui/core";
import { Fragment } from "react";

import { loaduserinstructor } from "../../../Redux/Action/authinstructor";

const Rresultsummary = ({
  user,
  studentid,
  markonly,
  attendanceheader,
  tempjob,
  loaduserinstructor,
}) => {
  useEffect(() => {
    loaduserinstructor();
  }, []);

  let flag = "none";

  let btnstyle = {
    display: flag,
  };

  return (
    <>
      <Header name={user !== null ? user.Instructorfname : null} />
      <div className="card" style={{ marginTop: 50, marginBottom: 100 }}>
        <h3 className="card-header text-center font-weight-bold text-uppercase py-4">
          Result Summary
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
              {markonly.length !== 0 && studentid.length !== 0 ? (
                markonly.map((individualmark, individualmarkidx) => {
                  return (
                    <Fragment key={individualmarkidx}>
                      {studentid.map((individualid, individualididx) => {
                        if (individualmark[9] === individualid.Studid) {
                          return (
                            <tr key={individualididx}>
                              <td>{individualid.Id}</td>
                              <td>{individualmark[8]}</td>
                            </tr>
                          );
                        }
                      })}

                      {individualmarkidx === markonly.length - 1 ? (
                        <td colSpan="2">
                          <button className="btn btn-warning btn-rounded">
                            Submit for approval
                          </button>
                        </td>
                      ) : null}
                    </Fragment>
                  );
                })
              ) : (
                <td colSpan="2">
                  <Typography color="secondary">
                    There are no records
                  </Typography>
                </td>
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
});

export default connect(mapStateToProps, { loaduserinstructor })(Rresultsummary);
