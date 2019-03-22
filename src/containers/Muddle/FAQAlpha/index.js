import React, { useState } from 'react';
import styled from 'styled-components';

const Question = styled.div`
  margin: 10px;
  border-radius: 4px;
  transition: background 1.2s;
  background: ${props => props.focused ? 'white' : '#3855df'}

  & > .title {
    padding: 10px;
    transition: color 1s;
    color: ${props => props.focused ? '#3855df' : 'white'}
  }

  & > .answer {
    color: red;
    max-width: 50px;
    transition: height 1s;
    overflow: hidden;
    height: ${props => !props.focused ? '0px' : '100px'};
  }
`

const FAQAlpha = () => {
  const [questionFocused, setQuestionFocused] = useState(0);
  return(
    <div>
      {questionFocused}
      <Question
        focused={questionFocused === 1}
        onClick={() => setQuestionFocused(1)}
      >
        <div className='title'>
          How do I contact support?
        </div>
      </Question>
      <Question
        focused={questionFocused === 2}
        onClick={() => setQuestionFocused(2)}
      >
        <div className='title'>
          How I can unzip product files?
        </div>
        <div className='answer'>
          truc truc truc truc truc truc truc truc truc;
        </div>
      </Question>
    </div>
  )
}

export default FAQAlpha;