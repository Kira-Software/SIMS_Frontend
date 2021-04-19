import React, { Fragment, useState, useEffect } from "react";

import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

import { Copyright } from "@material-ui/icons";

const Footer = () => {
  return (
    <div
      style={{
        height: 100,
        marginTop: 400,
        backgroundColor: "black",
        color: "white",
      }}
    >
      <center>
        {" "}
        <Copyright /> All rights reserved
      </center>
    </div>
  );
};

export default Footer;
