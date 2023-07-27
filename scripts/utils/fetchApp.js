"use strict";

const url = "/data/photographers.json";

const fetchApp = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;

  } catch (error) {
    return false;
  }
};
export default fetchApp;
