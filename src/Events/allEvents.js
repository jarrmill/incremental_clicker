import CareerPhase from './CareerPhase';
import Event from './Event';

const Bellman = new CareerPhase('Bellman', [
  new Event('Buy new Shoes', 120),
  new Event('Buy a car', 2000),
  new Event('Pay of Credit Card debt', 1000)
], null) 

const Favor = new CareerPhase('Favor', [
  new Event('Upgrade Bike', 500),
  new Event('Buy a BackPack', 20),
  new Event('Buy Insurance', 250)
], Bellman)

const Begger = new CareerPhase('Begger', [
  new Event('Buy a Bike', 250),
  new Event('Buy a Phone', 250)
  ], Favor);

  export default Begger