import React from "react";
import { AsyncStorage, StyleSheet, Text, View, Button } from "react-native";
import QuantifiedEventComponent from "./QuantifiedEventComponent";
import Header from "./Header";
import AddButton from "./AddButton";
import EventModal from "./EventModal";

export default class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      quantifiedEvents: [],
      modalVisibility: false
    };
    
    let storageAccess = AsyncStorage.getItem("myTrackedEvents");

    storageAccess
      .then(result =>
        this.setState({ quantifiedEvents: JSON.parse(result ? result : []) })
      )
      .catch(result => this.setState({ quantifiedEvents: [] }));

    this.addEvent = this.addEvent.bind(this);
    this.removeEvent = this.removeEvent.bind(this);
    this.showModal = this.showModal.bind(this);
    this.refreshEvents = this.refreshEvents.bind(this);
  }

  showModal() {
    this.setState({
      modalVisibility: true
    });
  }

  editEvent(event_index) {}

  refreshEvents () {
    AsyncStorage.getItem(
      "myTrackedEvents"
    ).then((result) =>
        this.setState({ 
          quantifiedEvents: result
        })
    ).catch(result => this.setState({ quantifiedEvents: this.state.quantifiedEvents }));
  }

  addEvent(event_name) {
    this.setState({
      modalVisibility: false
    });
    
    AsyncStorage.setItem(
      "myTrackedEvents",
      JSON.stringify([...this.state.quantifiedEvents, { name: event_name }])
    ).then(this.refreshEvents);
  }

  removeEvent(eventIndex) {
    this.setState({
      modalVisibility: false
    });
    
    AsyncStorage.setItem(
      "myTrackedEvents",
      JSON.stringify(this.state.quantifiedEvents.splice(eventIndex, 1)),
    ).then(this.refreshEvents);
  }

  render() {
    return (
      <View style={styles.layout}>
        <Header />
        <View style={styles.content}>
          <View style={styles.events}>
            {this.state.quantifiedEvents.map((obj, index) => (
              <QuantifiedEventComponent removeEvent={this.removeEvent} eventIndex={index} key={index} name={obj.name} />
            ))}
          </View>
          <View style={styles.footer}>
            <AddButton addEvent={this.showModal} />
          </View>
        </View>
        <EventModal
          eventName={this.state.eventName}
          visible={this.state.modalVisibility}
          closeModal={this.addEvent}
        />
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
    justifyContent: "space-between"
  },
  events: {
    width: "100%",
    alignItems: "center"
  },
  footer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingBottom: 25
  }
});
