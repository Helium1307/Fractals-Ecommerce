import { Field, FieldAttributes } from "formik";
import { TextField, TextFieldProps } from "@material-ui/core";

import React from "react";
import useStyles from "./theme";

interface IInputProps extends FieldAttributes<any> {
  textFieldProps: TextFieldProps;
}

const TextInput: React.FC<IInputProps> = (props) => {
  const classes = useStyles();

  return (
    <Field {...props}>
      {({ field, form, meta }: any) => (
        <div className={classes.divTextInput}>
          <TextField type="text" {...field} {...props.textFieldProps} />
          {meta.touched && meta.error && (
            <div className={classes.error}>{meta.error}</div>
          )}
        </div>
      )}
    </Field>
  );
};

export default TextInput;
