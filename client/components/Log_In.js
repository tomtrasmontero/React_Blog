import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import renderField from './RenderField';

class LogIn extends Component {
  render() {
    const { handleSubmit, submitting, pristine } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div className="row">
          <div>
            <div>
              <Link to={'/'} >
                Home
              </Link>
            </div>

            <div>
              <div className="input-field">
                <Field
                  name="userName"
                  label="User Name"
                  component={renderField}
                  type="text"
                  inputType="input"
                />
              </div>

              <div className="input-field">
                <Field
                  name="password"
                  label="Password"
                  component={renderField}
                  type="text"
                  inputType="input"
                />
              </div>
            </div>

          </div>

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

  if (!values.password) {
    errors.password = 'Please Enter Comment';
  }

  return errors;
};

LogIn.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  pristine: PropTypes.bool.isRequired,
};

export default reduxForm({
  validate,
  form: 'LogInForm',
})(
  connect(null, { renderField })(LogIn),
);
