//importing the necessary documentt

import React, { Fragment, useState, useEffect } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Paper,
  FormControl,
  Grid,
  Button,
  TextField,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormGroup,
  Checkbox,
} from "@material-ui/core";

import "../App.css";

import { Link } from "react-router-dom";

import axios from "axios";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { send_application } from "../Redux/Action/sendapplication";

import Headerapplication from "../Header/headerapplication";
import Alert from "../layout/alert";

import Footer from "../Footer/footer"

//beginning of the functional component

const Application = ({ send_application }) => {
  //declaring state variables to accept data from the form file

  const [formdata, setformdata] = useState({
    Firstname: "",
    Middlename: "",
    Lastname: "",
    Birthdate: "",
    Sex: "",
    Telephone: "",
    Email: "",
    Birthregion: "",
    Birthzone: "",
    Birthworeda: "",
    Currentregion: "",
    Currentzone: "",
    Currentworeda: "",
    Currenthouseno: "",
    Contactfname: "",
    Contactmname: "",
    Contactlname: "",
    Contactregion: "",
    Contactzone: "",
    Contactworeda: "",
    Contacthouseno: "",
    Contactemail: "",
    Contacttelephone: "",
    Lasteducation: "",
    Field: "",
    File12: "",
    File10: "",
    File8: "",
    File9_10: "",
    File11_12: "",
    Financial: "",
    Photograph: "",
  });

  // const [imagedata, setimagedata] = useState({

  //   File12: "",
  //   File10: "",
  //   File8: "",
  //   File9_10: "",
  //   File11_12: "",
  //   Financial: "",
  //   Photograph: "",
  // })

  //organizing the state variables in to one object

  const {
    Firstname,
    Middlename,
    Lastname,
    Birthdate,
    Sex,
    Telephone,
    Email,
    Birthregion,
    Birthzone,
    Birthworeda,
    Currentregion,
    Currentzone,
    Currentworeda,
    Currenthouseno,
    Contactfname,
    Contactmname,
    Contactlname,
    Contactregion,
    Contactzone,
    Contactworeda,
    Contacthouseno,
    Contactemail,
    Contacttelephone,
    Lasteducation,
    Field,
    File12,
    File10,
    File8,
    File9_10,
    File11_12,
    Financial,
    Photograph,
  } = formdata;

  //functions that are to be called after an event occurs

  const handlesubmit = (event) => {
    event.preventDefault();
    //send_application({ Firstname, Middlename, Lastname })
    send_application(formdata);
    // console.log(formdata.Middlename)
  };

  const changer = (e) => {
    //  console.log("the form value  is " + {...formdata})
    //console.log("the event . target value is that "+e.target.type)
    setformdata({
      ...formdata,
      [e.target.name]:
        e.target.type === "file" ? e.target.files[0] : e.target.value,
    });
  };

  const imagechanger = (e) => {
    // console.log("the uploaded file name is " + e.target.name)
    // console.log("the uploaded image file 0 is " + e.target.files[0])
    //   setimagedata({ ...imagedata, [e.target.name]: e.target.files[0]});
    // console.log(imagedata)
  };

  const changehandler = (event) => {
    console.log(event.target);
  };

  //returning of the functional component starts here

  return (
    <Fragment>
      <Headerapplication />

      <Paper style={{ margin: 100 }} elevation={10}>
      <Typography variant="h4" style={{textAlign:"center", marginBottom: 50}}>Application Form </Typography>


        <FormControl style={{ marginLeft: 100, marginTop: 50 }}>
          <form onSubmit={(event) => handlesubmit(event)}>
            <Typography>1. Students Full name </Typography>
            {/* <label>First Name</label><br></br> */}
            <TextField
              name="Firstname"
              label="First name"
              onChange={(e) => changer(e)}
              value={Firstname}
            />
            <TextField
              name="Middlename"
              label="Middle name"
              value={Middlename}
              onChange={(e) => changer(e)}
              style={{ width: 200, marginLeft: 30 }}
            />
            <TextField
              name="Lastname"
              label="Last name"
              value={Lastname}
              onChange={(e) => changer(e)}
              style={{ width: 200, marginLeft: 30 }}
            />
            <Typography style={{ marginTop: 50 }}>2. Date of birth </Typography>
            <input
              type="date"
              name="Birthdate"
              value={Birthdate}
              onChange={(e) => changer(e)}
            />
            <Typography style={{ marginTop: 50 }}>3. Sex </Typography>
            <FormControl component="fieldset">
              <RadioGroup
                //aria-label="gender"
                name="Sex"
                value={Sex}
                style={{ display: "inline", marginLeft: 50 }}
                onChange={(e) => changer(e)}
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
            <Typography style={{ marginTop: 50 }}>4. Tel No </Typography>
            <TextField
              name="Telephone"
              label="Telephone"
              value={Telephone}
              onChange={(e) => changer(e)}
              style={{ width: 200, marginLeft: 30 }}
            />
            <Typography style={{ marginTop: 50 }}>5. Email </Typography>
            <TextField
              name="Email"
              type="email"
              label="Email"
              value={Email}
              onChange={(e) => changer(e)}
              style={{ width: 200, marginLeft: 30 }}
            />
            <Typography style={{ marginTop: 50 }}>
              6. Place of birth{" "}
            </Typography>
            <TextField
              name="Birthregion"
              label="Region"
              onChange={(e) => changer(e)}
              value={Birthregion}
            />
            <TextField
              name="Birthzone"
              label="Zone"
              value={Birthzone}
              onChange={(e) => changer(e)}
              style={{ width: 200, marginLeft: 30 }}
            />
            <TextField
              name="Birthworeda"
              label="woreda"
              value={Birthworeda}
              onChange={(e) => changer(e)}
              style={{ width: 200, marginLeft: 30 }}
            />
            <Typography style={{ marginTop: 50 }}>
              7. Current address{" "}
            </Typography>
            <TextField
              name="Currentregion"
              label="Region"
              onChange={(e) => changer(e)}
              value={Currentregion}
            />
            <TextField
              name="Currentzone"
              label="Zone"
              value={Currentzone}
              onChange={(e) => changer(e)}
              style={{ width: 200, marginLeft: 30 }}
            />
            <TextField
              name="Currentworeda"
              label="woreda"
              value={Currentworeda}
              onChange={(e) => changer(e)}
              style={{ width: 200, marginLeft: 30 }}
            />
            <TextField
              name="Currenthouseno"
              label="House No"
              value={Currenthouseno}
              onChange={(e) => changer(e)}
              style={{ width: 200, marginLeft: 30 }}
            />
            <Typography style={{ marginTop: 50 }}>
              8. Contact person{" "}
            </Typography>
            <TextField
              name="Contactfname"
              label="First name"
              onChange={(e) => changer(e)}
              value={Contactfname}
            />
            <TextField
              name="Contactmname"
              label="Middle name"
              value={Contactmname}
              onChange={(e) => changer(e)}
              style={{ width: 200, marginLeft: 30 }}
            />
            <TextField
              name="Contactlname"
              label="Last Name"
              value={Contactlname}
              onChange={(e) => changer(e)}
              style={{ width: 200, marginLeft: 30 }}
            />
            <Typography style={{ marginTop: 20 }}>Current Address </Typography>
            <TextField
              name="Contactregion"
              label="Region"
              onChange={(e) => changer(e)}
              value={Contactregion}
            />
            <TextField
              name="Contactzone"
              label="Zone"
              value={Contactzone}
              onChange={(e) => changer(e)}
              style={{ width: 200, marginLeft: 30 }}
            />
            <TextField
              name="Contactworeda"
              label="woreda"
              value={Contactworeda}
              onChange={(e) => changer(e)}
              style={{ width: 200, marginLeft: 30 }}
            />
            <br></br>
            <TextField
              name="Contacthouseno"
              label="House No"
              value={Contacthouseno}
              onChange={(e) => changer(e)}
              style={{ width: 200, marginLeft: 30 }}
            />
            <TextField
              name="Contactemail"
              type="email"
              label="Email"
              value={Contactemail}
              onChange={(e) => changer(e)}
              style={{ width: 200, marginLeft: 30 }}
            />
            <TextField
              name="Contacttelephone"
              label="Telephone"
              value={Contacttelephone}
              onChange={(e) => changer(e)}
              style={{ width: 200, marginLeft: 30 }}
            />
            <Typography style={{ marginTop: 50 }}>
              9. Admitted on the basis of{" "}
            </Typography>
            <FormControl component="fieldset">
              <RadioGroup
                //aria-label="gender"
                name="Lasteducation"
                value={Lasteducation}
                style={{ display: "inline", marginLeft: 50 }}
                onChange={(e) => changer(e)}
              >
                <FormControlLabel
                  value="Highschool diploma"
                  control={<Radio />}
                  label="Highschool diploma"
                />
                <FormControlLabel
                  value="Advance standing"
                  control={<Radio />}
                  label="Advance standing"
                />

                <FormControlLabel
                  value="Vocational education"
                  control={<Radio />}
                  label="Vocational education"
                />
              </RadioGroup>
            </FormControl>
            <Typography style={{ marginTop: 50 }}>
              10.Field of Application{" "}
            </Typography>
            <FormControl component="fieldset">
              <RadioGroup
                //aria-label="gender"
                name="Field"
                value={Field}
                style={{ display: "inline", marginLeft: 50 }}
                onChange={(e) => changer(e)}
              >
                <FormControlLabel
                  value="S.E."
                  control={<Radio />}
                  label="S.E."
                />
                <FormControlLabel
                  value="E.E."
                  control={<Radio />}
                  label="E.E."
                />

                <FormControlLabel
                  value="M.E."
                  control={<Radio />}
                  label="M.E."
                />
              </RadioGroup>
            </FormControl>
            <Typography style={{ marginTop: 50 }}>
              11. Necessary documents{" "}
            </Typography>
            Grade 12 National Exam
            <input
              type="file"
              onChange={(e) => changer(e)}
              name="File12"
              multiple
            />{" "}
            <br></br>
            <br></br>
            Grade 10 National Exam
            <input
              type="file"
              name="File10"
              onChange={(e) => changer(e)}
            />{" "}
            <br></br>
            <br></br>
            Grade 8 Regional Exam{" "}
            <input type="file" name="File8" onChange={(e) => changer(e)} />{" "}
            <br></br>
            <br></br>
            Grade 9-10 Transcript{" "}
            <input
              type="file"
              name="File9_10"
              onChange={(e) => changer(e)}
            />{" "}
            <br></br>
            <br></br>
            Grade 11-12 transcript{" "}
            <input
              type="file"
              name="File11_12"
              onChange={(e) => changer(e)}
            />{" "}
            <br></br>
            <br></br>
            Financial information{" "}
            <input
              type="file"
              name="Financial"
              onChange={(e) => changer(e)}
            />{" "}
            <br></br>
            <br></br>
            Photograph{" "}
            <input
              type="file"
              name="Photograph"
              onChange={(e) => changer(e)}
            />{" "}
            <br></br>
            <Button
              color="primary"
              variant="contained"
              style={{ marginTop: 100, marginLeft: 400, width: 100 ,marginBottom:100}}
            >
              <input type="submit" value="Submit Form" />
            </Button>
            
            <Alert />

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

//checking the proptypes of the imported functions

Application.propTypes = {
  send_application: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  // mysurvey: state.survey.mysurvey,
  // loading: state.survey.loading
});

//exporting the final function

export default connect(mapStateToProps, { send_application })(Application);
