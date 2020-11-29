import React from "react";
import PropTypes from "prop-types";

import NewsItem from "../newsItem/NewsItem";
import withLoading from "../../hoc/withLoading";

import './newlist.css';

const NewsList = ({ data }) => {
  return (
    <div className="">
      {data.map(item => <NewsItem key={item.id} data={item} />)}
      <p className="all-news"> Всего новостей: {data.length}</p>
    </div>
  );
};

NewsList.propTypes = {
  data: PropTypes.arrayOf().isRequired,
};

export default withLoading(NewsList);