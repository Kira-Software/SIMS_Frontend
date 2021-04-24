import React, { Fragment, useState, useEffect } from "react";

import { connect } from "react-redux";
import { logout } from "../Redux/Action/authentication";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

//import Image from "../../../public/Images"

const Header = ({ logout, name }) => {
  const handlelogout = () => {
    logout();
  };

  //console.log("the value of name is "+ name)

  return (
    <Fragment>
      <AppBar position="relative" >
        <Toolbar style={{ height: 120 }}>
          <img src="./Images/aastu.jpg" alt="AASTU Logo" />
          <Typography
            variant="h4"
            style={{ fontFamily: "cursive", fontSize: 24 }}
          >
            Student Information Management System
          </Typography>
          <Button
            variant="outlined"
            style={{ backgroundColor: "white", marginLeft: 400 }}
            onClick={handlelogout}
          >
            Log Out{" "}
          </Button>
          <span style={{ marginLeft: 70, marginTop: 50 }}>Student {name}</span>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  isauthenticated: state.authreducer.isauthenticated,
});

export default connect(mapStateToProps, { logout })(Header);

//export default Header
