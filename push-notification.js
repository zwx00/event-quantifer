import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class PushNotification extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>Event name: {this.props.name}</Text>
        <Button title="This will do something" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderColor: "black",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
