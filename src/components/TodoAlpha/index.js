import React from 'react';
import styled from 'styled-components';
import isEmpty from 'lodash/isEmpty';

import Square from '../Square';
import todoHook from '../../hooks/todo';

const Card = styled(Square)``

const TodoAlpha = () => {
  const { todos } = todoHook();
  return (
    <Card>
      <h1>todos</h1>
      <div>
        { isEmpty(todos) && <div>nothing</div>}
      </div>
    </Card>
  )
}

export default TodoAlpha;