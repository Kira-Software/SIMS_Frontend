import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import './alert.css'
const alert = ({ alert }) =>
  alert !== null &&
  alert.length > 0 &&
  alert.map(alert => (
    <div key={alert.id} className={alert.alerttype} style={{marginTop:30}}>
      {alert.msg}
    </div>
  ));

const mapStateToProps = state => ({
  alert: state.alert
});

alert.propTypes = {
  alert: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(alert);
