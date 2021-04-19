const handledoneclassification = () => {
    // console.log(
    //   "the values respectively are",
    //   Quiz,
    //   Assignment,
    //   Project,
    //   Attendance,
    //   Final
    // );

    let tempquiz = Quiz.split(",");
    let tempAssignment = Assignment.split(",");
    let tempproject = Project.split(",");
    let tempattendance = Attendance.split(",");
    console.log(
      "the new splitted valueis ",
      tempquiz,
      tempAssignment,
      tempproject,
      tempattendance,
      Final
    );

    var quizsum = tempquiz.reduce(function (a, b) {
      a *= 1;
      b *= 1;
      return a + b;
    }, 0);

    var assignmentsum = tempAssignment.reduce(function (a, b) {
      a *= 1;
      b *= 1;
      return a + b;
    }, 0);

    var projectsum = tempproject.reduce(function (a, b) {
      a *= 1;
      b *= 1;
      return a + b;
    }, 0);

    var attendancesum = tempattendance.reduce(function (a, b) {
      a *= 1;
      b *= 1;
      return a + b;
    }, 0);

    allsum = quizsum + assignmentsum + projectsum + attendancesum + Final;

    if (allsum === 100) {
      addassessment(
        tempquiz,
        tempAssignment,
        tempproject,
        tempattendance,
        Final
      );
    } else {
      console.log(
        "the sum of all fields is",
        allsum,
        "the total mark should be 100"
      );
    }

    // addassessment(tempquiz, tempAssignment, tempproject, tempattendance, Final);
  };
