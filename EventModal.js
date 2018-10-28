import React from "react";
import { Modal, View, Text, Button, StyleSheet } from "react-native";
import { connect } from "react-redux";

const EventModal = props => (
  <View style={styles.view}>
    <Modal
      animationType="slide"
      transparent={false}
      visible={props.visible}
      onRequestClose={props.toggleModal}
      transaprent={true}
    >
      <Text>idemo</Text>
      <Button
        title="Submit"
        onPress={() => {
          props.addEvent("lala");
          props.toggleModal();
        }}
      />
    </Modal>
  </View>
);

export default connect(
  null,
  dispatch => ({ addEvent: dispatch.quantifiedEvents.addEvent })
)(EventModal);

const styles = StyleSheet.create({
  view: {
    paddingTop: 22
  }
});
