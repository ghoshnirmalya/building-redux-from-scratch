import createStore from "../src";

describe("createStore", () => {
  test("should return an object", () => {
    const reducer = jest.fn;
    const store = createStore(reducer, { count: 0 });

    expect(typeof store).toBe("object");
  });

  test("should return a state object", () => {
    const reducer = jest.fn;
    const store = createStore(reducer, { count: 0 });

    expect(typeof store).toBe("object");
  });

  test("should return a listeners array", () => {
    const reducer = jest.fn;
    const store = createStore(reducer, { count: 0 });

    expect(typeof store.listeners).toBe("object");
  });

  test("should return a dispatch function", () => {
    const reducer = jest.fn;
    const store = createStore(reducer, { count: 0 });

    expect(typeof store.dispatch).toBe("function");
  });

  test("should return a subscribe function", () => {
    const reducer = jest.fn;
    const store = createStore(reducer, { count: 0 });

    expect(typeof store.subscribe).toBe("function");
  });

  test("should return a getState function", () => {
    const reducer = jest.fn;
    const store = createStore(reducer, { count: 0 });

    expect(typeof store.getState).toBe("function");
  });

  test("should update the state on passing of initialState", () => {
    const initialState = {
      count: 10
    };
    const reducer = (state = initialState, action) =>
      action.type === "INCREMENT"
        ? { count: state.count + action.payload.count }
        : state;
    const store = createStore(reducer, initialState);

    expect(store.getState()).toEqual({ count: 10 });
  });

  test("should add middlewares if subscribed", () => {
    const initialState = {
      count: 10
    };
    const reducer = (state = initialState, action) =>
      action.type === "INCREMENT"
        ? { count: state.count + action.payload.count }
        : state;
    const store = createStore(reducer, initialState);
    const exampleMiddleware = jest.fn();
    const anotherExampleMiddleware = jest.fn();

    store.subscribe(exampleMiddleware);
    store.subscribe(anotherExampleMiddleware);

    [...Array(5)].map(() =>
      store.dispatch({
        type: "INCREMENT",
        payload: {
          count: 4
        }
      })
    );

    expect(exampleMiddleware).toHaveBeenCalled();
    expect(anotherExampleMiddleware).toHaveBeenCalled();
    expect(exampleMiddleware.mock.calls.length).toEqual(5);
    expect(anotherExampleMiddleware.mock.calls.length).toEqual(5);
  });

  test("update the store on dispatch", () => {
    const initialState = {
      count: 0
    };
    const reducer = (state = initialState, action) =>
      action.type === "INCREMENT"
        ? { count: state.count + action.payload.count }
        : state;
    const store = createStore(reducer, initialState);

    [...Array(5)].map(() =>
      store.dispatch({
        type: "INCREMENT",
        payload: {
          count: 4
        }
      })
    );

    expect(store.getState()).toEqual({ count: 20 });
  });

  test("should throw an error if the type is not passed", () => {
    const initialState = {
      count: 0
    };
    const reducer = jest.fn;
    const store = createStore(reducer, initialState);

    expect(() => {
      store.dispatch({
        payload: {
          count: 4
        }
      });
    }).toThrowError("Action must have a type!");
  });

  test("should throw an error if the action is not an object", () => {
    const initialState = {
      count: 0
    };
    const reducer = jest.fn;
    const store = createStore(reducer, initialState);

    expect(() => {
      store.dispatch("4");
    }).toThrowError("Action must be an object!");
  });
});
