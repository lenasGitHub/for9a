import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const SelectFieldGroup = ({
  name,
  placeholder,
  value,
  label,
  error,
  info,
  type,
  onChange,
  disabled,
  customClassName
}) => {
  return (
    <div class="field">
      <div class="label-field">{label}</div>
      <div class="field_wrap select_field">
        <select name={name}>
          <option value="">Any</option>
          <option value="1">option 1</option>
          <option value="2">option 2</option>
          <option value="3">option 3</option>
          <option value="4">option 4</option>
        </select>
      </div>
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

SelectFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string
};

SelectFieldGroup.defaultProps = {
  type: "text"
};

export default SelectFieldGroup;
