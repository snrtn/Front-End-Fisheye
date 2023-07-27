"use strict";

const params = new URLSearchParams(window.location.search);
let id = params.get("id");

export default id;
