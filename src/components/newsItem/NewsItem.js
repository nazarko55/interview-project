import React from "react";
import PropTypes from "prop-types";
import './newsItem.css';

const NewsItem = ({ data }) => {
  return (
    <div className="news-item">
      <a
        href={`https://mysterious-reef-29460.herokuapp.com/api/v1/news/${data.id
          }`}
        className="news-title"
      >
        {data.title}
      </a>
      <p className="news-text">{data.text}</p>
    </div>
  );
};

NewsItem.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default NewsItem;