import React from "react";
import { Modal, View, TextInput, Button, StyleSheet } from "react-native";
import { reduxForm, Field } from "redux-form";
import { TextInputField } from "./FieldWrapper.js";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000080"
  },
  view: {
    width: "85%",
    height: "60%",
    backgroundColor: "#fff",
    alignItems: "center"
  },
  textInput: {
    width: "85%",
    borderWidth: 1,
    borderColor: "#000",
    alignSelf: "flex-start"
  },
  submitButton: {
    width: 200
  },
  flex: {
    width: "80%",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around"
  }
});
const EventModal = props => {
  const textInput = ({ input: { onChange, value }, ...props }) => (
    <TextInput onChangeText={onChange} value={value} {...props} />
  );

  return (
    <Modal
      animationType="slide"
      onRequestClose={() => {
        props.toggleModal();
      }}
      visible={props.visible}
      transparent
    >
      <View style={styles.container}>
        <View style={styles.view}>
          <View style={styles.flex}>
            <Field
              name="eventName"
              component={textInput}
              type="text"
              placeholder="your event name..."
            />
            <TextInputField name="lols" placeholder="lalala" />

            <Button
              raised
              containerViewStyle={styles.submitButton}
              title="Submit"
              onPress={props.handleSubmit}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default reduxForm({ form: "eventForm" })(EventModal);
