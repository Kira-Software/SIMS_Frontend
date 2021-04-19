import React, { Fragment, useState, useEffect } from "react";

import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

const headerapplication = () => {
  return (
    <Fragment>
      <AppBar position="relative">
        <Toolbar style={{  height: 120 }}>
        <img src="./Images/aastu.jpg" />

          <Typography variant="h4">
            Student Information Management System
          </Typography>
          <span style={{ marginLeft: 400, marginTop: 50 }}>Applicant</span>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default headerapplication;
