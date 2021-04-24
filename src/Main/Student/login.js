import { Button, FormControl, Paper, TextField } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Headerlogin from "../Header/headerlogin";
import Alert from "../layout/alert";
import { login } from "../Redux/Action/authentication";

//import Alert from "../../layout/alert";

const Loging = ({ login, isauthenticated }) => {
  const [formdata, setformdata] = useState({
    Id: "",
    Temppass: "",
    Newpass: "",
  });

  const { Id, Temppass, Newpass } = formdata;

  const changer = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handlesubmit = async (event) => {
    event.preventDefault();
    console.log("SUCCESS");
    console.log("the value of them respectively is " + Id + Temppass + Newpass);
    console.log("the value of isauthenticated is " + isauthenticated);

    login(Id, Temppass, Newpass);
  };

  if (isauthenticated) {
    return <Redirect to="/homestudent" />;
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
              name="Id"
              label="Student Id"
              onChange={(e) => changer(e)}
              value={Id}
            />
            <br></br> <br></br>
            <TextField
              name="Temppass"
              label="Verification code"
              value={Temppass}
              onChange={(e) => changer(e)}
              style={{ marginLeft: 20 }}
            />
            <br></br> <br></br>
            <TextField
              name="Newpass"
              type="password"
              label="New password"
              value={Newpass}
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
            {/* <Link
                  to="/signup"
                  color="secondary"
                  style={{ marginTop: 0, marginLeft: 350 }}
                >
                  I don't have an account
                </Link> */}
          </form>
        </FormControl>
      </Paper>
    </Fragment>
  );
};

Loging.propTypes = {
  login: PropTypes.func.isRequired,
  isauthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isauthenticated: state.authreducer.isauthenticated,
});
//export default Loging

export default connect(mapStateToProps, { login })(Loging);
