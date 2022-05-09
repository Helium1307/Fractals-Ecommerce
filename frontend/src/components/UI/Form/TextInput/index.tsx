import { Field, FieldAttributes } from "formik";
import { TextField } from "@material-ui/core";

import React from "react";

interface IInputProps extends FieldAttributes<any> {}

const TextInput: React.FC<IInputProps> = (props) => {
  return <Field {...props} as={TextField} />;
};

export default TextInput;
