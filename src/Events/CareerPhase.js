export default class CareerPhase {
  constructor(name, events, next) {
    this.name = name;
    this.events = events;
    this.next = next;
  }

  getNext () {
    return this.next;
  }

  isComplete() {
    for (let instance of this.events) {
      if(instance.completed !== true) {
        return false;
      }
    }
    return true;
  }
}