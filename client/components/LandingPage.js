import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { fetchBlogs } from '../actions/index';

// import assets here
import logo from '../assets/Landing_Img.jpg';

class LandingPage extends Component {
  componentDidMount() {
    this.props.fetchBlogs();
  }

  renderBlog() {
    return this.props.blogs.map(blog => (
      <div key={blog.id}>
        <div>
          <h2>{blog.title}</h2>
          <span>{blog.createdAt}</span>
          <p>{blog.body}</p>
        </div>

        <div>
          <Link to={`/blog/${blog.id}`}>
            <p>link to detail pages with comments(comment#)</p>
          </Link>
        </div>
      </div>
    ));
  }

  render() {
    return (
      <div className="row">
        <br />
        {/* <div className="parallax-container">
          <div className="parallax"> */}
            <img src={logo} alt="black and white cover" />
          {/* </div>
        </div> */}
        <div className="col s12">
          <h1>Landing Page Here</h1>
          <div>
            {this.renderBlog()}
          </div>
        </div>
      </div>
    );
  }
}

// PropTypes here
LandingPage.propTypes = {
  fetchBlogs: PropTypes.func.isRequired,
  blogs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = state => ({ blogs: state.blogs });


export default connect(mapStateToProps, { fetchBlogs })(LandingPage);
