import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RenderField extends Component {
  constructor(props) {
    super(props);

    // activate textarea
    $(document).ready(() => {
      // $('#textarea').val('Comment Here ...');
      $('#textarea').trigger('autoresize');
    });
  }

  render() {
    const { label, type, input, inputType, meta: { error, touched } } = this.props;
    if (inputType === 'textarea') {
      return (
        <div>
          <textarea
            id="textarea"
            className="materialize-textarea validate"
            type={type}
            {...input}
          />
          <label htmlFor={label}>
            {label}
            <span className="red-text warning">
              {touched ? error : ''}
            </span>
          </label>
        </div>
      );
    }

    return (
      <div className="input-field-type">
        <input
          className="validate"
          type={type}
          {...input}
        />
        <label htmlFor={label}>
          {label}
          <span className="red-text text-lighten-1 warning">
            {touched ? error : ''}
          </span>
        </label>
      </div>
    );
  }
}

RenderField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  input: PropTypes.shape({}).isRequired,
  inputType: PropTypes.string.isRequired,
  meta: PropTypes.shape({}).isRequired,
};

export default RenderField;
