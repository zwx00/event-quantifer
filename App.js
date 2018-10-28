import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Provider, connect } from 'react-redux';
import QuantifiedEventComponent from "./QuantifiedEventComponent";
import Header from "./Header";
import AddButton from "./AddButton";
import EventModal from "./EventModal";
import * as models from "./models";
import { init } from "@rematch/core";

const store = init({
  models
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisibility: false
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
    this.props.readStorage();
  }

  toggleModal() {
    this.setState({
      modalVisibility: !this.state.modalVisbility
    });
  }

  render() {
    return (
      <View style={styles.layout}>
        <Header />
        <View style={styles.content}>
          <View style={styles.events}>
            {this.props.quantifiedEvents.map((obj, index) => (
              <QuantifiedEventComponent
                eventIndex={index}
                key={index}
                name={obj.name}
              />
            ))}
          </View>
          <View style={styles.footer}>
            <AddButton toggleModal={this.toggleModal} />
          </View>
        </View>
        <EventModal
          visible={this.state.modalVisibility}
          toggleModal={this.toggleModal}
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

const mapState = state => ({
  quantifiedEvents: state.quantifiedEvents
});

const mapDispatch = dispatch => ({
  ...dispatch.quantifiedEvents,
  
});

const ConnectedApp = connect(mapState, mapDispatch)(App);


export default AppWrapper = props => (
  <Provider store={store}>
    <ConnectedApp />
  </Provider>
);




