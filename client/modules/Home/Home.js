import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

// import styles from './Home.css';

const Home = () => <div><h2>Hello world!</h2></div>;

// const mapStateToProps = (state) => {
//   return {};
// };

// const mapDispatchToProps = (dispatch) => {
//   return {};
// };

Home.propTypes = {
};

export default connect(
  // mapStateToProps,
  // mapDispatchToProps
)(Home);
