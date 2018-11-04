import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const PushNotification = props => (
  <View style={styles.component}>
    <Text style={styles.name}>Event name: {props.name}</Text>
    <Button
      onPress={props.deleteEvent} title="This will do something"
    />
  </View>
);

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


export default PushNotification;


