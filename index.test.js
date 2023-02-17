const React = require("react");

test("uses the `native` exports condition", () => {
  expect(React).toEqual({ version: "native" });
});
