import React from 'react';
import styled from 'styled-components';

export const Parragraph = styled.p`
  line-height: 1.4;
  text-align: justify;
  margin: 3vh 0;
`;

const Code = styled.code`
  font-family: monospace;
  font-size: 15px;
  padding-left: 2px;
`;

export const code = content => <Code>{content}</Code>;
