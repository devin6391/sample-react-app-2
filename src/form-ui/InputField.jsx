import React from 'react'
import TextField from 'material-ui/TextField';

export const renderField = ({
  input,
  label,
  type,
  fullWidth,
  maxLength,
  underlineStyle,
  errorStyle,
  toolTiptext,
  id,
  meta: {
    touched,
    error,
    warning
  },
  custom
}) => {
  if (input.name == "phone" && input.value && typeof input.value == "string" && input.value.split(" ")[0] != "+91") {
    input.value = `+91 ${input.value}`;
  }
  return (<TextField  data-tootip={toolTiptext} data-event="focus" data-tip data-for='globalTooltip' errorStyle= {errorStyle} underlineStyle={underlineStyle}  id={id} autoComplete="off" maxLength={maxLength} type={type} floatingLabelText={label} fullWidth={fullWidth} errorText={touched && error} {...input} {...custom}/>);
}
