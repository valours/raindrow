import React from 'react';

import styles from './styles';

const { Section, Title, Components } = styles;

export default ({ title, children }) => (
  <Section>
    <Title>{title}</Title>
    <Components>{children}</Components>
  </Section>
)