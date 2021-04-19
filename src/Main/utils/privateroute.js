import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const privateroute = ({
  component: Component,
  authreducer: { isauthenticated, loading },
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      !isauthenticated && !loading ? (
        <Redirect to="/mainlogin" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

privateroute.propTypes = {
  authreducer: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  authreducer: state.authreducer
});
export default connect(mapStateToProps)(privateroute);
