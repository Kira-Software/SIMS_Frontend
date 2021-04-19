import React, { Fragment, useState, useEffect, } from "react"

import {
  AppBar, Toolbar, Typography, Paper,
  FormControl, Grid, Button, TextField, FormLabel, RadioGroup, FormControlLabel, Radio,
  FormGroup, Checkbox, CircularProgress, AccordionSummary, Accordion
} from "@material-ui/core"

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
//import "bootstrap"
//import "../../assets/css/bootstrap.min.css"


import { Link } from "react-router-dom";

import axios from "axios";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import Regheader from "../Header/regheader"

import { giveapplication } from "../Redux/Action/giveapplication"
import { giveapprovedapplication } from "../Redux/Action/giveapplication"

import Footer from "../Footer/footer"





const Approved = ({ giveapprovedapplication, studapplication, loading }) => {
  useEffect(() => {
    giveapprovedapplication();
  }, []);

  const newobj = studapplication;

  // console.log("the value of studapplicaton.Firstname is " + studapplication)
  // console.log("the value of the new object is " + typeof (newobj))

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const cl = { marginLeft: 80, color: "green", lineHeight: 5 }
  const imageclass = { width: 300, height: 300, mariginBottom: 50 }



  return (


    <Fragment>

      <Regheader />
      {/* <button className="btn btn-primary">kira</button> */}
      {/* <img src="/uploads/Kirubel.jpeg" alt="this is the photography image" style={{ width: 200, height: 200 }} /> */}
      {loading ? (
        <CircularProgress
          disableShrink
          style={{ marginTop: 200, marginLeft: 500 }}
        />
      ) : studapplication.length === 0? <p>There is No approved application yet</p>: <div style={{ marginTop: 100, marginBottom: 200 }}>

          {studapplication.map((data, idx) => {
            return (
              <Accordion expanded={expanded === data.Firstname}
                onChange={handleChange(data.Firstname)}
                key={idx} style={{ width: 1200, margin: "auto" }} >


                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography
                    style={{ textTransform: "capitalize", color: "blue", fontSize: 16 }}
                  >
                    {idx + 1}. {data.Firstname + `\t` + data.Middlename + `\t` + data.Lastname}
                  </Typography>
                </AccordionSummary>

                <span style={cl}> Phtograph:  </span>  <img src={data.Photograph} style={imageclass} /> <br></br>


                <span style={cl}> First Name:  </span>{data.Firstname}
                <span style={cl}> Middle Name:  </span>{data.Middlename}
                <span style={cl}> Last Name:  </span>{data.Lastname}
                <span style={cl}> Birthdate:  </span>{data.Birthdate}<br></br>
                <span style={cl}> Sex:  </span>{data.Sex}
                <span style={cl}> Telephone:  </span>{data.Telephone}
                <span style={cl}> Email:  </span>{data.Email}
                <span style={cl}> Birth Region:  </span>{data.Birthregion}<br></br>
                <span style={cl}> Birth Zone:  </span>{data.Birthzone}
                <span style={cl}> Birth Woreda:  </span>{data.Birthworeda}
                <span style={cl}> Current Region:  </span>{data.Currentregion}
                <span style={cl}> Current Zone:  </span>{data.Currentzone}<br></br>
                <span style={cl}> Current Woreda:  </span>{data.Currentworeda}
                <span style={cl}> Current House No:  </span>{data.Currenthouseno}
                <span style={cl}> Contact Fname:  </span>{data.Contactfname}
                <span style={cl}> Contact Mname :  </span>{data.Contactmname}<br></br>

                <span style={cl}> Contact Lname:  </span>{data.Contactlname}
                <span style={cl}> Contact Region:  </span>{data.Contactregion}
                <span style={cl}> Contact Zone:  </span>{data.Contactzone}
                <span style={cl}> Contact Woreda :  </span>{data.Contactworeda}<br></br>

                <span style={cl}> Contact House NO:  </span>{data.Contacthouseno}
                <span style={cl}> Current Email:  </span>{data.Contactemail}
                <span style={cl}> Contact Telephone:  </span>{data.Contacttelephone}
                <span style={cl}> Last Education :  </span>{data.Lasteducation}<br></br>
                <span style={cl}> Selected Field:  </span>{data.Field}
                <span style={cl}> is Approved?  </span>{data.Approved ? "True" : "False "} <br></br>


                <span style={cl}> Grade 12:  </span>  <img src={data.File12} style={imageclass} />
                <span style={cl}> Grade 10:  </span>  <img src={data.File10} style={imageclass} /> <br></br>
                <span style={cl}> Grade 8:  </span>  <img src={data.File8} style={imageclass} />
                <span style={cl}> Grade 9-10:  </span>  <img src={data.File9_10} style={imageclass} /> <br></br>
                <span style={cl}> Grade 11-12:  </span>  <img src={data.File11_12} style={imageclass} />
                <span style={cl}> Financial Info:  </span>  <img src={data.Financial} style={imageclass} /> <br></br>






                <br></br><br></br><br></br>

                {/* <Button variant="contained" color="primary" style={{ marginLeft: "80%" }}>Approve</Button> */}

              </Accordion>
            )
          })}


        </div>
      }

      <Footer />

    </Fragment>
  )

}


// Approved.propTypes = {
//     giveapplication: PropTypes.func.isRequired
//   };

Approved.propTypes = {
  // studapplication: PropTypes.array.isRequired,
  giveapprovedapplication: PropTypes.func.isRequired
  // fillsurvey: PropTypes.array.isRequired,
  // getsurveytofill: PropTypes.func.isRequired,
  // addchoice: PropTypes.func.isRequired,
  // allchoices: PropTypes.array.isRequired,
  // getallchoices: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  studapplication: state.application.studapplication,
  loading: state.application.loading

  // loading: state.survey.loading
});
 
export default connect(mapStateToProps, { giveapprovedapplication })(Approved);
