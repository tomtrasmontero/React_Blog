import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createComment } from '../actions/index';

class PostComment extends Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values) {
    const commentDataToSubmit = {
      userName: values.userName,
      comment: values.comment,
      blogId: this.props.blogId,
    };
    this.props.createComment(commentDataToSubmit);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)} >
        <div>
          <label htmlFor="userName">User Name</label>
          <Field name="userName" component="input" type="text" />
          <label htmlFor="comment">Comment</label>
          <Field name="comment" component="input" type="text" />
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

PostComment.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  // name the form component
  form: 'PostCommentForm',
})(
  connect(null, { createComment })(PostComment),
);
