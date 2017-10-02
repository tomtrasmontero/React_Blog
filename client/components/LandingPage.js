import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { fetchBlogs } from '../actions/index';
import NavBar from './NavBar';

// import assets here
// import logo from '../assets/Landing_Img.jpg';

class LandingPage extends Component {
  componentDidMount() {
    this.props.fetchBlogs();
  }

  renderDate(date) {
    const monthsList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const newDate = new Date(date);
    const month = monthsList[newDate.getMonth()];
    const day = newDate.getDay();
    const year = newDate.getFullYear();

    return `${month} ${day}, ${year}`;
  }

  renderBlog() {
    return this.props.blogs.map(blog => (
      <div key={blog.id}>
        <div>
          <h2 className="main-title">{blog.title}</h2>
          <span>{this.renderDate(blog.createdAt)}</span>
          <blockquote className="flow-text summarize-text">{blog.body}</blockquote>
        </div>

        <div>
          <Link to={`/blog/${blog.id}`}>
            <p>link to detail pages with comments(comment#)</p>
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
