import React from 'react';
import beginningCareer from './Events/allEvents';
import ButtonGroup from './Components/ButtonGroup';
import './App.css';

class App extends React.Component {
  state = {
    balance: 240, //initial starting balance
    hours: 0, //every time setInterval runs, this value will incriment
    increment: 2.95, //base value for incrementation
    costBase: 235, //base value for upgrade costs
    rateGrowth: 1.07, //lower rateGrowth === cheaper upgrade costs
    multipliers: 1, 
    intervalId: 0, 
    overDraftCharge: 25,
    career: beginningCareer,
    milliseconds: 400 // setInterval
  }

  incBalance = (sum) => {
    this.setState({balance: this.state.balance + sum, hours: this.state.hours + 1});
  }

  startInterval = () => {
    let { increment, milliseconds } = this.state;
    let intervalId = setInterval(() => {
      this.incBalance(increment)
    }, milliseconds)

    this.setState({ intervalId })
  }

  stopInterval = () => {
    clearInterval(this.state.intervalId)
  }

  calcNextCost = () => {
    const { costBase, rateGrowth, multipliers } = this.state;
    return costBase * Math.pow(rateGrowth, multipliers);
  }

  incInterval = (cost) => {
    let { increment, balance, multipliers, career } = this.state;
    let productionTotal = increment + (multipliers * .1);
    console.log('Done yet? ', career.isComplete());
    let newCareer = (career.isComplete()) ? (career.getNext()) : career;
    this.stopInterval();
    this.setState({increment: productionTotal,
                   balance: balance - cost,
                   multipliers: multipliers + 1,
                   career: newCareer}, () => {
      this.startInterval();
    });
  }

  incRateGrowth = () => {
    this.setState({rateGrowth: this.state.rateGrowth + .01})
  }
  
  render() {
    let { balance, increment, multipliers, hours, milliseconds, career } = this.state;
    let ratePerHour = 1000 / milliseconds;
    return (
      <div>
        <div>Hello!</div>
        <div>Balance: ${balance.toFixed(2)}</div>
        <div>Increment: {increment.toFixed(2)}</div>
        <div>Multipliers: {multipliers}</div>
        <div>Hours worked: {hours}</div>
        <div>Weeks worked: {Math.floor(hours / 168)}</div>
        <div>Monthes worked: {Math.floor(hours /730)}</div>
        <div>Years worked: {Math.floor(hours / 8760)}</div>
        <div>
          <button onClick={() => this.incBalance(increment * ratePerHour)}>Work</button>
          <button onClick={() => this.incInterval(this.calcNextCost())}>${this.calcNextCost().toFixed(2)}</button>
          <ButtonGroup
            career={career}
            balance={balance}
            incInterval={this.incInterval}/>
        </div>
      </div>
    )
  }
}

export default App;
