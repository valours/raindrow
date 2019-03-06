import React from 'react';

import counterHook from '../../hooks/counter';
import styles from './styles';

const { Card, Count, Buttons, Button } = styles;

export default () => {
  const { add, take, count } = counterHook();
  return(
    <Card>
      <Count>{count}</Count>
      <Buttons>
        <Button onClick={add}>up</Button>
        <Button onClick={take}>down</Button>
      </Buttons>
    </Card>
  )
}