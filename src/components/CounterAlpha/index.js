import React from 'react';
import styled from 'styled-components';

import Square from '../Square';
import counterHook from '../../hooks/counter';

const Card = styled(Square)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  background: #2193b0;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #6dd5ed, #2193b0);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #6dd5ed, #2193b0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`

const Count = styled.div`
  font-size: 35px;
  font-weight: bold;
  padding: 8px;
`

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  color: #2193b0;
  font-size: 22px;
  background: white;
  max-width: 100px;
  padding: 8px;
  border-radius: 10px;
`

const Button = styled.div`
  border; 1px solid #2193b0;
`

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