import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { fetchBlogs } from '../actions/index';
import NavBar from './NavBar';
import renderDate from '../utils';

// import assets here
// import logo from '../assets/Landing_Img.jpg';

class LandingPage extends Component {
  componentDidMount() {
    this.props.fetchBlogs();
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  renderBlog() {
    return this.props.blogs.map(blog => (
      <div key={blog.id}>
        <div>
          <Link to={`/blog/${blog.id}`} onClick={this.scrollToTop}>
            <h2 className="main-title hoverable">{blog.title}</h2>
          </Link>

          <span><i className="material-icons">date_range</i> {renderDate(blog.createdAt)}</span>
          <blockquote className="flow-text summarize-text">{blog.body}</blockquote>
        </div>

        <div>
          <Link to={`/blog/${blog.id}`} onClick={this.scrollToTop}>
            <p>Leave a Comment({blog.comments.length})</p>
          </Link>
        </div>

        <div className="divider" />
      </div>
    ));
  }

  render() {
    return (
      <div>
        <div id="LandingPage" className="col s12">
          <div className="coverImageContainer responsive-img">
            <div className="center-text-content">
              <p>Tom Learns Programming</p>
            </div>
          </div>

          <NavBar />
          <div className="divider" />

          <div className="section white">
            <div>
              <div className="container">
                {this.renderBlog()}
              </div>
            </div>
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
