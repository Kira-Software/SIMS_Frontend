import React, { useEffect } from "react";
import { Fragment } from "react";
import Regheader from "../Header/regheader";
import { Grid, Typography, TextField } from "@material-ui/core";

import { createregrading, getregrading } from "../Redux/Action/regrading";

import { useDispatch, useSelector } from "react-redux";
const Registrarregrading = () => {
  //  const user = useSelector(state => state.authreducer.user)
  const dispatch = useDispatch();
  const regradinglist = useSelector((state) => state.registrar.regradinglist);

  const [displayadd, setdisplayadd] = React.useState("none");
  const [displaylist, setdisplaylist] = React.useState("none");

  const [formdata, setformdata] = React.useState({
    Id: "",
    Department: "",
    Year: "",
    Semister: "",
    Section: "",
    Coursename: "",
  });

  const { Id, Department, Year, Semister, Section, Coursename } = formdata;

  const handleaddstudent = () => {
    if (displayadd === "none") {
      setdisplaylist("none");
      setdisplayadd("block");
    } else {
      setdisplayadd("none");
    }
  };

  const handledisplaylist = () => {
    if (displaylist === "none") {
      dispatch(getregrading());
      setdisplayadd("none");
      setdisplaylist("block");
    } else {
      setdisplaylist("none");
    }
  };

  const handlesubmit = () => {
    console.log(
      "the values of acceptied variables are",
      Id,
      Department,
      Year,
      Semister,
      Section,
      Coursename
    );
    dispatch(
      createregrading(Id, Department, Year, Semister, Section, Coursename)
    );
  };

  const changer = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };
  return (
    <Fragment>
      <Regheader />

      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <div style={{ margin: 50 }}>
            <button
              className="btn btn-primary btn-rounded"
              onClick={handleaddstudent}
            >
              Add new student
            </button>
          </div>
          <div style={{ margin: 50 }}>
            <button
              className="btn btn-primary btn-rounded"
              onClick={handledisplaylist}
            >
              show student
            </button>
          </div>

          {/* <div style={{ margin: 50 }}>
            <button
              className="btn btn-primary btn-rounded"
              onClick={handleaddstudent}
            >
              Approve Grade
            </button>
          </div> */}
        </Grid>

        <Grid item xs={12} lg={6} xl={6}>
          <div style={{ display: displayadd, marginTop: 50 }}>
            <Typography>
              {" "}
              <b>Add student information</b>
            </Typography>{" "}
            <br /> <br />
            <TextField
              placeholder="Student Id"
              name="Id"
              onChange={changer}
            />{" "}
            <br /> <br />
            <TextField
              placeholder="Department"
              name="Department"
              onChange={changer}
            />
            <br />
            <br />
            <TextField
              placeholder="Year"
              type="number"
              name="Year"
              onChange={changer}
            />{" "}
            <br /> <br />
            <label>Semister: </label>
            <select name="Semister" onChange={changer}>
              <option></option>
              <option>1</option>
              <option>2</option>
            </select>
            <br />
            <br />
            <TextField
              placeholder="Section"
              type="number"
              name="Section"
              onChange={changer}
            />{" "}
            <br />
            <br />
            <TextField
              placeholder="Course name"
              name="Coursename"
              onChange={changer}
            />
            <br />
            <br />
            <button
              className="btn btn-success btn-rounded"
              onClick={handlesubmit}
            >
              Submit
            </button>
          </div>

          <div style={{ display: displaylist, marginTop: 50 }}>
            <div className="card" style={{ marginTop: 50, marginBottom: 100 }}>
              <h3
                className="card-header text-center font-weight-bold text-uppercase py-4"
                style={{ marginBottom: 50 }}
              >
                Regrading List
              </h3>
              {regradinglist.length !== 0
                ? regradinglist.map((item, itemidx) => {
                    //  let status =String.valueOf(item.Instructorapproved)
                    return (
                      <Fragment key={itemidx}>
                        <div>
                          Department: <b>{item.Department}</b>{" "}
                        </div>
                        <div>
                          Student Id :<b>{item.Realid}</b>{" "}
                        </div>
                        <div>
                          Academic Year: <b>{item.Year}</b>{" "}
                        </div>
                        <div>
                          Academic Semister: <b>{item.Semister}</b>{" "}
                        </div>
                        <div>
                          Section: <b>{item.Section}</b>{" "}
                        </div>
                        <div>
                          Course Name: <b>{item.Coursename}</b>{" "}
                        </div>
                        <div>
                          Instructor Approved:{" "}
                          <b>{"" + item.Instructorapproved}</b>{" "}
                        </div>
                        <br />
                        <br />
                        <br />
                      </Fragment>
                    );
                  })
                : null}
            </div>
          </div>
        </Grid>
      </Grid>

      {/* <button className="btn btn-primary btn-rounded">Approve</button> */}
    </Fragment>
  );
};

export default Registrarregrading;
