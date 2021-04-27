import React, { Fragment } from "react";
import { connect } from "react-redux";
import Regheader from "../Header/regheader";
import { createcalendar } from "../Redux/Action/calendar";
import Alert from "../layout/alert";

const Academiccalendar = ({ createcalendar }) => {
  const [calendar, setcalendar] = React.useState([]);
  const [valueholder, setvalueholder] = React.useState([]);
  const [headerdata, setheaderdata] = React.useState({
    AC: "",
    Program: "",
    Year: "",
    Semister: "",
  });

  const { AC, Program, Year, Semister } = headerdata;

  const handleaddrow = () => {
    setcalendar([...calendar, []]);
    setvalueholder([...valueholder, []]);

    // console.log("the value of calendar array is ", calendar);
  };

  const handleremoverow = () => {
    let temp = [...calendar];
    temp.pop();
    setcalendar(temp);

    let temp2 = [...valueholder];
    temp2.pop();
    //temp2.splice(idx, 1);
    setvalueholder(temp2);

    // console.log("the value of calendar know is ", calendar);
    // console.log("the value of valueholder know is ", valueholder);
  };

  const handlechange = (e, type, idx) => {
    // console.log("the comming parameters are", e.target.value, type, idx);

    if (type === "SD") {
      // for(let i = 0; i<calendar.length; i++){
      let temp = valueholder;
      temp[idx][0] = e.target.value;
      setvalueholder(temp);

      // console.log("the value of valueholder know is ", valueholder);

      // }
    } else if (type === "ED") {
      //for(let i = 0; i<calendar.length; i++){
      let temp = valueholder;
      temp[idx][1] = e.target.value;
      setvalueholder(temp);

      // console.log("the value of valueholder know is ", valueholder);

      //}
    } else if (type === "Activity") {
      //  for(let i = 0; i<calendar.length; i++){
      let temp = valueholder;
      temp[idx][2] = e.target.value;
      setvalueholder(temp);

      // console.log("the value of valueholder know is ", valueholder);

      //  }
    }
  };

  const handleheaderchange = (e) => {
    // console.log(
    //   "the e.target.value is ",
    //   e.target.value,
    //   "name is ",
    //   e.target.name
    // );

    setheaderdata({ ...headerdata, [e.target.name]: e.target.value });

    //  console.log("the value of headerdata after change is ", headerdata);
  };

  const handledone = () => {
    // console.log(
    //   "the data to be passed is " + AC,
    //   Program,
    //   Year,
    //   Semister,
    //   valueholder
    // );

    createcalendar(AC, Program, Year, Semister, valueholder);
  };

  return (
    <Fragment>
      <Regheader />
      <div className="card" style={{ marginTop: 50, marginBottom: 100 }}>
        <h3 className="card-header text-center font-weight-bold text-uppercase py-4">
          Academic Calendar
        </h3>
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
        </div>

        <div style={{ width: "90%", marginLeft: "5%", marginTop: 50 }}>
          <table className="table table-bordered table-responsive-md table-striped text-center">
            <thead>
              <tr>
                <th>Date (G.C.)</th>
                <th>Activities / Events</th>
                {/* <th>Remark</th> */}
              </tr>
            </thead>

            <tbody>
              {calendar.map((item, itemidx) => {
                return (
                  <tr key={itemidx}>
                    <td>
                      {" "}
                      <label>Start Date</label>:
                      <input
                        type="date"
                        placeholder="Start date"
                        onChange={(e) => handlechange(e, "SD", itemidx)}
                      />{" "}
                      <br></br>
                      <label>End Date</label>
                      <input
                        type="date"
                        placeholder="End date"
                        onChange={(e) => handlechange(e, "ED", itemidx)}
                      />{" "}
                    </td>
                    <td>
                      {" "}
                      <textarea
                        placeholder="Activity"
                        rows="2"
                        style={{ width: 600 }}
                        onChange={(e) => handlechange(e, "Activity", itemidx)}
                      />{" "}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button
            className="btn btn-success btn-rounded"
            style={{ marginLeft: "85%" }}
            onClick={handleaddrow}
          >
            Add row
          </button>
          {calendar.length !== 0 ? (
            <button
              className="btn btn-danger btn-rounded"
              onClick={handleremoverow}
              style={{ marginLeft: "85%", marginTop: 20 }}
            >
              Remove
            </button>
          ) : null}

          <button
            className="btn btn-primary btn-rounded"
            style={{ marginLeft: "45%", marginTop: 50, width: 200 }}
            onClick={handledone}
          >
            Done
          </button>

          <Alert />
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { createcalendar })(Academiccalendar);
