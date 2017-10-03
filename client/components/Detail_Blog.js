import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchBlog } from '../actions/index';
import PostComment from './Comment_Form';
import NavBar from './NavBar';

class BlogPost extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchBlog(id);
  }

  renderComment() {
    const commentList = this.props.blogs[0].comments;
    if (commentList.length === 0) {
      return (
        <div>Be the first to Comment!</div>
      );
    }

    const showComments = commentList.map(comment => (
      <div key={comment.id} className="comment-post z-depth-2">
        <p className="flow-text">{comment.comment}</p>
        <h6>By {comment.userName}</h6>
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
        <NavBar />
        <article className="container">
          <header>
            <h3>Title: {blog.title}</h3>
          </header>
          <br />
          <div className="divider" />
          <p>{blog.body}</p>

          <div className="divider" />
          <h6>Comment Section:</h6>
          <div>
            <PostComment blogId={blog.id} />
            <br />
            {!blog.comments ? '' : this.renderComment()}
          </div>
        </article>
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
