import styled from 'styled-components';

export const MainTitle = styled.h1`
  font-size: 28px;
  margin-bottom: 0.5vh;
  text-align: center;
  color: palevioletred;
`;
export const MainRoot = styled.div`
  display: inline-flex;
  min-height: 100%;
  min-width: 100%;
  background: ${props => (props.home ? 'papayawhip' : 'inherit')}
`;
export const Root = styled.div`
  font-family: helvetica neue, helvetica, sans-serif;
  font-weight: 300;
  font-size: 16px;
  letter-spacing: 0.025em;
  padding: 6vh 0 6vh 0;
  width: 500px;
  ${''/*
    use responsive max-width to simulate
    padding/margin to allow space for vertical
    scroll bar without creating horizontal scroll bar
    (if there is padding, the window will scroll
    horizontally to show the padding)
  */}
  max-width: calc(100vw - 40px);

  ${''/*
    center based on vw to prevent content jump
    when vertical scroll bar show/hide note: vw/vh
    include the width of scroll bars. Note that
    centering using margin auto or % (which doesn't
    include scroll bars, so changes when scroll bars
    shown) causes a page jump
  */}
  position: relative;
  left: 50vw;
  transform: translate(-50%, 0);

  text-size-adjust: none;
`;
