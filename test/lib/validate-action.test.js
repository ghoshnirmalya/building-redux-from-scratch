import validateAction from "../../src/lib/validate-action";

describe("#validateAction", () => {
  test("should throw an error if type is not present in the argument object", () => {
    expect(() => {
      validateAction({
        payload: {
          count: 40
        }
      });
    }).toThrowError("Action must have a type!");
  });

  test("should throw an error if argument is not an object", () => {
    expect(() => {
      validateAction("hello world");
    }).toThrowError("Action must be an object!");
  });
});
