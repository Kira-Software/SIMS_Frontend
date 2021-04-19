import React, { Fragment, useState } from "react";
import { Paper, Grid, FormControl, TextField, Button } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Headerlogin from "../Header/headerlogin";
import { Redirect, Link } from "react-router-dom";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logininstructor } from "../Redux/Action/authinstructor";

import Alert from "../layout/alert";

//import Alert from "../../layout/alert";

const Loginforinstructor = ({ logininstructor, isauthenticated }) => {
  const [formdata, setformdata] = useState({
    Instructorfname: "",
    Password: "",
  });

  const { Instructorfname, Password } = formdata;

  const changer = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handlesubmit = async (event) => {
    event.preventDefault();
    // console.log("SUCCESS");
    // console.log("the value of them respectively is " + Id + Temppass + Newpass);
    // console.log("the value of isauthenticated is " + isauthenticated);

    logininstructor(Instructorfname, Password);
  };

    if (isauthenticated) {
      return <Redirect to="/homeinstructor" />;
    }

  return (
    <Fragment>
      <Headerlogin />

      <Paper
        elevation={10}
        style={{ height: 300, width: "50%", margin: "auto", marginTop: 100 }}
      >
        <Alert />
        <FormControl style={{ marginLeft: 100, marginTop: 50 }}>
          <form onSubmit={(event) => handlesubmit(event)}>
            <AccountCircle />
            <TextField
              name="Instructorfname"
              label="Instructor First Name"
              onChange={(e) => changer(e)}
              value={Instructorfname}
            />
            <br></br> <br></br>
            <TextField
              name="Password"
              label="Password"
              type="password"
              value={Password}
              onChange={(e) => changer(e)}
              style={{ marginLeft: 20 }}
            />
            <Button
              color="primary"
              variant="contained"
              style={{ marginTop: 100, marginLeft: 0, width: 70 }}
            >
              <input type="submit" value="Log In" />
            </Button>
          </form>
        </FormControl>
      </Paper>
    </Fragment>
  );
};

Loginforinstructor.propTypes = {
  logininstructor: PropTypes.func.isRequired,
  isauthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isauthenticated: state.authreducer.isauthenticated,
});
//export default Loginforinstructor

export default connect(mapStateToProps, { logininstructor })(Loginforinstructor);
