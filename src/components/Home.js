import React from 'react';
import styled from 'styled-components';

import { Root, MainTitle } from './Root';
import getRepoUrl from '../helpers/getRepoUrl';
import { Parragraph, StyledRouterLink } from './SimpleStyledComponents';

const CreditLine = styled.div`
  color: #A0A0A0;
  font-size: 14px;
  margin-top: 50px;
  float: right;
`;

function Home() {
  return (
    <Root>
      <MainTitle>Evolución histórica de la Informática</MainTitle>
      <p style={{ color: '#B0B0B0', textAlign: 'center', fontSize: '0.9em' }}>
        Final de la materia Aspectos Legales, Profesionales y Sociales de la Informática.
        Cursada 2015. Carrera de Lic. en Sistemas de la UNRN.
      </p>
      <Parragraph>
        <StyledRouterLink to={getRepoUrl('full-history')} primary>
          <span>Historia completa</span>
        </StyledRouterLink>
        <StyledRouterLink to={getRepoUrl('simple-history')}>
          <span>Historia reducida</span>
        </StyledRouterLink>
        <StyledRouterLink to={getRepoUrl('robotic-ai')}>
          <span>Robótica e Inteligencia Artificial</span>
        </StyledRouterLink>
        <StyledRouterLink to={getRepoUrl('crypto-bi')}>
          <span>Criptografía y BI</span>
        </StyledRouterLink>
        <StyledRouterLink to={getRepoUrl('business')}>
          <span>Empresas</span>
        </StyledRouterLink>
        <StyledRouterLink to={getRepoUrl('e-comunications')}>
          <span>Internet y comunicaciones</span>
        </StyledRouterLink>
        <StyledRouterLink to={getRepoUrl('ddbb')}>
          <span>Bases de datos</span>
        </StyledRouterLink>
        <StyledRouterLink to={getRepoUrl('about')}>
          <span>Acerca de</span>
        </StyledRouterLink>
      </Parragraph>
      <CreditLine>
          Coded by Luciano Graziani @ v{__VERSION__}
      </CreditLine>
    </Root>
  );
}

export default Home;
