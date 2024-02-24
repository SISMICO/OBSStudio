import _ from 'lodash';
import Clock from "./clock";
import PersonList from './person-list';

const people = [
  "Bento",
  "Sosa",
  "Alysson",
  "Samille",
  "Ellen",
  "Vini"
];

const PERSON_TIME_SECONDS = 120;
const DAILY_START_SECONDS = 0;
let dailyClock: Clock = null
let personClock: Clock = null
let persons: PersonList = null;

window.onload = () => {
  persons = new PersonList(people);
  dailyClock = new Clock(document.getElementById("totalClock"), DAILY_START_SECONDS);
  personClock = new Clock(document.getElementById("personClock"), PERSON_TIME_SECONDS, true);
  
  document.getElementById("panel").innerText = persons.people.join(" | ");
  document.getElementById("start").addEventListener("click", () => startDaily());
  document.getElementById("stop").addEventListener("click", () => stopDaily());
  document.getElementById("nextPerson").addEventListener("click", () => nextPerson());
}

const startDaily = () => {
  dailyClock.startClock();
  personClock.startClock();
  setPerson(persons.start());
}

const stopDaily = () => {
  dailyClock.stopClock();
  personClock.stopClock();
}

const nextPerson = () => {
  personClock.resetClock();
  setPerson(persons.next());
}

const setPerson = (person: string) => {
  document.getElementById("person").innerText = person;
}

