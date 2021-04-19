import React, { Fragment, useState } from "react";
import { Paper, Grid, FormControl, TextField, Button } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Headerlogin from "../Header/headerlogin";
import { Redirect, Link } from "react-router-dom";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { mainlogin } from "../Redux/Action/mainlogin";

import Alert from "../layout/alert";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

//import Alert from "../../layout/alert";

const Mainlogin = ({ mainlogin, isauthenticated }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [formdata, setformdata] = useState({
    Departmentname: "",
    Password: "",
  });

  const { Departmentname, Password } = formdata;

  const changer = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handlesubmit = async (event) => {
    event.preventDefault();
    console.log("SUCCESS");
    console.log(
      "the value of them respectively is " + Departmentname + Password
    );
    console.log("the value of isauthenticated is " + isauthenticated);

    mainlogin(Departmentname, Password);
  };

  if (isauthenticated) {
    return <Redirect to="/department" />;
  }

  return (
    <Fragment>
      <Headerlogin />

      <Dialog
        open={true}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Login</DialogTitle>
        <DialogContent style={{width: 300}}>
            {/* <div style={{marginBottom: 50}}>
                 <Alert />
            </div> */}
           
         <DialogContentText>
           {/*   To subscribe to this website, please enter your email address here.
            We will send updates occasionally.*/}
            <Alert />
          </DialogContentText> 
          <TextField
            name="Departmentname"
            label="Department Name"
            onChange={(e) => changer(e)}
            value={Departmentname}
            fullWidth
            autoFocus
          />
          <br></br> <br></br>
          <TextField
            name="Password"
            label="Password"
            type="password"
            value={Password}
            onChange={(e) => changer(e)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button
            color="primary"
            variant="contained"
            onClick={(event) => handlesubmit(event)}
          //  style={{ marginTop: 100, marginLeft: 0, width: 70 }}
          >
            <input type="submit" value="Log In" />
          </Button>
          {/* <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button> */}
        </DialogActions>
      </Dialog>
      {/* 
      <Paper
        elevation={10}
        style={{ height: 300, width: "50%", margin: "auto", marginTop: 100 }}
      >
        <Alert />
        <FormControl style={{ marginLeft: 100, marginTop: 50 }}>
          <form onSubmit={(event) => handlesubmit(event)}>
            <AccountCircle />
            <TextField
              name="Departmentname"
              label="Department Name"
              onChange={(e) => changer(e)}
              value={Departmentname}
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
      </Paper> */}
    </Fragment>
  );
};

Mainlogin.propTypes = {
  mainlogin: PropTypes.func.isRequired,
  isauthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isauthenticated: state.authreducer.isauthenticated,
});
//export default Mainlogin

export default connect(mapStateToProps, { mainlogin })(Mainlogin);
