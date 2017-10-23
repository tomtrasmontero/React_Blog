import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchBlog } from '../actions/index';
import PostComment from './Comment_Form';
import NavBar from './NavBar';
import RenderComment from './RenderComment';

class BlogPost extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchBlog(id);
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
            <h3><strong>Title: {blog.title}</strong></h3>
          </header>
          <div className="divider" />
          <p className="blogBody">{blog.body}</p>

          <div className="divider" />
          <h6><strong>Comment Section:</strong></h6>
          <div>
            <PostComment blogId={blog.id} />
            <br />
            {!blog.comments ? '' : <RenderComment comment={blog.comments} />}
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
