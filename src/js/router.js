import { dateCalcForm } from "./dateCalc.js";
import { timerForm } from "./timer.js";
import { toggleWindow } from "./utils.js";

const dateCalc = document.getElementById("toggleCalc");
const timer = document.getElementById("toggleTimer");

dateCalc.addEventListener("click", () => toggleWindow(timerForm, dateCalcForm));
timer.addEventListener("click", () => toggleWindow(dateCalcForm, timerForm));