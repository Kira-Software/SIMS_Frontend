import React, { Fragment, useState, useEffect, } from "react"

import {
    AppBar, Toolbar, Typography, Paper,
    FormControl, Grid, Button, TextField, FormLabel, RadioGroup, FormControlLabel, Radio,
    FormGroup, Checkbox
} from "@material-ui/core"

import { Link, Redirect } from "react-router-dom";

import axios from "axios";

import { connect } from "react-redux";
// import PropTypes from "prop-types";

import Header from "../Header/header"
import { addinstructor } from "../Redux/Action/instructor"
//import {giveapplication} from "../Redux/Action/giveapplication"



const Addinstructor = ({ addinstructor }) => {
    // useEffect(() => {
    //     giveapplication();
    //   }, []);

    const [formdata, setformdata] = useState({
        Instructorfname: "",
        Instructormname: "",
        Instructorlname: "",
        Birthdate: "",
        Sex: ""

    });

    const { Instructorfname, Instructormname, Instructorlname, Birthdate, Sex } = formdata;

    const changer = e => {
        setformdata({ ...formdata, [e.target.name]: e.target.value });
    };


    const handlesubmit = async event => {

        event.preventDefault();
        console.log("SUCCESS");
        //   console.log("the value of them respectively is " + Departmentname + Duration)


        addinstructor(Instructorfname, Instructormname, Instructorlname, Birthdate, Sex);
    };

    return (
        <Fragment>

            <h3 style={{ marginLeft: "45%", marginTop: 50, marginBottom: -90 }}>Add New Instructor</h3>

            <Paper elevation={10} style={{ height: 550, width: "50%", margin: "auto", marginTop: 100,marginBottom:100 }}>

                <FormControl style={{ marginLeft: 100, marginTop: 50 }}>
                    <form onSubmit={event => handlesubmit(event)}>

                        <TextField
                            name="Instructorfname"
                            label="Instructor first name"
                            onChange={e => changer(e)}
                            value={Instructorfname}
                        />
                        <br></br> <br></br>

                        <TextField
                            name="Instructormname"
                            label="Instructor middle name"
                            value={Instructormname}
                            onChange={e => changer(e)}
                            style={{ marginLeft: 0 }}

                        />

                        <br></br> <br></br>

                        <TextField
                            name="Instructorlname"
                            label="Instructor last name"
                            value={Instructorlname}
                            onChange={e => changer(e)}
                            style={{ marginLeft: 0 }}

                        />

                        <p style={{ marginTop: 50 }}>Date of birth </p>

                        <input type="date" name="Birthdate" value={Birthdate}
                            onChange={e => changer(e)} />



                        <p style={{ marginTop: 50 }}>Sex </p>

                        <FormControl component="fieldset">

                            <RadioGroup
                                //aria-label="gender"
                                name="Sex"
                                value={Sex}
                                style={{ display: "inline", marginLeft: 50 }}
                                onChange={e => changer(e)}
                            >
                                <FormControlLabel
                                    value="Female"
                                    control={<Radio />}
                                    label="Female"
                                />
                                <FormControlLabel
                                    value="Male"
                                    control={<Radio />}
                                    label="Male"
                                />
                            </RadioGroup>
                        </FormControl>




                        <Button
                            color="primary"
                            variant="contained"
                            style={{ marginTop: 100, marginLeft: 0, width: 100 }}
                        >
                            <input type="submit" value="Add Instructor" />
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
    )

}
//export default addcourse;


// Registrar.propTypes = {
//     giveapplication: PropTypes.func.isRequired
//   };

const mapStateToProps = state => ({
    // studapplication: state.reducer.studapplication,
    // loading: state.reducer.loading,

    // loading: state.survey.loading

    // isauthenticated: state.authreducer.isauthenticated
});

export default connect(mapStateToProps, { addinstructor })(Addinstructor);

