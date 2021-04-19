import { POST_APPLICATION, GET_APPLICATION } from "./type";
import axios from "axios";

export const giveapplication = () => async (dispatch) => {
  //  console.log("inside the getmysurvey action");
  //dispatch(loaduser());
  try {
    const res = await axios.get(`/api/giveapplication`);
    console.log("the result of giveapplication in action is", res.data);

    dispatch({
      type: GET_APPLICATION,
      payload: res.data,
    });

    // dispatch({
    //   type: CLEAR_MYSURVEY
    // });
    //console.log("the value of res.data after dispatch is ", re);
  } catch (err) {
    console.log("there is some error while ferching survey for you");
    console.error(err.message);
  }
};

export const giveapprovedapplication = () => async (dispatch) => {
  //  console.log("inside the getmysurvey action");
  //dispatch(loaduser());
  try {
    const res = await axios.get(`/api/approvedapplication`);
    console.log("the result of giveapplication in action is", res.data);

    dispatch({
      type: GET_APPLICATION,
      payload: res.data,
    });

    // dispatch({
    //   type: CLEAR_MYSURVEY
    // });
    //console.log("the value of res.data after dispatch is ", re);
  } catch (err) {
    console.log("there is some error while ferching survey for you");
    console.error(err.message);
  }
};

export const updateapprove = (id) => async (dispatch) => {
  //  console.log("inside the getmysurvey action");
  //dispatch(loaduser());

  console.log("the coming id is " + id);

  try {
    ///////////making the application approved
    const res = await axios.patch(`/api/approveapplication/${id}`);
    // console.log("the result of giveapplication in action is", res.data);

    dispatch(giveapplication());

    ///////////getting the No of application for id

    const getno = await axios.get("/api/appno");
    //  console.log("the value of the getno during approving is " + getno.data[0].Appno)
    const x = getno.data[0].Appno;

    const Studid = id;
    const Id = `ABC${x}/13`;
    const Temppass = Math.floor(Math.random() * 100000);

    const body = { Studid, Id, Temppass };

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const newbody = JSON.stringify(body);

    ////////////posting the temporary login information

    const tempres = await axios.post("/api/templogin", newbody, config);

    ////////////increasing the application number  by one

    const updateno = await axios.patch(`/api/appno`);
  } catch (err) {
    console.log("there is some error while ferching survey for you");
    console.error(err.message);
  }
};
