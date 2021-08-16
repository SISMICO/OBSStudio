const api = "http://localhost:5001/weather";
const interval = 600000; // 10 minutes
const hot = 24;
const cold = 17;

function start() {
    getWeatherAPI();
    setInterval(getWeatherAPI, interval); 
}

function update(temperature: string) {
    let tempLabel = document.getElementById("temp");
    let tempValue = getTemperature(temperature);
    tempLabel.innerText = tempValue + '°';
    setIconTemperature(tempValue);
    console.log(`Temperature: ${tempValue}`);
}

function getWeatherAPI() {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", api, true);
    xmlHttp.setRequestHeader('X-PINGOTHER', 'pingpong');
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4) {
            update(xmlHttp.responseText);
        }
    }
    xmlHttp.send();
}

function getTemperature(data: string): number {
    return +data;
}

function setIconTemperature(temperature: number) {
    let hotIcon = document.getElementById("hoticon");
    let coldIcon = document.getElementById("coldicon");
    let normalIcon = document.getElementById("normalicon");

    hotIcon.style.display = (temperature >= hot) ? 'unset' : 'none';
    coldIcon.style.display = (temperature <= cold) ? 'unset' : 'none';
    normalIcon.style.display = (temperature > cold && temperature < hot) ? 'unset' : 'none';
}

addEventListener('DOMContentLoaded', (event) => {
    start();
});
