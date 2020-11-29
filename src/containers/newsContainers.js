import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { getAllNews } from "../actions/newsActions";

import NewsList from "../components/newsList/NewsList";

class NewsContainer extends Component {
  componentDidMount() {
    this.props.getAllNews();
  }

  render() {
    const { news, isFetching } = this.props;
    return <NewsList data={news} isFetching={isFetching} />;
  }
}

NewsList.propTypes = {
  news: PropTypes.arrayOf().isRequired,
  isFetching: PropTypes.bool.isRequired,
  getAllNews: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  news: state.newsReducer.news,
  isFetching: state.newsReducer.isFetching,
});

export default connect(mapStateToProps, { getAllNews })(NewsContainer);