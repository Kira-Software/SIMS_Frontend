(
    <div>
      <h2 style={{ marginTop: 50, color:"green" }}>
        You have requested to withdraw. Please Readmit to continue!
      </h2>
      <h3>However, you can see your course status as well as your grades</h3>
    </div>
  )


  return (
    <Fragment>
      <div>
        <h2 style={{ marginTop: 50 }}>
          Congratulations for your acceptance in{" "}
          {user !== null ? user.Field : null} Department !
        </h2>
        <h3>Please register first to continue</h3>
      </div>

      <Link
        to="/Courseregistration"
        style={{ textDecoration: "none" }}
      >
        <Button
          style={{ marginTop: 50, marginLeft: 50 }}
          variant="outlined"
          color="primary"
        >
          Course Registration
        </Button>
      </Link>
      <Link to="/addcourse" style={{ textDecoration: "none" }}>
        <Button
          style={{ marginTop: 50, marginLeft: 50 }}
          variant="outlined"
          color="primary"
          onClick={handleaddbutton}
        >
          {" "}
          Add course
        </Button>
      </Link>

      <Link to="/dropcourse" style={{ textDecoration: "none" }}>
        <Button
          style={{ marginTop: 50, marginLeft: 50 }}
          variant="outlined"
          color="primary"
        >
          {" "}
          Drop Course
        </Button>
      </Link>
      <Link to="#" style={{ textDecoration: "none" }}>
        <Button
          style={{ marginTop: 50, marginLeft: 50 }}
          variant="outlined"
          color="primary"
          onClick={() => {
            let x = window.confirm(
              "Are you sure you want to withdraw?"
            );
            if (x) {
              studentwithdrawal();
            }
          }}
        >
          {" "}
          Withdrawal
        </Button>
      </Link>
    </Fragment>
  );