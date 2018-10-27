import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class PushNotification extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.component}>
        <Text style={styles.name}>Event name: {this.props.name}</Text>
        <Button onPress={() => this.props.removeEvent(this.props.eventIndex)} title="This will do something" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  component: {
    marginTop: 10,
    width: "95%",
    backgroundColor: "skyblue"
  },
  name: {
    height: 40
  }
});
