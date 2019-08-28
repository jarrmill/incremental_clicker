import React from 'react';
import Button from './Button';

export default function ButtonGroup(props) {
  const { career, balance, incInterval } = props;
  const buttons = career.events.map((event, i) => {
    if (!event.completed) {
      return <Button event={event}
                      key={i}
                      balance={balance}
                      incInterval={incInterval}/>
    }

    return null;
  });

  return (
    <div>
      {buttons}
    </div>
  )
}