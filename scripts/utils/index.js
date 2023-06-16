import fetchApp from "./fetchApp.js";
import displayIndex from "../pages/displayIndex.js";

const initDex = async () => {
  const data = await fetchApp();
  displayIndex(data);
};

window.addEventListener("load", initDex);