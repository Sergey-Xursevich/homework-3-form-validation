import React, { Component } from "react";

export default class Field extends Component {
  render() {
    const { type, name, label, value, onChange, messageError } = this.props;
    
    return (
      <p className="field">
          <label className="field__label" htmlFor={name}>
            <span className="field-label">{label}</span>
          </label>
          <input className={`field__input field-input t-input-${name}`} type={type} name={name} value={value} onChange={(event) => onChange(event.target.value, name)} />
          <span className={`field__error field-error t-error-${name}`}>{messageError}</span>
      </p>
    )
  }
}