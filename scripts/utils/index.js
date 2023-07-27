"use strict";

import fetchApp from "./fetchApp.js";
import displayIndex from "../pages/displayIndex.js";

const initDex = async () => {
  const DATA = await fetchApp();
  displayIndex(DATA);
  
};
window.addEventListener("load", initDex);