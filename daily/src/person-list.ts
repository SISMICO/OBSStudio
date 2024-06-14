export default class PersonList {
  people: string[] = [];
  private position: number = 0;
  
  constructor(people: string[]) {
    this.people = this.randomizePeople(people);
  }
  
  start(): string {
    return this.getPerson();
  }
  
  next(): string {
    this.position++;
    return this.getPerson();
  }
  
  previous(): string {
    this.position--;
    return this.getPerson();
  }
  
  getNextPerson(): string {
    return this.people[this.position + 1];
  }
  
  private getPerson(): string {
    return this.people[this.position];
  }
  
  private getRandomIndex = (max: number) => {
    return Math.floor(Math.random() * max);
  }
  
  private randomizePeople = (people: string[]) => {
    let result = [...people];
    for (let index = 0; index < result.length; index++) {
      let old = result[index];
      let newIndex = this.getRandomIndex(result.length);
      result[index] = result[newIndex];
      result[newIndex] = old;
    }
    return result;
  }
}
