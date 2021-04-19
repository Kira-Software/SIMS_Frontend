import React, { useEffect } from "react";
import { Typography } from "@material-ui/core";
import { connect } from "react-redux";

import Header from "../../../Header/header";

const Attendancetable = ({
  user,
  instructorstudents,
  studentscourseregistered,
  tempjob,
  attendanceheader,
}) => {
  return (
    <div>
      <Header name={user !== null ? user.Instructorfname : null} />

      {/* <Typography>Attendance Table</Typography> */}
      <div className="card" style={{ marginTop: 50 , marginBottom:100 }}>
        <h3 className="card-header text-center font-weight-bold text-uppercase py-4">
          Student Attendance
        </h3>

        {attendanceheader.length !== 0 ? (
          <div>
            <div style={{ marginLeft: "80%",marginTop:50 }}>
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

            <div style={{ marginLeft: 50 , marginBottom: 50}}>
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

        <div className="cardbody">
          <table className="table table-bordered table-responsive-md table-striped text-center">
            <thead>
              <tr>
                <th rowSpan="2">First name</th>
                <th rowSpan="2">Middle name</th>
                <th rowSpan="2">Last name</th>
                <th rowSpan="2">Sex</th>
                <th rowSpan="2">date</th>
                <th rowSpan="2">date</th>
                <th rowSpan="2">date</th>
                <th rowSpan="2">date</th>
                <th rowSpan="2">date</th>
                <th rowSpan="2">date</th>
                <th rowSpan="2">date</th>
                <th rowSpan="2">date</th>
                <th rowSpan="2">date</th>
                <th rowSpan="2">date</th>
              </tr>
            </thead>
            {instructorstudents.length !== 0
              ? instructorstudents.map((item, idx) => {
                  return studentscourseregistered.length !== 0
                    ? studentscourseregistered.map((item2, idx2) => {
                        if (
                          item.Applicationid === item2.Studentid &&
                          item2.Courses.includes(tempjob)
                        ) {
                          return (
                            <tbody key={idx2}>
                              <tr>
                                {/* <td>{idx + 1}</td> */}
                                <td className="text-center">
                                  {item.Firstname}
                                </td>
                                <td className="text-center">
                                  {item.Middlename}
                                </td>
                                <td className="text-center">{item.Lastname}</td>
                                <td className="text-center">{item.Sex}</td>
                                <td className="text-center">_____</td>
                                <td className="text-center">_____</td>
                                <td className="text-center">_____</td>
                                <td className="text-center">_____</td>
                                <td className="text-center">_____</td>
                                <td className="text-center">_____</td>
                                <td className="text-center">_____</td>
                                <td className="text-center">_____</td>
                                <td className="text-center">_____</td>
                                <td className="text-center">_____</td>
                              </tr>
                            </tbody>
                          );
                        }
                      })
                    : null;
                })
              : null}
          </table>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.authreducer.user,
  instructorstudents: state.students.instructorstudents,
  studentscourseregistered: state.students.studentscourseregistered,
  tempjob: state.instructor.tempjob,
  attendanceheader: state.instructor.attendanceheader,
});

export default connect(mapStateToProps)(Attendancetable);
