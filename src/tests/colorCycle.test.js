import React from "react";
import colorCycle from "lib/colorCycle.js";

// ---------------------------------------------------------
// Testing Jest 
// 2018-03-01 20:48
// ---------------------------------------------------------

test("cyles through colors properly", () => {
  expect(colorCycle(26)).toEqual('red');
});
