import React, { Fragment, useState, useEffect } from "react";

import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

const Regheader = () => {
  return (
    <Fragment>
      <AppBar position="relative">
        <Toolbar style={{  height: 100 }}>
        <img src="./Images/aastu.jpg" />

          <Typography variant="h4">
            Student Information Management System
          </Typography>
          <span style={{ marginLeft: 400, marginTop: 50 }}>Registrar</span>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Regheader;
