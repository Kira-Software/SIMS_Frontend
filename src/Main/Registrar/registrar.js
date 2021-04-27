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
  Badge,
} from "@material-ui/core";

import { Link } from "react-router-dom";

import axios from "axios";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import Regheader from "../Header/regheader";
import Request from "./request";
import { giveapplication } from "../Redux/Action/giveapplication";
import { getregistrarapprovalrequests } from "../Redux/Action/departmentgradeaproval";

import Footer from "../Footer/footer";

const Registrar = ({
  giveapplication,
  studapplication,
  loading,
  getregistrarapprovalrequests,
}) => {
  useEffect(() => {
    giveapplication();
  }, []);

  const handleregistrarapproval = () => {
    getregistrarapprovalrequests();
  };

  return (
    <Fragment>
      <Regheader />

      <Badge
        badgeContent={!loading ? studapplication.length : null}
        color="primary"
        style={{ marginTop: 50 }}
      >
        <Link
          to="/request"
          style={{
            textDecoration: "none",
            // borderStyle: "dashed",
            // marginTop: 50,
            // marginLeft: 100,
          }}
        >
          <button
            style={{ marginLeft: 50 }}
            // variant="contained"
            // color="secondary"
            className="btn btn-warning"
          >
            {" "}
            Student Request
          </button>
        </Link>
      </Badge>

      <Link to="/approved" style={{ textDecoration: "none" }}>
        <button
          style={{ marginTop: 50, marginLeft: 50 }}
          className="btn btn-warning"

          // variant="outlined"
          // color="primary"
        >
          {" "}
          Approved Students
        </button>
      </Link>

      <Link to="/registrarapproval" style={{ textDecoration: "none" }}>
        <button
          style={{ marginTop: 50, marginLeft: 50 }}
          className="btn btn-warning"
          // variant="outlined"
          // color="primary"
          onClick={handleregistrarapproval}
        >
          {" "}
          Grade Approval Requests
        </button>
      </Link>

      <Link to="/academiccalendar" style={{ textDecoration: "none" }}>
        <button
          style={{ marginTop: 50, marginLeft: 50 }}
          className="btn btn-warning"

          // variant="outlined"
          // color="primary"
          // onClick={handleregistrarapproval}
        >
          {" "}
          Create Academic Calendar
        </button>
      </Link>

      <Link to="/showcalendar" style={{ textDecoration: "none" }}>
        <button
          style={{ marginTop: 50, marginLeft: 50 }}
          className="btn btn-warning"

          // variant="outlined"
          // color="primary"
          // onClick={handleregistrarapproval}
        >
          {" "}
          Academic Calendar Report
        </button>
      </Link>

      <Footer />
    </Fragment>
  );
};

Registrar.propTypes = {
  giveapplication: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  studapplication: state.application.studapplication,
  loading: state.application.loading,

  // loading: state.survey.loading
});

export default connect(mapStateToProps, {
  giveapplication,
  getregistrarapprovalrequests,
})(Registrar);

//export default Registrar;
