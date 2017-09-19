import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchBlogs } from '../actions/index';

class LandingPage extends Component {
  componentDidMount() {
    console.log('called did mount', this.props.fetchBlogs);
    this.props.fetchBlogs();
  }

  renderBlog() {
    console.log(this.props.blogs, 'in render blog');
    return this.props.blogs.map(blog => (
      <div key={blog.id}>{blog.title}</div>
    ));
  }

  render() {
    return (
      <div>
        {this.renderBlog()}
        <h1>Landing Page Here</h1>
        <ul>
          <li>List of blog post here</li>
        </ul>
      </div>
    );
  }
}

// PropTypes here
LandingPage.propTypes = {
  fetchBlogs: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ blogs: state.blogs });


export default connect(mapStateToProps, { fetchBlogs })(LandingPage);
