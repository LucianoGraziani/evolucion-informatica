import React from 'react';
import { Link as RouterLink } from 'react-router';
import styled, { css } from 'styled-components';

export const Parragraph = styled.p`
  line-height: 1.4;
  margin: 4vh 0;
  text-align: center;
`;

const Code = styled.code`
  font-family: monospace;
  font-size: 15px;
  padding-left: 2px;
`;

export const code = content => <Code>{content}</Code>;

const linkStyles = css`
  /* Adapt the colors based on primary prop */
  background: ${props => (props.primary ? 'palevioletred' : 'white')};
  color: ${props => (props.primary ? 'white' : 'palevioletred')};

  display: inline-block;
  border: 2px solid palevioletred;
  border-radius: 3px;
  width: 75%;

  span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
  }
  &:focus {
    outline: 2px;
    box-shadow: 0 0 3pt 2pt palevioletred;
    outline-offset: 2px;
  }
`;

export const StyledRouterLink = styled(RouterLink)`
  ${linkStyles}
  font-size: 1.5em;
  padding: 0.5em 1.5em;
  margin: 1em 0;

  span:after {
    content: '»';
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
  }

  &:hover span:after {
    opacity: 1;
    right: 0;
  }

  &:hover span {
    padding-right: 25px;
  }
`;

export const GoBackButton = styled(RouterLink)`
  ${linkStyles}
  font-family: helvetica neue, helvetica, sans-serif;
  text-align: center;
  font-size: 0.75em;
  padding: 0.25em 0.5em;
  margin: 0.75em 1em;
  width: 50px;

  span:before {
    content: '«';
    position: absolute;
    opacity: 0;
    top: 0;
    left: -15px;
    transition: 0.5s;
  }

  &:hover span:before {
    opacity: 1;
    left: -5px;
  }

  &:hover span {
    padding-left: 10px;
  }
`;
