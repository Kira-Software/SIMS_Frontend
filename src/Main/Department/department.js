import React, { Fragment, useState, useEffect, } from "react"

import {
    AppBar, Toolbar, Typography, Paper,
    FormControl, Grid, Button, TextField, FormLabel, RadioGroup, FormControlLabel, Radio,
    FormGroup, Checkbox
} from "@material-ui/core"

import { Link,Redirect } from "react-router-dom";

import axios from "axios";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import Headerdept from "../Header/headerdept"
import Addcourse from "./addcourse"

import Coursestaff from "./coursestaff"
import {loaduser} from "../Redux/Action/mainlogin"
import Footer from "../Footer/footer"
//import {getcourses} from "../Redux/Action/course"



const Department = ({isauthenticated,loaduser,user}) => {
    useEffect(() => {
        loaduser();
      }, []);

    // if (!isauthenticated) {
    //     return <Redirect to="/mainlogin" />
    // }


    return (
        <Fragment>

            <Headerdept name={user !== null? user.Departmentname: null} />


            <Link to="/studentstaff" style={{ textDecoration: "none" }} >
                <Button style={{ marginTop: 50, marginLeft: 100 }}
                    variant="outlined" color="primary" >Student Information
                 </Button>
            </Link>


            <Link to="/course" style={{ textDecoration: "none" }} >
                <Button style={{ marginTop: 50, marginLeft: 100 }}
                    variant="outlined" color="primary" > Course Information
                 </Button>
            </Link>

            <Link to="/instructorstaff" style={{ textDecoration: "none" }} >
                <Button style={{ marginTop: 50, marginLeft: 100 }}
                    variant="outlined" color="primary" > Instructor Information
                 </Button>
            </Link>

            {/* <Link to="/request" style={{ textDecoration: "none" }} >
                <Button style={{ marginTop: 50, marginLeft: 100 }}
                    variant="outlined" color="primary" > Student Information
                 </Button>
            </Link> */}

            <Footer />


        </Fragment>
    )

}

// Department.propTypes = {
//     giveapplication: PropTypes.func.isRequired
//   };

const mapStateToProps = state => ({
    // studapplication: state.reducer.studapplication,
    // loading: state.reducer.loading,

    // loading: state.survey.loading
    isauthenticated: state.authreducer.isauthenticated,
    user: state.authreducer.user
});

export default connect(mapStateToProps,{loaduser})(Department);

//export default Department;