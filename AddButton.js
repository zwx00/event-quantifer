import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const AddButton = props => (
  <TouchableOpacity style={styles.component} onPress={props.addEvent} title="+">
    <Ionicons name="md-add-circle" size={64} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  component: {
    paddingRight: 30
  }
});

export default AddButton;
