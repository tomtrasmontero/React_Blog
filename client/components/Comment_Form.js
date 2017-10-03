import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createComment } from '../actions/index';

class PostComment extends Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);

    $(document).ready(() => {
      // $('#textarea').val('New Text');
      $('#textarea').trigger('autoresize');
    });
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
    if (field.inputType === 'textarea') {
      return (
        <div>
          <textarea
            id="textarea"
            className="materialize-textarea validate"
            type={field.type}
            {...field.input}
          />
          <label htmlFor={field.label}>{field.label}</label>
          <span className="red-text">
            {touched ? error : ''}
          </span>
        </div>
      );
    }

    return (
      <div className="input-field-type">
        <input
          className="validate"
          type={field.type}
          {...field.input}
        />
        <label htmlFor={field.label}>{field.label}</label>
        <span className="red-text">
          {touched ? error : ''}
        </span>
      </div>
    );
  }

  render() {
    const { handleSubmit, submitting, pristine } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div className="row">
          <div className="col s1 m3" />
          <div className="col s10 m6 z-depth-2">
            <div className="input-field">
              <Field
                name="userName"
                label="User Name"
                component={this.renderField}
                type="text"
                inputType="input"
              />
            </div>
            <div className="input-field">
              <Field
                name="comment"
                label="Comment"
                component={this.renderField}
                type="textarea"
                inputType="textarea"
              />
            </div>
            <button
              className="btn waves-effect waves-light comment-submit"
              type="submit"
              disabled={pristine || submitting}
            > Submit
              <i className="material-icons right">send</i>
            </button>
          </div>
          <div className="col s1 m3" />
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
