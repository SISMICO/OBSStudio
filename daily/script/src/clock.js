var Clock = /** @class */ (function () {
    function Clock(initialClock, decrement) {
        if (decrement === void 0) { decrement = false; }
        this.intervalHandler = null;
        this.initialClock = initialClock;
        this.decrement = decrement;
    }
    Clock.prototype.startClock = function () {
        var _this = this;
        var now = this.initialClock;
        this.intervalHandler = setInterval(function () {
            now--;
            document.getElementById("clock").innerText = _this.formatTime(now);
        }, 1000);
    };
    Clock.prototype.stopClock = function () {
        clearInterval(this.intervalHandler);
    };
    Clock.prototype.formatTime = function (current) {
        var absoluteTime = Math.abs(current);
        var minutes = Math.floor(absoluteTime / 60);
        var seconds = Math.floor(absoluteTime % 60);
        var negativeIndicator = function (value) { return value < 0 ? '-' : ''; };
        return "".concat(negativeIndicator(current)).concat(this.formatNumber(minutes), ":").concat(this.formatNumber(seconds));
    };
    Clock.prototype.formatNumber = function (value) {
        return "0".concat(value).slice(-2);
    };
    return Clock;
}());
export { Clock };
