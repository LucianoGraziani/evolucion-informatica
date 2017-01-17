import React, { PropTypes } from 'react';
// import { Link } from 'react-router';

const propTypes = {
  children: PropTypes.element.isRequired,
};

function App({ children }) {
  return (
    <div>
      {/* TODO Home button */}
      {children}
    </div>
  );
}

App.propTypes = propTypes;

export default App;
