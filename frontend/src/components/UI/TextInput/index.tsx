import { Field, FieldInputProps, useField } from "formik";
import { TextField } from "@material-ui/core";

import React from "react";
import { TextFieldProps } from "@mui/material";

interface IInputProps {
  textFieldProps: TextFieldProps;
}

const TextInput: React.FC<IInputProps> = (props, { textFieldProps }) => {
  return <TextField {...props} {...textFieldProps} />;
};

export default TextInput;
