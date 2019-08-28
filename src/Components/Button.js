import React from 'react';

export default function Button(props) {
  const { event, balance, incInterval } = props;
  const { name, cost } = event;
  const isDisabled = (balance < cost);

  const handleClick = function() {
    event.markComplete();
    incInterval(cost);
  }
  return (
    <button disabled={isDisabled} onClick={handleClick}>${cost} - {name}</button>
  )
}