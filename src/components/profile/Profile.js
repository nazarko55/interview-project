import React from "react";
import PropTypes from "prop-types";

import withLoading from "../../hoc/withLoading";
import NewsItem from '../newsItem/NewsItem';

const Profile = ({ data }) => {
  return (
    data && (
      <div className="profile">
        <h3>Профиль</h3>

        {data.map(item => <NewsItem key={item.id} data={item} />)}

        <br />
      </div>
    )
  );
};

Profile.propTypes = {
  data: PropTypes.shape().isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default withLoading(Profile);