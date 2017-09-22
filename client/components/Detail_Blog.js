import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBlog } from '../actions/index';

class BlogPost extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchBlog(id);
  }

  renderComment() {
    const commentList = this.props.blogs[0].comments;

    if (!commentList) {
      return (
        <div>Be the first to Comment!</div>
      );
    }

    const showComments = commentList.map(comment => (
      <div key={comment.id}>
        <h3>{comment.comment}</h3>
        <p>By {comment.userName}</p>
      </div>
    ));

    return showComments;
  }

  render() {
    const blog = this.props.blogs[0];
    if (!blog) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to={'/'}>Back to Home</Link>
        <h3>Title: {blog.title}</h3>
        <p>{blog.body}</p>

        <div>
          {this.renderComment()}
        </div>
      </div>
    );
  }
}

// PropTypes Here
BlogPost.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
  fetchBlog: PropTypes.func.isRequired,
  blogs: PropTypes.arrayOf(PropTypes.shape({
    comments: PropTypes.array,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = state => ({ blogs: state.blogs });

export default connect(mapStateToProps, { fetchBlog })(BlogPost);
