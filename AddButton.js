import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default class AddButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <TouchableOpacity style={styles.component} onPress={this.props.addEvent} title="+">
            <Ionicons name="md-add-circle" size={64} />
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  component: {
      paddingRight: 30,
  },
});
