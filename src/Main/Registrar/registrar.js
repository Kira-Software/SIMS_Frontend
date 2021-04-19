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

import Footer from "../Footer/footer"


const Registrar = ({ giveapplication, studapplication, loading }) => {
  useEffect(() => {
    giveapplication();
  }, []);

  return (
    <Fragment>
      <Regheader />
    
      <Badge
        badgeContent={!loading ? studapplication.length : null}
        color="primary"
        style={{marginTop:50}}
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
         
          <Button
            style={{ marginLeft: 100 }}
            variant="outlined"
            color="primary"
          >
            {" "}
            Requests
          </Button>
        </Link>
      </Badge>

   

      {/* <Link to="/request" style={{ textDecoration: "none" }}>
        <Button
          style={{ marginTop: 50, marginLeft: 100 }}
          variant="outlined"
          color="primary"
        >
          {" "}
          Requests
        </Button>
      </Link> */}

      <Link to="/approved" style={{ textDecoration: "none" }}>
        <Button
          style={{ marginTop: 50, marginLeft: 100 }}
          variant="outlined"
          color="primary"
        >
          {" "}
          Approved
        </Button>
      </Link>

      <Link to="/adddepartment" style={{ textDecoration: "none" }}>
        <Button
          style={{ marginTop: 50, marginLeft: 100 }}
          variant="outlined"
          color="primary"
        >
          {" "}
          Add Department
        </Button>
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

export default connect(mapStateToProps, { giveapplication })(Registrar);

//export default Registrar;
