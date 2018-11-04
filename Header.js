import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>Event Quantifier</Text>
        <Text style={styles.subtitle}>
          track your bad habits for your posterity
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 40,
    height: 120,
    width: "100%",
    backgroundColor: "skyblue"
  },
  title: {
    fontSize: 30,
    paddingLeft: 10
  },
  subtitle: {
    textAlign: "right",
    paddingRight: 10
  }
});
