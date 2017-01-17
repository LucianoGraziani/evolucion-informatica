import React, { PropTypes } from 'react';

import { Parragraph, code } from './SimpleStyledComponents';

const propTypes = {
  location: PropTypes.object.isRequired,
};

function PageNotFound({ location }) {
  return (
    <Parragraph>
      Page not found - the path, {code(location.pathname)},
      did not match any React Router routes.
    </Parragraph>
  );
}

PageNotFound.propTypes = propTypes;

export default PageNotFound;
