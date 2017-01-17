import React, { PropTypes } from 'react';
import styled from 'styled-components';

import { Root, MainTitle } from './Root';

const propTypes = {
  location: PropTypes.object.isRequired,
};

const Title = styled.h3`
  color: tomato;
  font-size: 1.5em;
  text-align: center;
`;
const Profesor = styled.p`
  color: darkred;
  font-weight: bold;
  text-align: center;
`;
const AlumnoLeft = styled.div`
  float: left;
  padding: 0.5em 0;
  width: 31%;
`;
const AlumnoDescriptionRight = styled.div`
  float: left;
  text-align: justify;
  padding: 0.5em 0;
  width: 69%;
  color: maroon;
`;
const Parragraph = styled.p`
  text-align: justify;

  &:after {
    clear: both;
  }
`;
const Alumno = styled.span`
  color: steelblue;
  font-weight: bold;
`;
const Separator = styled.hr`
  height: 6px;
  background: url(http://ibrahimjabbari.com/english/images/hr-12.png) repeat-x 0 0;
  border: 0;
  padding: 0;
  margin: 3em 0;
`;

function About() {
  return (
    <Root>
      <MainTitle>¿Quiénes estuvieron involucrados?</MainTitle>

      <div>
        <Title>Profesor</Title>
        <Profesor>Luis, Vivas</Profesor>

        <Separator />

        <Title>Alumnos</Title>
        <div>
          <Parragraph>
            <AlumnoLeft><Alumno>Javier, Valsecchi</Alumno></AlumnoLeft>
            <AlumnoDescriptionRight>
              creación inicial y elaboración de la historia reducida.
            </AlumnoDescriptionRight>
          </Parragraph>
          <Parragraph>
            <AlumnoLeft><Alumno>Luciano, Graziani</Alumno></AlumnoLeft>
            <AlumnoDescriptionRight>
              desarrollo web y elaboración de la historia de la Robótica y la IA.
            </AlumnoDescriptionRight>
          </Parragraph>
          <Parragraph>
            <AlumnoLeft><Alumno>Rossana, Traiman</Alumno></AlumnoLeft>
            <AlumnoDescriptionRight>
              elaboración de la historia de la Criptografía y la Inteligencia de Negocios.
            </AlumnoDescriptionRight>
          </Parragraph>
          <Parragraph>
            <AlumnoLeft><Alumno>Lautaro, Lopez</Alumno></AlumnoLeft>
            <AlumnoDescriptionRight>
              elaboración de la historia de las Empresas de Software y Hardware.
            </AlumnoDescriptionRight>
          </Parragraph>
          <Parragraph>
            <AlumnoLeft><Alumno>Daiana, Quevedo</Alumno></AlumnoLeft>
            <AlumnoDescriptionRight>
              elaboración de la historia de Internet y las Comunicaciones.
            </AlumnoDescriptionRight>
          </Parragraph>
          <Parragraph>
            <AlumnoLeft><Alumno>Bruno, Amico</Alumno></AlumnoLeft>
            <AlumnoDescriptionRight>
              elaboración de la historia de las Bases de Datos.
            </AlumnoDescriptionRight>
          </Parragraph>
        </div>
      </div>
    </Root>
  );
}

About.propTypes = propTypes;

export default About;
