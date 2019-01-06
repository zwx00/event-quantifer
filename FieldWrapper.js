import React from "react";
import { Field } from "redux-form";
import { TextInput } from "react-native";

const TextInputField = parentProps => {
  const textInput = ({ input: { onChange, value }, ...props }) => (
    <TextInput onChangeText={onChange} value={value} {...props} />
  );
  return (
    <Field
      component={textInput}
      name={parentProps.name}
      type="text"
      defaultValue="lalala"
      {...parentProps}
    />
  );
};

export { TextInputField };
