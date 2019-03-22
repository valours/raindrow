import React, { useState } from 'react';
import styled from 'styled-components';

const Question = styled.div`
  margin: 10px;
  border-radius: 4px;
  transition: background 1.2s;
  max-width: 260px;
  background: ${props => props.focused ? '#eee' : '#3855df'}

  & > .title {
    font-size: 1.1em;
    padding: 10px;
    transition: color 1s;
    color: ${props => props.focused ? '#3855df' : 'white'}
  }

  & > .answer {
    padding: 20px;
    transition: height 1s;
    transition: color 1s;
    overflow: hidden;
    padding: ${props => props.focused ? '0 10px 10px 10px' : '0'};
    color: ${props => props.focused ? '#3855df' : 'white'};
    height: ${props => !props.focused ? '0px' : '75px'};
  }
`

const FAQAlpha = () => {
  const [questionFocused, setQuestionFocused] = useState(0);
  return(
    <div>
      {questionFocused}
      <Question
        focused={questionFocused === 1}
        onClick={() => setQuestionFocused(questionFocused === 1 ? 0 : 1)}
      >
        <div className='title'>
          How do I contact support?
        </div>
        <div className='answer'>
        To unzip a single file or folder, open the zipped folder, then drag the file or folder from the zipped folder to a new location.
        </div>
      </Question>
      <Question
        focused={questionFocused === 2}
        onClick={() => setQuestionFocused(questionFocused === 2 ? 0 : 2)}
      >
        <div className='title'>
          How I can unzip product files?
        </div>
        <div className='answer'>
        To unzip a single file or folder, open the zipped folder, then drag the file or folder from the zipped folder to a new location.
        </div>
      </Question>
    </div>
  )
}

export default FAQAlpha;