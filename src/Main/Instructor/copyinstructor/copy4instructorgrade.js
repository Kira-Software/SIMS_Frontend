import React, { Fragment, useState, useEffect } from "react";

import { TextField } from "@material-ui/core";

import { Link, Redirect } from "react-router-dom";

import axios from "axios";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import Header from "../Header/header";
import Footer from "../Footer/footer";
//import {giveapplication} from "../Redux/Action/giveapplication"
import { loaduserinstructor } from "../Redux/Action/authinstructor";
import { getinstructorstudentgrade } from "../Redux/Action/instructorjob";
import { setgrade } from "../Redux/Action/instructorjob";
import { setmark, getmark } from "../Redux/Action/instructorassessment";

const Instructorgrade = ({
  isauthenticated,
  loaduserinstructor,
  user,
  getinstructorstudentgrade,
  instructorstudents,
  studentscourseregistered,
  tempjob,
  setgrade,
  instructorassessment,
  setmark,
  getmark,
  instructormark,
  loading,
  markonly,
}) => {
  useEffect(() => {
    loaduserinstructor();
  }, []);

  const [buttonname, setbuttonname] = useState("Edit");

  const [formdata, setformdata] = useState({
    Grade: "",
  });

  const { Grade } = formdata;

  const changer = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handlebutton = (Year, Semister, Section, Coursename) => {
    if (assessment[assessment.length - 1].length === 0) {
      let temp = assessment;
      temp.pop();
      setassessment(temp);
    }
    setmark(Year, Semister, Section, Coursename, assessment);
    // if (buttonname === "Edit") {
    //   setbuttonname("Save");
    // } else {
    //   setbuttonname("Edit");
    // }
  };

  const handlesetgrade = (
    Studentid,
    Year,
    Semister,
    Section,
    Course,
    Grade
  ) => {
    console.log("inside of handlesetgrade method!");

    setgrade(Studentid, Year, Semister, Section, Course, Grade);
    setformdata({ ...formdata, Grade: "" });
  };

  let [assessment, setassessment] = React.useState([[]]);
  let [temppush, settemppush] = React.useState(true);

  let totals = [];

  const handlemarkchange = (e, Applicationid) => {
    console.log("the text field name is ", e.target.name);
    console.log("application id value is ", Applicationid);

    // let kvalues = Object.keys(instructorassessment);
    // console.log("the value of kvalues is " + kvalues);
    console.log("the length of initial assessment  is " + assessment.length);

    if (assessment.length < studentscourseregistered.length) {
      //done only in the first time
      let x = studentscourseregistered.length - assessment.length;
      for (let i = 0; i < x - 1; i++) {
        let temp = assessment;
        temp.push([]);
        setassessment(temp);
      }
    }

    let i = null;
    let j = null;
    console.log("the length of temparr2 is " + temparr2.length);
    console.log("the length of initial assessment  is " + assessment.length);
    console.log(
      "the length of student course registered is " +
        studentscourseregistered.length
    );

    for (i = 0; i < studentscourseregistered.length; i++) {
      for (j = 0; j <= temparr2.length + 1; j++) {
        //console.log(`questions${i}${j}`);

        if (e.target.name === `${Applicationid}${i}${j}`) {
          console.log("inside of the chekcking");
          //let temp = e.target.value;
          // let obj = {
          //   kvalues: temp
          // }
          let tempassessment = assessment;
          tempassessment[i][j] = e.target.value;

          tempassessment[i][temparr2.length] = 0;

          // tempassessment[i][temparr2.length + 1] = 0;

          tempassessment[i][temparr2.length + 2] = 0;

          tempassessment[i][temparr2.length + 3] = "";
          tempassessment[i][temparr2.length + 4] = Applicationid;

          setassessment(tempassessment);
        }
      }
      // assessment[i][8] = Applicationid
    }
    console.log("the assessment value while change is ", assessment);
  };

  const handlemarkchangeafter = (e, Applicationid) => {
    console.log("inside of the handlemarkchangeafter");
    console.log("the initial tassessment is  ", tassessment);

    if (temppush) {
      for (let i = 0; i < tassessment.length; i++) {
        let temp = assessment;
        temp[i] = tassessment[i];

        temp.push([]);
        setassessment(temp);
      }
      settemppush(false);
    }

    //setassessment(tassessment);

    console.log("the new value of assessment is ", assessment);

    let i = null;
    let j = null;
    for (i = 0; i < studentscourseregistered.length; i++) {
      for (j = 0; j <= temparr2.length + 1; j++) {
        //console.log(`questions${i}${j}`);
        if (e.target.name === `${Applicationid}${i}${j}`) {
          //let temp = e.target.value;
          // let obj = {
          //   kvalues: temp
          // }
          let tempassessment = assessment;
          tempassessment[i][j] = e.target.value;

          // tempassessment[i][temparr2.length + 4] = Applicationid;
          setassessment(tempassessment);
        }
      }
      // assessment[i][8] = Applicationid
    }
    console.log("the assessment value while change is ", assessment);
  };

  // const changer = (e) => {
  //   setformdata({ ...formdata, [e.target.name]: e.target.value });
  // };

  if (!isauthenticated) {
    return <Redirect to="/logininstructor" />;
  }

  const tableinput = {
    width: 50,
  };
  let temparr = ["", "", "", "", "", "", ""];
  let temparr2 = [];
  let enough = true;
  let tassessment;

  return (
    <Fragment>
      <Header name={user !== null ? user.Instructorfname : null} />

      {markonly.length !== 0 && instructormark.length !== 0
        ? instructormark.map((data, dataidx) => {
            tassessment = data.Assessment;
            // console.log("the value of tassessment is" + tassessment);
          })
        : null}

      <div>
        <strong>
          <p
            style={{
              marginLeft: 50,
              color: "green",
              fontSize: 24,
              marginTop: 100,
            }}
          >
            Course Name : {tempjob}
          </p>
        </strong>

        <div className="card" style={{ marginTop: 50 }}>
          <h3 className="card-header text-center font-weight-bold text-uppercase py-4">
            Student Mark Entry
          </h3>
          <div className="card-body">
            <div id="table" className="table-editable">
              <span className="table-add float-right mb-3 mr-2">
                <a href="#!" className="text-success">
                  <i className="fas fa-plus fa-2x" aria-hidden="true"></i>
                </a>
              </span>
              <table className="table table-bordered table-responsive-md table-striped text-center">
                <thead>
                  <tr>
                    <th className="text-center">First Name</th>
                    <th className="text-center">Middle Name</th>
                    <th className="text-center">Last Name</th>
                    <th className="text-center">Sex</th>

                    {instructorassessment.map((item, idx) => {
                      let plusidx = 0;
                      return (
                        <Fragment key={idx}>
                          {item.Quiz.length !== 0
                            ? item.Quiz.map((item2, idx2) => {
                                temparr.pop();
                                temparr2.push("");

                                return (
                                  <th className="text-center" key={idx2}>
                                    Quiz{" "}
                                    {item.Quiz.length === 1 ? null : idx2 + 1}{" "}
                                    {item2} %
                                  </th>
                                );
                              })
                            : null}

                          {item.Assignment.length !== 0
                            ? item.Assignment.map((item2, idx2) => {
                                temparr.pop();
                                temparr2.push("");

                                return (
                                  <th className="text-center" key={idx2}>
                                    Assignment{" "}
                                    {item.Assignment.length === 1
                                      ? null
                                      : idx2 + 1}{" "}
                                    {item2} %
                                  </th>
                                );
                              })
                            : null}

                          {item.Project.length !== 0
                            ? item.Project.map((item2, idx2) => {
                                temparr.pop();
                                temparr2.push("");

                                return (
                                  <th className="text-center" key={idx2}>
                                    Project{" "}
                                    {item.Project.length === 1
                                      ? null
                                      : idx2 + 1}{" "}
                                    {item2} %
                                  </th>
                                );
                              })
                            : null}

                          {item.Attendance.length !== 0
                            ? item.Attendance.map((item2, idx2) => {
                                temparr.pop();
                                temparr2.push("");

                                return (
                                  <th className="text-center" key={idx2}>
                                    Attendance {item2} %
                                  </th>
                                );
                              })
                            : null}
                        </Fragment>
                      );
                    })}

                    {/*///////////////////////the deleted rows /empty assessments /*}


                    {/* {temparr.length !== 0
                      ? temparr.map((it, id) => {
                          return (
                            <th className="text-center" key={id}>
                              Assessment {id}
                            </th>
                          );
                        })
                      : null} */}

                    {/*///////////////////////the deleted rows /empty assessments /*}

                    {/* <th className="text-center">Edit/Save</th> */}
                    <th className="text-center">Continuous Total / (50%)</th>

                    <th className="text-center">Final 50%</th>
                    <th className="text-center">Total 100%</th>
                    <th className="text-center">Grade</th>
                  </tr>
                </thead>

                {instructorstudents.length !== 0
                  ? instructorstudents.map((item, idx) => {
                      return (
                        <Fragment key={idx}>
                          {studentscourseregistered.length !== 0
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
                                        <td className="text-center">
                                          {item.Lastname}
                                        </td>
                                        <td className="text-center">
                                          {item.Sex}
                                        </td>

                                        {loading ? null : instructormark.length ===
                                          0 ? (
                                          <Fragment>
                                            {temparr2.map((it, ix) => {
                                              // console.log(
                                              //   "the length of temparr2 is",
                                              //   temparr2.length
                                              // );
                                              return (
                                                <td
                                                  className="pt-3-half"
                                                  key={ix}
                                                  // contenteditable="true"
                                                >
                                                  <input
                                                    type="number"
                                                    // min="0"
                                                    // max="10"
                                                    style={tableinput}
                                                    // value={individual[ix]}
                                                    name={`${item.Applicationid}${idx}${ix}`}
                                                    onChange={(e) =>
                                                      handlemarkchange(
                                                        e,
                                                        item.Applicationid
                                                      )
                                                    }
                                                  />
                                                </td>
                                              );
                                            })}

                                            {/* for the empty fields */}
                                            {/*///////////////////////the deleted rows /empty assessments /*}

                                            {/* {temparr.map((it, id) => {
                                              return (
                                                <td
                                                  className="pt-3-half"
                                                  key={id}
                                                  // contenteditable="true"
                                                ></td>
                                              );
                                            })} */}

                                            <td className="pt-3-half">
                                              <input
                                                type="text"
                                                style={tableinput}
                                                disabled
                                                value="0"
                                              />
                                            </td>

                                            <td
                                              className="pt-3-half"
                                              // contenteditable="true"
                                            >
                                              <input
                                                type="text"
                                                style={tableinput}
                                                // value={individual[5]}
                                                onChange={(e) =>
                                                  handlemarkchange(
                                                    e,
                                                    item.Applicationid
                                                  )
                                                }
                                                name={`${
                                                  item.Applicationid
                                                }${idx}${temparr2.length + 1}`}
                                              />
                                            </td>

                                            <td className="pt-3-half">
                                              <input
                                                type="text"
                                                style={tableinput}
                                                disabled
                                                value="0"
                                              />
                                            </td>
                                            <td className="pt-3-half">
                                              <input
                                                type="text"
                                                style={tableinput}
                                                disabled
                                              />
                                            </td>
                                            {/* <td className="pt-3-half">
                                              <button
                                                className="btn btn-primary"
                                                onClick={() =>
                                                  handlebutton(
                                                    item.Year,
                                                    item.Semister,
                                                    item.Section,
                                                    tempjob
                                                  )
                                                }
                                              >
                                                {buttonname}  
                                                Save
                                              </button>
                                            </td>*/}
                                          </Fragment>
                                        ) : (
                                          instructormark.map(
                                            (data, dataindex) => {
                                              return (
                                                <Fragment key={dataindex}>
                                                  {data.Assessment.map(
                                                    (
                                                      individual,
                                                      individualidx
                                                    ) => {
                                                      if (
                                                        individual[
                                                          temparr2.length + 4
                                                        ] === item.Applicationid
                                                      ) {
                                                        return (
                                                          <Fragment
                                                            key={individualidx}
                                                          >
                                                            {markonly.length !==
                                                            0
                                                              ? temparr2.map(
                                                                  (it, ix) => {
                                                                    // console.log(
                                                                    //   "the length of temparr2 is",
                                                                    //   temparr2.length
                                                                    // );
                                                                    return (
                                                                      <td
                                                                        className="pt-3-half"
                                                                        key={ix}
                                                                        // contenteditable="true"
                                                                      >
                                                                        <input
                                                                          type="text"
                                                                          style={
                                                                            tableinput
                                                                          }
                                                                          editable="true"
                                                                          placeholder={
                                                                            markonly.length !==
                                                                            0
                                                                              ? tassessment[
                                                                                  idx
                                                                                ][
                                                                                  ix
                                                                                ]
                                                                              : null
                                                                          }
                                                                          name={`${item.Applicationid}${idx}${ix}`}
                                                                          onChange={(
                                                                            e
                                                                          ) =>
                                                                            handlemarkchangeafter(
                                                                              e,
                                                                              item.Applicationid
                                                                            )
                                                                          }
                                                                        />
                                                                      </td>
                                                                    );
                                                                  }
                                                                )
                                                              : null}
                                                          </Fragment>
                                                        );
                                                      }
                                                    }
                                                  )}
                                                </Fragment>
                                              );
                                            }
                                          )
                                        )}

                                        {/* {temparr.map((it, id) => {
                                          return (
                                            <td
                                              className="pt-3-half"
                                              key={id}
                                              // contenteditable="true"
                                            ></td>
                                          );
                                        })} */}
                                        <td className="pt-3-half">
                                          <input
                                            type="text"
                                            style={tableinput}
                                            disabled
                                            value="0"
                                          />
                                        </td>

                                        {loading
                                          ? null
                                          : instructormark.map(
                                              (data, dataindex) => {
                                                return (
                                                  <Fragment key={dataindex}>
                                                    {markonly.length !== 0
                                                      ? data.Assessment.map(
                                                          (
                                                            individual,
                                                            individualidx
                                                          ) => {
                                                            if (
                                                              individual[
                                                                temparr2.length +
                                                                  4
                                                              ] ===
                                                              item.Applicationid
                                                            ) {
                                                              return (
                                                                <Fragment
                                                                  key={
                                                                    individualidx
                                                                  }
                                                                >
                                                                  <td
                                                                    className="pt-3-half"
                                                                    // contenteditable="true"
                                                                  >
                                                                    <input
                                                                      type="text"
                                                                      style={
                                                                        tableinput
                                                                      }
                                                                      placeholder={
                                                                        markonly.length !==
                                                                        0
                                                                          ? tassessment[
                                                                              idx
                                                                            ][
                                                                              temparr2.length +
                                                                                1
                                                                            ]
                                                                          : null
                                                                      }
                                                                      onChange={(
                                                                        e
                                                                      ) =>
                                                                        handlemarkchangeafter(
                                                                          e,
                                                                          item.Applicationid
                                                                        )
                                                                      }
                                                                      name={`${
                                                                        item.Applicationid
                                                                      }${idx}${
                                                                        temparr2.length +
                                                                        1
                                                                      }`}
                                                                    />
                                                                  </td>

                                                                  <td className="pt-3-half">
                                                                    <input
                                                                      type="text"
                                                                      style={
                                                                        tableinput
                                                                      }
                                                                      disabled
                                                                      value="0"
                                                                    />
                                                                  </td>
                                                                  <td className="pt-3-half">
                                                                    <input
                                                                      type="text"
                                                                      style={
                                                                        tableinput
                                                                      }
                                                                      disabled
                                                                    />
                                                                  </td>
                                                                  {/* <td className="pt-3-half">
                                                                    <button
                                                                      className="btn btn-primary"
                                                                      onClick={() =>
                                                                        handlebutton(
                                                                          item.Year,
                                                                          item.Semister,
                                                                          item.Section,
                                                                          tempjob
                                                                        )
                                                                      }
                                                                    >
                                                                      {buttonname}  
                                                                      Save
                                                                    </button>
                                                                  </td> */}
                                                                </Fragment>
                                                              );
                                                            }
                                                          }
                                                        )
                                                      : null}
                                                  </Fragment>
                                                );
                                              }
                                            )}
                                      </tr>
                                    </tbody>
                                  );
                                }
                              })
                            : null}
                          {idx === instructorstudents.length - 1 ? (
                            <tfoot>
                              <tr>
                                <td colSpan={temparr2.length + 4}>
                                  <button
                                    className="btn btn-primary"
                                    style={{ marginLeft: 500 }}
                                    onClick={() =>
                                      handlebutton(
                                        item.Year,
                                        item.Semister,
                                        item.Section,
                                        tempjob
                                      )
                                    }
                                  >
                                    {/* {buttonname}  */}
                                    Save
                                  </button>
                                </td>
                              </tr>
                            </tfoot>
                          ) : null}
                        </Fragment>
                      );

                      //here is the end
                    })
                  : null}
              </table>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

// Registrar.propTypes = {
//     giveapplication: PropTypes.func.isRequired
//   };

const mapStateToProps = (state) => ({
  user: state.authreducer.user,
  isauthenticated: state.authreducer.isauthenticated,
  instructorstudents: state.students.instructorstudents,
  studentscourseregistered: state.students.studentscourseregistered,
  tempjob: state.instructor.tempjob,
  instructorassessment: state.instructor.instructorassessment,
  instructormark: state.instructor.instructormark,
  loading: state.instructor.loading,
  markonly: state.instructor.markonly,
});

export default connect(mapStateToProps, {
  loaduserinstructor,
  getinstructorstudentgrade,
  setgrade,
  setmark,
  getmark,
})(Instructorgrade);
