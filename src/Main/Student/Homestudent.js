import React, { Fragment, useState, useEffect } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Paper,
  FormControl,
  Grid,
  Button,
  TextField,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormGroup,
  Checkbox,
} from "@material-ui/core";

import { Link, Redirect } from "react-router-dom";

import axios from "axios";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import Header from "../Header/header";
//import {giveapplication} from "../Redux/Action/giveapplication"
import { loaduserstud } from "../Redux/Action/authentication";
import {
  getaddsemistercourses,
  getaddtakencourses,
} from "../Redux/Action/studentaddcourse";
import {
  studentwithdrawal,
  getwithdrawal,
} from "../Redux/Action/studentwithdraw";

import { studentreadmission } from "../Redux/Action/studentreadmission";

const Homestudent = ({
  isauthenticated,
  loaduserstud,
  user,
  getaddsemistercourses,
  getaddtakencourses,
  studentwithdrawal,
  getwithdrawal,
  withdrawstud,
  studentreadmission,
}) => {
  useEffect(() => {
    loaduserstud();
    getwithdrawal();
  }, []);

  const handleaddbutton = () => {
    getaddsemistercourses(user.Semister);
    getaddtakencourses();
  };

  const [name, setname] = useState("");

  if (!isauthenticated) {
    return <Redirect to="/login" />;
  }

  let flag = false;

  const Allmenu = () => {
    return (
      <div>
        <h2 style={{ marginTop: 50 }}>
          Congratulations for your acceptance in{" "}
          {user !== null ? user.Field : null} Department !
        </h2>
        <h3>Please register first to continue</h3>

        <Link to="/Courseregistration" style={{ textDecoration: "none" }}>
          <Button
            style={{ marginTop: 50, marginLeft: 50 }}
            variant="outlined"
            color="primary"
          >
            Course Registration
          </Button>
        </Link>

        <Link to="/studentstatus" style={{ textDecoration: "none" }}>
          <Button
            style={{ marginTop: 50, marginLeft: 50 }}
            variant="outlined"
            color="primary"
          >
            {" "}
            Student Status
          </Button>
        </Link>

        <Link to="/addcourse" style={{ textDecoration: "none" }}>
          <Button
            style={{ marginTop: 50, marginLeft: 50 }}
            variant="outlined"
            color="primary"
            onClick={handleaddbutton}
          >
            {" "}
            Add course
          </Button>
        </Link>

        <Link to="/dropcourse" style={{ textDecoration: "none" }}>
          <Button
            style={{ marginTop: 50, marginLeft: 50 }}
            variant="outlined"
            color="primary"
          >
            {" "}
            Drop Course
          </Button>
        </Link>

        <Link to="#" style={{ textDecoration: "none" }}>
          <Button
            style={{ marginTop: 50, marginLeft: 50 }}
            variant="outlined"
            color="primary"
            onClick={() => {
              let x = window.confirm("Are you sure you want to withdraw?");
              if (x) {
                studentwithdrawal();
              }
            }}
          >
            {" "}
            Withdrawal
          </Button>
        </Link>
      </div>
    );
  };

  const Somemenu = () => {
    return (
      <div>
        <h2 style={{ marginTop: 50, color: "green" }}>
          You have requested to withdraw. Please Readmit to continue!
        </h2>
        <h3>However, you can see your course status as well as your grades</h3>
        <Link to="/studentstatus" style={{ textDecoration: "none" }}>
          <Button
            style={{ marginTop: 50, marginLeft: 50 }}
            variant="outlined"
            color="primary"
          >
            {" "}
            Student Status
          </Button>
        </Link>

        <Link to="#" style={{ textDecoration: "none" }}>
          <Button
            style={{ marginTop: 50, marginLeft: 50 }}
            variant="outlined"
            color="primary"
            onClick={() => {
              studentreadmission();
              alert(
                "You have successfully readmitted....please refresh the page to continue"
              );
            }}
          >
            {" "}
            Readmission
          </Button>
        </Link>
      </div>
    );
  };

  return (
    <Fragment>
      <Header name={user !== null ? user.Firstname : null} />

      {withdrawstud.map((item) => {
        if (item.Studentid === user._id) {
          flag = true;
          return <Somemenu />;
        }
      })}

      {flag ? null : <Allmenu />}

      {/* <h2 style={{ marginTop: 50 }}>
        Congratulations for your acceptance in{" "}
        {user !== null ? user.Field : null} Department !
      </h2>
      <h3>Please register first to continue</h3> */}

      {/* <Grid component>
        <Grid item lg={4} xl={4}>
          
        </Grid>
      </Grid> */}
    </Fragment>
  );
};

// Registrar.propTypes = {
//     giveapplication: PropTypes.func.isRequired
//   };

const mapStateToProps = (state) => ({
  // studapplication: state.reducer.studapplication,
  // loading: state.reducer.loading,

  // loading: state.survey.loading
  user: state.authreducer.user,
  isauthenticated: state.authreducer.isauthenticated,
  withdrawstud: state.students.withdrawstud,
});

export default connect(mapStateToProps, {
  loaduserstud,
  getaddsemistercourses,
  getaddtakencourses,
  studentwithdrawal,
  getwithdrawal,
  studentreadmission,
})(Homestudent);

//export default Homestudent;
