import { AsyncStorage } from "react-native";

const STORAGE_ID = "myTrackedEvents";

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
      return [...state.slice(0, payload), ...state.slice(payload+1) ];
    },
  },
  effects: (dispatch) => ({
    async readStorage(payload, rootState) {
      dispatch.quantifiedEvents.initEvents(JSON.parse(await AsyncStorage.getItem(STORAGE_ID)));
    },
    async writeEvent(payload, rootState) {
      await AsyncStorage.setItem(STORAGE_ID, 
        JSON.stringify([...rootState.quantifiedEvents.state, payload]));
      dispatch.quantifiedEvents.addEvent(payload);
    },
    async deleteEvent(payload, rootState) {
      await AsyncStorage.setItem(STORAGE_ID, JSON.stringify([
        ...rootState.quantifiedEvents.state.slice(0, payload),
        ...rootState.quantifiedEvents.state.slice(payload+1),
      ]));
      dispatch.quantifiedEvents.removeEvent(payload);
    },
  }),
};


