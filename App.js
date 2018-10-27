import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import QuantifiedEventComponent from "./QuantifiedEventComponent";
import Header from "./Header";
import AddButton from "./AddButton";

export default class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = { 
          quantifiedEvents: [
              "first event",
              "second event",
              "third event",
          ],
      };
    this.addEvent = this.addEvent.bind(this);
  }

  addEvent(event) {
      this.setState({ quantifiedEvents: [
        ...this.state.quantifiedEvents,
        "lala"
      ]});
  }

  render() {
    return (
      <View style={styles.layout}>
        <Header />
        <View style={styles.content}>
            <View style={styles.events}>
                { this.state.quantifiedEvents.map(
                    (name, index) => <QuantifiedEventComponent key={index} name={name} />
                ) 
                }
          </View>
          <View style={styles.footer}>
              <AddButton addEvent={this.addEvent}/>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
layout: {
    flex: 1,
    display: "flex",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  content: {
      flex: 1,
      borderWidth: 1,
      width: "100%",
      justifyContent: "space-between",
  },
  events: {
      width: "100%",
      alignItems: "center",
  },
  footer: {
      flexDirection: "row",
      justifyContent: "flex-end",
      paddingBottom: 25,
  },
});
