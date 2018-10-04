// @flow

import validateAction from "./lib/validate-action";

const createStore = (
  reducer: (args: {}, {}) => {},
  initialState: {} = {}
): {} => {
  const store = {};

  store.state = initialState;

  store.listeners = [];

  store.subscribe = listener => store.listeners.push(listener);

  store.dispatch = (action: any) => {
    validateAction(action);

    store.state = reducer(store.state, action);
    store.listeners.forEach(listener => listener(action));
  };

  store.getState = () => store.state;
  store.dispatch({ type: "@@redux/INIT" });

  return store;
};

export default createStore;
