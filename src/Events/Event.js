export default class Event {
  constructor(name, cost) {
    this.name = name;
    this.cost = cost;
    this.completed = false;
  }

  markComplete () {
    this.completed = true;
  }
}