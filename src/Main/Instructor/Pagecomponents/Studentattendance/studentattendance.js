// import React, { useEffect } from "react";
// import { Typography, Button } from "@material-ui/core";
// import { Link, Redirect } from "react-router-dom";

// import { connect } from "react-redux";

// import { getinstructorjob } from "../../../Redux/Action/instructorjob";
// import { loaduserinstructor } from "../../../Redux/Action/authinstructor";

// const Studentattendance = ({
//   instructorjob,
//   user,
//   getinstructorjob,
//   loaduserinstructor,
// }) => {
//   useEffect(() => {
//     loaduserinstructor();
//     //getinstructorjob(user._id);
//   }, []);

//   const handleinstructorstudents = (
//     Department,
//     Year,
//     Semister,
//     Section,
//     Coursename
//   ) => {
//     console.log("hiiiii");
//   };

//   return (
//     <>
//       <Typography variant="h6" color="primary" style={{ margin: 50 }}>
//         Choose a section
//       </Typography>
//       {instructorjob.length !== null
//         ? instructorjob.map((item, idx) => {
//             return (
//               <div style={{ marginLeft: 200 }} key={idx}>
//                 <div> Year : {item.Year}</div>
//                 <div> Semister : {item.Semister}</div>
//                 <div> Coursename : {item.Coursename}</div>
//                 <Link to="/attendancetable" style={{ textDecoration: "none" }}>
//                   <Button
//                     color="secondary"
//                     variant="outlined"
//                     onClick={() =>
//                       handleinstructorstudents(
//                         user.Department,
//                         item.Year,
//                         item.Semister,
//                         item.Section,
//                         item.Coursename
//                       )
//                     }
//                   >
//                     {" "}
//                     Section : {item.Section}
//                   </Button>
//                 </Link>
//                 <br></br> <hr></hr> <br></br>
//               </div>
//             );
//           })
//         : null}
//     </>
//   );
// };

// const mapStateToProps = (state) => ({
//   instructorjob: state.instructor.instructorjob,
//   user: state.authreducer.user,
// });

// export default connect(mapStateToProps, {
//   getinstructorjob,
//   loaduserinstructor,
// })(Studentattendance);
