import { Button, FormControl, Paper, TextField } from "@material-ui/core";
import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
//import {giveapplication} from "../Redux/Action/giveapplication"
import Footer from "../Footer/footer";
// import PropTypes from "prop-types";
import Regheader from "../Header/regheader";
import { adddepartment } from "../Redux/Action/department";

const Adddepartment = ({ adddepartment }) => {
  // useEffect(() => {
  //     giveapplication();
  //   }, []);

  const [formdata, setformdata] = useState({
    Departmentname: "",
    Duration: "",
    Password: "",
  });

  const { Departmentname, Duration, Password } = formdata;

  const changer = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handlesubmit = async (event) => {
    event.preventDefault();
    console.log("SUCCESS");
    console.log(
      "the value of them respectively is " +
        Departmentname +
        Duration +
        Password
    );

    adddepartment(Departmentname, Duration, Password);
  };

  return (
    <Fragment>
      <Regheader />

      <Paper
        elevation={3}
        style={{ height: 300, width: "50%", margin: "auto", marginTop: 100 }}
      >
        <FormControl style={{ marginLeft: 100, marginTop: 50 }}>
          <form onSubmit={(event) => handlesubmit(event)}>
            <TextField
              name="Departmentname"
              label="Department name"
              onChange={(e) => changer(e)}
              value={Departmentname}
            />
            <br></br> <br></br>
            <TextField
              name="Duration"
              label="Duration"
              value={Duration}
              onChange={(e) => changer(e)}
              style={{ marginLeft: 0 }}
            />
            <br></br> <br></br>
            <TextField
              name="Password"
              label="Password"
              value={Password}
              type="password"
              onChange={(e) => changer(e)}
              style={{ marginLeft: 0 }}
            />
            <Button
              color="primary"
              variant="contained"
              style={{ marginTop: 80, marginLeft: 100, width: 70 }}
            >
              <input type="submit" value="Add" />
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

      <Footer />
    </Fragment>
  );
};
//export default Adddepartment;

// Registrar.propTypes = {
//     giveapplication: PropTypes.func.isRequired
//   };

const mapStateToProps = (state) => ({
  // studapplication: state.reducer.studapplication,
  // loading: state.reducer.loading,
  // loading: state.survey.loading
  // isauthenticated: state.authreducer.isauthenticated
});

export default connect(mapStateToProps, { adddepartment })(Adddepartment);
