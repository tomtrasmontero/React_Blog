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
    this.props.reset();
    this.props.createComment(commentDataToSubmit);
  }

  renderField(field) {
    const { meta: { error, touched } } = field;

    return (
      <div>
        <label htmlFor={field.label}>{field.label}</label>
        <div>
          {touched ? error : ''}
        </div>
        <input
          type={field.type}
          {...field.input}
        />
      </div>
    );
  }

  render() {
    const { handleSubmit, submitting, pristine } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)} >
        <div>
          <Field
            name="userName"
            label="User Name"
            component={this.renderField}
            type="text"
          />
          <Field
            name="comment"
            label="Comment"
            component={this.renderField}
            type="text"
          />
          <button
            type="submit"
            disabled={pristine || submitting}
          >Submit
          </button>
        </div>
      </form>
    );
  }
}

const validate = (values) => {
  const errors = {};

  if (!values.userName) {
    errors.userName = 'User Name is Required';
  }

  if (!values.comment) {
    errors.comment = 'Please Enter Comment';
  }

  return errors;
};

PostComment.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  blogId: PropTypes.number.isRequired,
  createComment: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  pristine: PropTypes.bool.isRequired,
};

export default reduxForm({
  validate,
  // name the form component
  form: 'PostCommentForm',
})(
  connect(null, { createComment })(PostComment),
);
