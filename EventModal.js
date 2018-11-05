import React from "react";
import { Modal, View, TextInput, Button, StyleSheet } from "react-native";

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

class EventModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      invalidInput: false
    };

    this.submit = this.submit.bind(this);
  }

  submit() {
    if (!(this.state.name.length > 0)) {
      this.setState({ invalidInput: true });
    } else {
      this.props.writeEvent({ name: this.state.name });
      this.setState({ name: "" });
      this.props.toggleModal();
    }
  }

  render() {
    return (
      <Modal
        animationType="slide"
        visible={this.props.visible}
        onRequestClose={() => {
          this.setState({ name: "" });
          this.props.toggleModal();
        }}
        transparent
      >
        <View style={styles.container}>
          <View style={styles.view}>
            <View style={styles.flex}>
              <TextInput
                style={styles.textInput}
                placeholder="yes, name your habit here..."
                onChangeText={name =>
                  this.setState({
                    name,
                    invalidInput: false
                  })
                }
                value={this.state.name}
                underlineColorAndroid={
                  this.state.invalidInput ? "darkred" : "white"
                }
              />
              <Button
                raised
                containerViewStyle={styles.submitButton}
                title="Submit"
                onPress={this.submit}
              />
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

export default EventModal;
