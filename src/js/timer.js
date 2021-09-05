import { formatError } from "./utils.js";
import { setTimer } from "./timerCalc.js";

import audio from "../assets/timer-bell.mp3";


export const timerForm = document.forms.timer__form;

const start = document.getElementById("start");
const stop = document.getElementById("stop");
const error = document.querySelector(".error");
const ring = new Audio(audio);

start.addEventListener("click", startTime);
stop.addEventListener("click", stopTime);

let timerId = null;

function startTime(e) {
    e.preventDefault();

    error.innerHTML = "";
    let time = timerForm.elements.time.value;

    if (time && !timerId) {
        timerId = setInterval(() => {
            const timer = setTimer(time);
            if (timer) {
                timerForm.elements.time.value = timer;
                time = timer;
            } else {
                clearInterval(timerId);
                timerId = null;
                ring.play();
            }
        }, 1000);
    } else if (timerId) {
        error.innerHTML = "Таймер уже запущен";
        setTimeout(() => (error.innerHTML = ""), 3000);
    } else {
        error.innerHTML = formatError("Введите время");
    }
}

function stopTime(e) {
    e.preventDefault();
    clearInterval(timerId);
    timerId = null;
    error.innerHTML = "";
    ring.pause();
}