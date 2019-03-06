import React from 'react';

import styles from './styles';

const { Section, Title } = styles;

export default ({ title, children }) => (
  <Section>
    <Title>{title}</Title>
    {children}
  </Section>
)