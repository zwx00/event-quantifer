import React from "react";
import { StyleSheet, View } from "react-native";
import { combineReducers } from "redux";
import { Provider, connect } from "react-redux";
import { init } from "@rematch/core";
import QuantifiedEventComponent from "./QuantifiedEventComponent";
import Header from "./Header";
import AddButton from "./AddButton";
import EventModal from "./EventModal";
import * as models from "./models";
import { reducer as formReducer } from "redux-form";
import { composeWithDevTools } from "remote-redux-devtools";

const store = init({
  redux: {
    enchancers: [composeWithDevTools()],
    reducers: {
      form: formReducer
    }
  },
  models
});

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
      modalVisibility: !this.state.modalVisibility
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
                deleteEvent={() => this.props.deleteEvent(index)}
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
          onSubmit={data => {
            console.log(data);
            this.props.writeEvent(data);
            this.toggleModal();
          }}
        />
      </View>
    );
  }
}

const mapState = state => ({
  quantifiedEvents: state.quantifiedEvents
});

const mapDispatch = dispatch => ({
  ...dispatch.quantifiedEvents
});

const ConnectedApp = connect(
  mapState,
  mapDispatch
)(App);

const AppWrapper = () => (
  <Provider store={store}>
    <ConnectedApp />
  </Provider>
);

export default AppWrapper;
