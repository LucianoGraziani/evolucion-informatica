import React from 'react';
import { Link as RouterLink } from 'react-router';
import styled, { css } from 'styled-components';

import Root from './Root';
import { Parragraph, code } from './SimpleStyledComponents';

const CreditLine = styled.div`
  color: #A0A0A0;
  font-size: 14px;
  margin-top: 50px;
`;
const MainTitle = styled.h1`
  font-size: 20px;
  margin-bottom: 0.5vh;
`;
const PageLinkContainer = styled.div`
  margin: 1vh 0;
`;
const linkStyles = css`
  border-bottom: 1px dotted rgb(0, 168, 0);

  &:hover {
    border-bottom: 1px solid rgb(0, 168, 0);
    color: black;
  }
  &:active {
    border-bottom: 1px solid rgb(0, 168, 0);
    color: black;
  }
  &:focus {
    outline: 2px solid rgb(0, 152, 0);
    outline-offset: 2px;
    color: black;
  }
`;
const StyledLink = styled.a`${linkStyles}`;
const StyledRouterLink = styled(RouterLink)`${linkStyles}`;

function Home() {
  const repoReadmeLink = text => (
    <StyledLink
      href="https://github.com/rafrex/spa-github-pages#readme"
    >{text}</StyledLink>
  );

  return (
    <Root>
      <MainTitle>Evolución histórica de la Informática</MainTitle>
      <Parragraph>
        This is an example single page app built with React and
        React&nbsp;Router using {code('browserHistory')}. Navigate
        with the links below and refresh the page or copy/paste the
        url to test out the redirect functionality deployed to overcome
        GitHub&nbsp;Pages incompatibility with single page apps (like this one).
      </Parragraph>
      <Parragraph>
        Please see the {repoReadmeLink('repo readme')} for instructions on how to
        use this boilerplate to deploy your own single page app using GitHub Pages.
      </Parragraph>
      <PageLinkContainer>
        <StyledRouterLink
          to="/example"
        >Example page</StyledRouterLink>
      </PageLinkContainer>
      <PageLinkContainer>
        <StyledRouterLink
          to="/example/two-deep?field1=foo&field2=bar#boom!"
        >Example two deep with query and hash</StyledRouterLink>
      </PageLinkContainer>
      <CreditLine>
          Code by Luciano Graziani
      </CreditLine>
    </Root>
  );
}

export default Home;
