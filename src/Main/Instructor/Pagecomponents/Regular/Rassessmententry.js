// import React, { useEffect } from "react";

// import { connect } from "react-redux";
// import { Link, Button } from "@material-ui/core";

// import {
//   getinstructorstudentgrade,
//   getstudentscourseregistered,
//   updatetempjob,
//   getinstructorjob,
// } from "../../../Redux/Action/instructorjob";

// import {
//   getassessment,
//   getmark,
// } from "../../../Redux/Action/instructorassessment";

// import { loaduserinstructor } from "../../../Redux/Action/authinstructor";

// const Rassessmententry = ({
//   instructorjob,
//   getinstructorstudentgrade,
//   getstudentscourseregistered,
//   updatetempjob,
//   getassessment,
//   user,
//   getinstructorjob,
//   loaduserinstructor,
//   getmark,
// }) => {
//   const handleinstructorstudents = (
//     // Department,
//     // Year,
//     // Semister,
//     // Section,
//     // Coursename
//   ) => {
//     console.log("inside of the local method");
//    // console.log("the passed arguments are ",Coursename,Year,Semister,Section)
//     // getinstructorstudentgrade(Department, Year, Semister, Section);
//     // getstudentscourseregistered(Department, Year, Semister, Section);
//     // updatetempjob(Coursename);
//     // getassessment(Coursename, Year, Semister, Section);
//     //getmark(Coursename, Year, Semister, Section);
//   };

//   useEffect(() => {
//     loaduserinstructor();
//     // getinstructorjob();
//   }, []);

//   return (
//     <>
//       <p>inside of the mark entry</p>
//       {instructorjob.length !== null
//         ? instructorjob.map((item, idx) => {
//             return (
//               <div style={{ marginLeft: 200 }} key={idx}>
//                 <div> Year : {item.Year}</div>
//                 <div> Semister : {item.Semister}</div>
//                 <div> Coursename : {item.Coursename}</div>
//                 {/* <Link to="/instructorgrade" style={{ textDecoration: "none" }}> */}
//                   <Button
//                     color="secondary"
//                     variant="outlined"
//                     onClick={() =>
//                       handleinstructorstudents(
//                         // user.Department,
//                         // item.Year,
//                         // item.Semister,
//                         // item.Section,
//                         // item.Coursename
//                       )
//                     }
//                   >
//                     {" "}
//                     Sectionn : {item.Section}
//                   </Button>
//                 {/* </Link> */}
//                 <br></br> <hr></hr> <br></br>
//               </div>
//             );
//           })
//         : null}
//     </>
//   );
// };
// const mapStateToProps = (state) => ({
//   user: state.authreducer.user,

//   instructorjob: state.instructor.instructorjob,
// });
// export default connect(mapStateToProps, {
//   loaduserinstructor,
//   getinstructorstudentgrade,
//   getstudentscourseregistered,
//   updatetempjob,
//   getassessment,
//   getinstructorjob,
//   getmark,
// })(Rassessmententry);
