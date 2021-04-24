import React, { useEffect } from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import Headerdept from "../Header/headerdept";

import { getdeptapprovalrequests } from "../Redux/Action/departmentgradeaproval";

import { getmarkfordept } from "../Redux/Action/instructorassessment";
import { getstudentid } from "../Redux/Action/selectstudents";

import {
  updateattendanceheader,
  updatetempjob,
  updateinstructorid,
} from "../Redux/Action/instructorjob";

import { getregistrarapproval } from "../Redux/Action/instructorgradeapproval";

const Gradeapproval = ({
    
  user,
  departmentapprovalrequests,
  getdeptapprovalrequests,
  getmarkfordept,
  getstudentid,
  updateattendanceheader,
  updatetempjob,
  updateinstructorid,
  getregistrarapproval,
}) => {
  useEffect(() => {
    getdeptapprovalrequests();
  }, []);

  const handledisplayrequest = (
    Department,
    Year,
    Semister,
    Section,
    Coursename,
    Instructorid
  ) => {
    // console.log(
    //   "the comming parameters are",
    //   Department,
    //   Year,
    //   Semister,
    //   Section,
    //   Coursename,
    //   Instructorid
    // );
    getmarkfordept(Coursename, Year, Semister, Section, Instructorid);
    getstudentid();
    updateattendanceheader(Year, Semister, Section);
    updatetempjob(Coursename);
    updateinstructorid(Instructorid);
    getregistrarapproval(
      Department,
      Year,
      Semister,
      Section,
      Coursename,
      Instructorid
    );
  };

  return (
    <Fragment>
      <Headerdept name={user !== null ? user.Departmentname : null} />

      <div className="card" style={{ marginTop: 50, marginBottom: 100 }}>
        <h3 className="card-header text-center font-weight-bold text-uppercase py-4">
          Grade Approval Requests
        </h3>

        <div className="cardbody" style={{ marginTop: 20 }}>
          <table className="table table-bordered table-responsive-md table-striped text-center">
            <thead>
              <tr>
                <th>Course Name</th>
                <th>Instructor Name</th>
                <th>Year</th>
                <th>Semister</th>
                <th>Section</th>
              </tr>
            </thead>
            <tbody>
              {departmentapprovalrequests.length !== 0
                ? departmentapprovalrequests.map((item, itemidx) => {
                    return (
                      <tr key={itemidx}>
                        <td>{item.Coursename}</td>
                        <td>{item.Instructorname}</td>
                        <td>{item.Year}</td>
                        <td>{item.Semister}</td>
                        <td>
                          <Link to="/displaygraderequests">
                            <button
                              className="btn btn-success btn-rounded"
                              style={{ width: 100 }}
                              onClick={() =>
                                handledisplayrequest(
                                  user.Departmentname,
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
  departmentapprovalrequests: state.department.departmentapprovalrequests,
});

export default connect(mapStateToProps, {
  getdeptapprovalrequests,
  getmarkfordept,
  getstudentid,
  updateattendanceheader,
  updatetempjob,
  updateinstructorid,
  getregistrarapproval,
})(Gradeapproval);
