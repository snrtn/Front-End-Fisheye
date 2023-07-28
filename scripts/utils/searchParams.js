"use strict";

// appeler URLSearchParams
const PARAMS = new URLSearchParams(window.location.search);
let id = PARAMS.get("id");

export default id;
