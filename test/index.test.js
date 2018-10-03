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
  });
});
