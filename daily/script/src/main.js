var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { Clock } from "./clock";
var PERSON_TIME_SECONDS = 120;
var myClock = new Clock(PERSON_TIME_SECONDS, true);
window.onload = function () {
    document.getElementById("panel").innerText = random().join(" | ");
    document.getElementById("start").addEventListener("click", function () { return myClock.startClock(); });
    document.getElementById("stop").addEventListener("click", function () { return myClock.stopClock(); });
};
var getRandomIndex = function (max) {
    return Math.floor(Math.random() * max);
};
var random = function () {
    var result = __spreadArray([], people, true);
    for (var index = 0; index < result.length; index++) {
        var old = result[index];
        var newIndex = getRandomIndex(result.length);
        result[index] = result[newIndex];
        result[newIndex] = old;
    }
    return result;
};
var people = [
    "Bento",
    "Sosa",
    "Alysson",
    "Samille",
    "Ellen",
    "Vini"
];
// const startClock = () => {
//   let now = PERSON_TIME_SECONDS;
//   setInterval(() => {
//     now--;
//     document.getElementById("clock").innerText = formatTime(now);
//   }, 1000)
// }
// const formatTime = (current: number) => {
//   const absoluteTime = Math.abs(current);
//   let minutes = Math.floor(absoluteTime / 60);
//   let seconds = Math.floor(absoluteTime % 60);
//   const negativeIndicator = (value: number) => value < 0 ? '-' : '';
//   return `${negativeIndicator(current)}${formatNumber(minutes)}:${formatNumber(seconds)}`;
// }
// const formatNumber = (value: number) => {
//   return `0${value}`.slice(-2);
// }
