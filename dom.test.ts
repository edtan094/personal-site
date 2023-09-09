import { test, expect } from "bun:test";
import { JSDOM } from "jsdom";

test("dom test", () => {
  const h2 = document.querySelector("h2");
  console.log("h2", h2);
  expect(h2?.innerText).toEqual("Hello, my name is Edwin welcome to my site");
});
