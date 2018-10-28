import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { connect } from "react-redux";
const PushNotification = props => (
  <View style={styles.component}>
    <Text style={styles.name}>Event name: {props.name}</Text>
    <Button
      onPress={() => props.removeEvent(props.eventIndex)}
      title="This will do something"
    />
  </View>
);

export default connect(
  null,
  dispatch => ({ removeEvent: dispatch.quantifiedEvents.removeEvent })
)(PushNotification);
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
