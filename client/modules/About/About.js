import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

// import styles from './Home.css';

const About = () => <div><h2>About page</h2></div>;

// const mapStateToProps = (state) => {
//   return {};
// };

// const mapDispatchToProps = (dispatch) => {
//   return {};
// };

About.propTypes = {
};

export default connect(
  // mapStateToProps,
  // mapDispatchToProps
)(About);
