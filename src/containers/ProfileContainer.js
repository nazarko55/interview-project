import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getProfile } from "../actions/profileActions";

import Profile from "../components/profile/Profile";

class ProfileContainer extends Component {
  componentDidMount() {
    const { user, getProfile } = this.props;
    if (user) {
      getProfile(user.id);
    }
  }

  render() {
    const { isLoggedIn, profile, isFetching } = this.props;

    if (!isLoggedIn) {
      return <Redirect to="/login" />;
    }

    return <Profile data={profile} isFetching={isFetching} />;
  }
}

ProfileContainer.propTypes = {
  user: PropTypes.shape(),
  isLoggedIn: PropTypes.bool,
};

const mapStateToProps = state => ({
  user: state.authReducer.user,
  isLoggedIn: state.authReducer.isLoggedIn,
  profile: state.profileReducer.profile,
  isFetching: state.profileReducer.isFetching,
});

export default connect(mapStateToProps, { getProfile })(ProfileContainer);