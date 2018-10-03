// @flow

const createStore = (
  reducer: (args: {}, fn: (args: {}) => {}) => {},
  initialState: {} = {}
): {} => {
  const store = {};

  store.state = initialState;

  store.listeners = [];

  store.subscribe = listener => store.listeners.push(listener);

  store.dispatch = action => {
    store.state = reducer(store.state, action);
    store.listeners.forEach(listener => listener());
  };

  store.getState = () => store.state;

  return store;
};

export default createStore;
