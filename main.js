"use strict";

import CurrentYear from "./modules/current-year.js";

const currentYear = new CurrentYear();
const showCurrentYear = document.querySelector("#show-current-year");
showCurrentYear.textContent = currentYear.getCurrentYear();
