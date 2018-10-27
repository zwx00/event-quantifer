import React from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';

export default class EventModal extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <View style={styles.view}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.props.visible}
                    onRequestClose={() => this.props.closeModal("new event")}
                    transaprent={true}
                >
                    <Text>idemo</Text>
                    <Button title="Submit" onPress={() => this.props.closeModal("new event")} />
                </Modal>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    view: {
        paddingTop: 22,

    },
});
