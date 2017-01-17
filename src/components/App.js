import React, { PropTypes } from 'react';

import { GoBackButton } from './SimpleStyledComponents';
import getRepoUrl from '../helpers/getRepoUrl';
import { MainRoot } from './Root';

const propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object.isRequired,
};

const showBackgroundColor = path => (
  process.env.NODE_ENV !== 'production'
    ? path === '/' || path === '/about'
    : path === '/evolucion-informatica/' || path === '/evolucion-informatica/about'
);

function App({ children, location }) {
  return (
    <MainRoot home={showBackgroundColor(location.pathname)}>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          display: location.pathname === '/' ? 'none' : 'inherit',
          zIndex: 999,
        }}
      >
        <GoBackButton to={getRepoUrl()} primary>
          <span>Volver</span>
        </GoBackButton>
      </div>
      {children}
    </MainRoot>
  );
}

App.propTypes = propTypes;

export default App;
