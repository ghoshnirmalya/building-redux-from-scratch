import createStore from "../src";

describe("createStore", () => {
  test("should be a function", () => {
    expect(typeof createStore).toBe("function");
  });

  describe("store", () => {
    test("should return an object", () => {
      expect(typeof createStore()).toBe("object");
    });

    test("should return a state object", () => {
      expect(typeof createStore()).toBe("object");
    });

    test("should return a listeners array", () => {
      expect(typeof createStore().listeners).toBe("object");
    });

    test("should return a dispatch function", () => {
      expect(typeof createStore().dispatch).toBe("function");
    });

    test("should return a subscribe function", () => {
      expect(typeof createStore().subscribe).toBe("function");
    });

    test("should return a getState function", () => {
      expect(typeof createStore().getState).toBe("function");
    });

    test("should update the state on passing of initialState", () => {
      const initialState = {
        count: 10
      };
      const store = createStore(jest.fn, initialState);

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
  });
});
