import React, { useEffect } from "react";
import { Fragment } from "react";

import { connect } from "react-redux";
import Regheader from "../Header/regheader";

import { getcalendar } from "../Redux/Action/calendar";
import Alert from "../layout/alert";

const Showcalendar = ({ getcalendar, calendar }) => {
  useEffect(() => {
    //  getcalendar();
  }, []);

  const [headerdata, setheaderdata] = React.useState({
    AC: "",
    Program: "",
    Year: "",
    Semister: "",
  });

  const { AC, Program, Year, Semister } = headerdata;

  const handleheaderchange = (e) => {
    // console.log(
    //   "the e.target.value is ",
    //   e.target.value,
    //   "name is ",
    //   e.target.name
    // );

    setheaderdata({ ...headerdata, [e.target.name]: e.target.value });

    console.log("the value of headerdata after change is ", headerdata);
  };

  const handlesearch = () => {
    getcalendar(AC, Program, Year, Semister);
  };

  return (
    <Fragment>
      <Regheader />
      <div style={{ marginTop: 50, marginLeft: 50 }}>
        <span>
          <label>Academic classification</label>

          <select name="AC" onChange={handleheaderchange}>
            <option></option>

            <option value="Regular">Regular</option>
            <option value="Extension">Extension</option>
          </select>
        </span>

        <span style={{ marginLeft: 50 }}>
          <label>Program</label>

          <select name="Program" onChange={handleheaderchange}>
            <option></option>
            <option value="Undergraduate">Undergraduate</option>
            <option value="Graduate">Graduate</option>
            <option value="Postgraduate">Postgraduate</option>
          </select>
        </span>

        <span style={{ marginLeft: 50 }}>
          <label>Academic Year</label>

          <input
            type="number"
            name="Year"
            value={Year}
            onChange={handleheaderchange}
          />
        </span>

        <span style={{ marginLeft: 50 }}>
          <label>Semister</label>

          <select name="Semister" onChange={handleheaderchange}>
            <option></option>

            <option value="I">I</option>
            <option value="II">II</option>
          </select>
        </span>

        <span style={{ marginLeft: 50 }}>
          <button className="btn btn-warning " onClick={handlesearch}>
            Search
          </button>
        </span>
      </div>
      
      <Alert />

      {calendar.length !== 0
        ? calendar.map((item, idx) => {
            return (
              <div
                className="card"
                style={{
                  marginTop: 50,
                  marginBottom: 100,
                  width: "90%",
                  marginLeft: "5%",
                }}
                key={idx}
              >
                <h3 className="card-header text-center font-weight-bold  py-4">
                  Addis Ababa Science and Technology University
                </h3>
                <h4 className=" text-center font-weight-bold  py-4">
                  Office of the Registrar
                </h4>
                <h5 className=" text-center font-weight-bold  py-4">
                  Academic Calendar {item.Year}
                </h5>
                <h5 className=" text-center font-weight-bold  py-4">
                  {item.Program} {item.AC}
                </h5>{" "}
                <br />
                <br />
                <h4 className=" text-center font-weight-bold  py-4">
                  {item.Semister} Semister
                </h4>
                <table className="table table-bordered table-responsive-md table-striped text-center">
                  <thead>
                    <tr>
                      <th>Date (G.C.)</th>
                      <th>Activities / Events</th>
                    </tr>
                  </thead>

                  <tbody>
                    {item.Calendar.map((row, rowidx) => {
                      return (
                        <tr key={rowidx}>
                          <td>
                            {row[0]} - {row[1]}
                          </td>
                          <td>{row[2]}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            );
          })
        : null}

      {/* {calendar.map((item, itemidx) => {
        return (
          <div
            key={itemidx}
            style={{
              marginLeft: "15%",
              marginTop: 50,
              border: "2px green solid",
              width: "75%"
            }}
          >
            <div>Academic classification :<b> {item.AC}</b> </div>
            <div>Program :<b>{item.Program}</b>  </div>
            <div> Year :<b>{item.Year}</b>  </div>
            <div>Semister : <b>{item.Semister}</b>  </div>
            <button className="btn btn-warning ">See More</button>
          </div>
        );
      })} */}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  calendar: state.registrar.calendar,
});

export default connect(mapStateToProps, { getcalendar })(Showcalendar);
