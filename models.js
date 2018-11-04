import { AsyncStorage } from "react-native";

const STORAGE_ID = "myTrackedEvent";

export const quantifiedEvents = {
  state: [],
  reducers: {
    initEvents(state, payload) {
      return payload;
    },
    addEvent(state, payload) {
      return [...state, payload];
    },
    removeEvent(state, payload) {
      return [...state.slice(0, payload), ...state.slice(payload + 1)];
    }
  },
  effects: dispatch => ({
    async readStorage() {
      let storedEvents = await AsyncStorage.getItem(STORAGE_ID);
      if (storedEvents === null) {
        await AsyncStorage.setItem(
          STORAGE_ID,
          JSON.stringify([])
        );
        dispatch.quantifiedEvents.initEvents(
          []
        );
      } else {
        dispatch.quantifiedEvents.initEvents(
          JSON.parse(storedEvents)
        );
      }
    },
    async writeEvent(payload, rootState) {
      await AsyncStorage.setItem(
        STORAGE_ID,
        JSON.stringify([...rootState.quantifiedEvents, payload])
      );
      dispatch.quantifiedEvents.addEvent(payload);
    },
    async deleteEvent(payload, rootState) {
      await AsyncStorage.setItem(
        STORAGE_ID,
        JSON.stringify([
          ...rootState.quantifiedEvents.slice(0, payload),
          ...rootState.quantifiedEvents.slice(payload + 1)
        ])
      );
      dispatch.quantifiedEvents.removeEvent(payload);
    }
  })
};
