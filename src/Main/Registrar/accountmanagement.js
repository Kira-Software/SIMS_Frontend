import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import Regheader from "../Header/regheader";
import { Grid, Typography, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import Alert from "../layout/alert";

import {
  changedepartmentpassword,
  blockdepartmentaccount,
} from "../Redux/Action/department";

import { useDispatch, useSelector } from "react-redux";
import setalert from "../Redux/Action/alert";
import instructor from "../Redux/Reducers/instructor";
const Registrarregrading = () => {
  //  const user = useSelector(state => state.authreducer.user)
  const dispatch = useDispatch();

  const [displaydepartment, setdisplaydepartment] = React.useState("none");
  const [displayinstructor, setdisplayinstructor] = React.useState("none");
  const [displaystudent, setdisplaystudent] = React.useState("none");

  const [Resetdata, setResetdata] = React.useState({
    Departmentname: "",
    Newpassword: "",
  });

  const [blockdata, setblockdata] = useState("");
  const [unblockdata, setunblockdata] = useState("");

  const { Departmentname, Newpassword } = Resetdata;

  const handledepartment = () => {
    if (displaydepartment === "none") {
      setdisplayinstructor("none");
      setdisplaystudent("none");
      setdisplaydepartment("block");
    } else {
      setdisplaydepartment("none");
    }
  };

  const handleinstructor = () => {
    if (displayinstructor === "none") {
      setdisplayinstructor("block");
      setdisplaystudent("none");
      setdisplaydepartment("none");
    } else {
      setdisplayinstructor("none");
    }
  };

  const handlestudent = () => {
    if (displaystudent === "none") {
      setdisplayinstructor("none");
      setdisplaystudent("block");
      setdisplaydepartment("none");
    } else {
      setdisplaystudent("none");
    }
  };
  const handlesubmit = () => {
    console.log(
      "the values of accepted variables are",
      Departmentname,
      Newpassword
    );
    dispatch(changedepartmentpassword(Departmentname, Newpassword));
  };

  const handleblock = () => {
    console.log("the values of accepted variables are", Departmentname);
    const status = window.confirm(
      "Are you sure you want to block this account?"
    );
    if (status) {
      dispatch(blockdepartmentaccount(Departmentname, "block"));
    }
  };

  const handleunblock = () => {
    console.log("the values of accepted variables are", Departmentname);
    const status = window.confirm(
      "Are you sure you want to unblock this account?"
    );
    if (status) {
      dispatch(blockdepartmentaccount(Departmentname, "unblock"));
    }
  };
  const changer = (e) => {
    setResetdata({ ...Resetdata, [e.target.name]: e.target.value });
  };

  const blockchanger = (e) => {
    setblockdata(e.target.value);
  };

  const unblockchanger = (e) => {
    setunblockdata(e.target.value);
  };
  return (
    <Fragment>
      <Regheader />

      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <div style={{ margin: 50 }}>
            <button
              className="btn btn-primary btn-rounded"
              onClick={handledepartment}
            >
              Department Account
            </button>
          </div>
          <div style={{ margin: 50 }}>
            <button
              className="btn btn-primary btn-rounded"
              onClick={handleinstructor}
            >
              Instructor Account
            </button>
          </div>

          <div style={{ margin: 50 }}>
            <button
              className="btn btn-primary btn-rounded"
              onClick={handlestudent}
            >
              Student Account
            </button>
          </div>

          {/* <div style={{ margin: 50 }}>
            <button
              className="btn btn-primary btn-rounded"
              onClick={handleaddstudent}
            >
              Approve Grade
            </button>
          </div> */}
        </Grid>

        <Grid item xs={12} lg={6} xl={6}>
          <div style={{ margin: 50, display: displaydepartment }}>
            <div className="card" style={{ marginTop: 50, marginBottom: 100 }}>
              <h3 className="card-header text-center font-weight-bold text-uppercase py-4">
                Department Account Management
              </h3>
              <Link to="/adddepartment" style={{ textDecoration: "none" }}>
                <button
                  //style={{ marginTop: 50, marginLeft: 50 }}
                  style={{ float: "right" }}
                  className="btn btn-success"
                  // variant="outlined"
                  // color="primary"
                  // onClick={handleregistrarapproval}
                >
                  {" "}
                  Create new Account
                </button>
              </Link>
              <br /> <br />
              <label style={{ marginRight: 20 }}>Department Name: </label>
              <TextField
                placeholder="Enter Department Name here"
                name="Departmentname"
                value={Departmentname}
                style={{ width: "50%" }}
                onChange={changer}
              />{" "}
              <br />
              <label style={{ marginRight: 30 }}>New Password: </label>
              <TextField
                type="password"
                placeholder="Enter New Password here"
                name="Newpassword"
                value={Newpassword}
                style={{ width: "50%" }}
                onChange={changer}
              />{" "}
              <br /> <br />
              <button
                className="btn btn-warning btn-rounded"
                style={{ width: "50%", marginLeft: "25%" }}
                onClick={handlesubmit}
              >
                Reset Password
              </button>
              <br /> <br />
              <br /> <br />
              <Alert />
              <label style={{ marginRight: 20 }}>Department Name: </label>
              <TextField
                placeholder="Enter Department Name here"
                name="Departmentname"
                style={{ width: "50%" }}
                value={blockdata}
                onChange={blockchanger}
              />{" "}
              <br /> <br />
              <button
                className="btn btn-danger btn-rounded"
                style={{ width: "50%", marginLeft: "25%" }}
                onClick={handleblock}
              >
                Block Account
              </button>
              <br /> <br />
              <br /> <br />
              <label style={{ marginRight: 20 }}>Department Name: </label>
              <TextField
                placeholder="Enter Department Name here"
                name="Departmentname"
                style={{ width: "50%" }}
                value={unblockdata}
                onChange={unblockchanger}
              />{" "}
              <br /> <br />
              <button
                className="btn btn-primary btn-rounded"
                style={{ width: "50%", marginLeft: "25%" }}
                onClick={handleunblock}
              >
                Unblock Account
              </button>
            </div>
          </div>
{/* ////////////////////////////////////////////////////////////////////////////////////////// */}
          <div style={{ margin: 50, display: displayinstructor }}>
            <div className="card" style={{ marginTop: 50, marginBottom: 100 }}>
              <h3 className="card-header text-center font-weight-bold text-uppercase py-4">
                Instructor Account Management
              </h3>
           
              <br /> <br />
              <label style={{ marginRight: 20 }}>Instructor Name: </label>
              <TextField
                placeholder="Enter Instructor Name here"
                name="Instructorname"
                style={{ width: "50%" }}

                // value={Instructorname}
                // onChange={changer}
              />{" "}
              <br />
              <label style={{ marginRight: 30 }}>New Password: </label>
              <TextField
                type="password"
                placeholder="Enter New Password here"
                name="Newipassword"
                style={{ width: "50%" }}

                // value={Newipassword}
                // onChange={changer}
              />{" "}
              <br /> <br />
              <button
                className="btn btn-warning btn-rounded"
                style={{ width: "50%", marginLeft: "25%" }}
                //onClick={handlesubmit}
              >
                Reset Password
              </button>
              <br /> <br />
              <br /> <br />
              <Alert />
              <label style={{ marginRight: 20 }}>Instructor Name: </label>
              <TextField
                placeholder="Enter Instructor Name here"
                name="Instructor"
                style={{ width: "50%" }}
                // value={blockdata}
                // onChange={blockchanger}
              />{" "}
              <br /> <br />
              <button
                className="btn btn-danger btn-rounded"
                style={{ width: "50%", marginLeft: "25%" }}
                //onClick={handleblock}
              >
                Block Account
              </button>
              <br /> <br />
              <br /> <br />
              <label style={{ marginRight: 20 }}>Instructor Name: </label>
              <TextField
                placeholder="Enter Instructor Name here"
                name="Instructorname"
                style={{ width: "50%" }}
                // value={unblockdata}
                // onChange={unblockchanger}
              />{" "}
              <br /> <br />
              <button
                className="btn btn-primary btn-rounded"
                style={{ width: "50%", marginLeft: "25%" }}
               // onClick={handleunblock}
              >
                Unblock Account
              </button>
            </div>
          </div>

          <div style={{ margin: 50, display: displaystudent }}>
            <h6>student Account management</h6>
          </div>
        </Grid>
      </Grid>

      {/* <button className="btn btn-primary btn-rounded">Approve</button> */}
    </Fragment>
  );
};

export default Registrarregrading;
