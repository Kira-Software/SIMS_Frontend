/** @format */

import { POST_APPLICATION, GET_APPLICATION } from "./type";
import axios from "axios";
import setalert from "./alert";

export const send_application = (formdata) => async (dispatch) => {
  console.log("inside of the send application action call");
  // console.log(formdata)
  // console.log("the 12 value is " + formdata.File12.name)

  // const { Firstname, File12, File10, File8, File9_10, File11_12 } = formdata

  // const myfile = { Firstname, File12, File10, File8, File9_10, File11_12 }
  // console.log("the value of myfile is " + myfile)

  //console.log("fname is" + Firstname + "  middle" + Middlename + " last" + Lastname);
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

  const fd = new FormData();

  if (
    File12 === "" ||
    File10 === "" ||
    File8 === "" ||
    File9_10 === "" ||
    File11_12 === "" ||
    Financial === "" ||
    Photograph === ""
  ) {
    dispatch(
      setalert("Please add all the necessary files before submitting", "danger")
    );
  } else {
    fd.append("fileimages", File12, File12.name);
    fd.append("fileimages", File10, File10.name);
    fd.append("fileimages", File8, File8.name);
    fd.append("fileimages", File9_10, File9_10.name);
    fd.append("fileimages", File11_12, File11_12.name);
    fd.append("fileimages", Financial, Financial.name);
    fd.append("fileimages", Photograph, Photograph.name);

    fd.set("Firstname", Firstname);
    fd.set("Middlename", Middlename);
    fd.set("Lastname", Lastname);
    fd.set("Birthdate", Birthdate);
    fd.set("Sex", Sex);
    fd.set("Telephone", Telephone);
    fd.set("Email", Email);
    fd.set("Birthregion", Birthregion);
    fd.set("Birthzone", Birthzone);
    fd.set("Birthworeda", Birthworeda);
    fd.set("Currentregion", Currentregion);
    fd.set("Currentzone", Currentzone);
    fd.set("Currentworeda", Currentworeda);
    fd.set("Currenthouseno", Currenthouseno);

    fd.set("Contactfname", Contactfname);
    fd.set("Contactmname", Contactmname);
    fd.set("Contactlname", Contactlname);
    fd.set("Contactregion", Contactregion);
    fd.set("Contactzone", Contactzone);

    fd.set("Contactworeda", Contactworeda);
    fd.set("Contacthouseno", Contacthouseno);
    fd.set("Contactemail", Contactemail);
    fd.set("Contacttelephone", Contacttelephone);
    fd.set("Lasteducation", Lasteducation);
    fd.set("Field", Field);
  }

  //  // console.log("the form dayta of mine is " + fd);
  //   fd.set("brandname", brandname);

  // //   const newobject = {
  // //     brandname
  // //   };

  const config = {
    headers: {
      "Content-type": "multipart/form-data",
    },
  };
  // const config = {
  //     headers: {
  //         "Content-type": "application/json"
  //     }
  // };

  //   //const body = JSON.stringify(newobject);
  //  // console.log("the value of final body is " + body);

  try {
    console.log("inside of the action try block");

    const res = await axios.post("/api/sendapplication", fd, config);

    // console.log("the res.data value is that " + res.data.brandname);

    console.log("the value of res is " + res.data);

    dispatch({
      type: POST_APPLICATION,
      payload: res.data,
    });
    dispatch(
      setalert(
        "Application has sent successfully! We will contact you soon by email",
        "done"
      )
    );

    console.log("the value of res is " + res);
  } catch (err) {
    console.log("i am in application catch");
    //console.log("the main error is that ", err.response.data.errors);

    const errors = err.response.data.errors;
    //console.log("the error is", errors);

    console.error("the present problem is" + err.message);
    // console.log("the length of the error array is", errors.length);

    if (errors) {
      errors.forEach((err) => {
        dispatch(setalert(err.msg, "danger"));
      });
    }

    // dispatch({
    //   type: LOGIN_FAIL
    // });
  }
};
