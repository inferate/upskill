import React from 'react';

function Tabs({ children, buttons, buttonsWrapper }) {
  const ButtonsWrapper = buttonsWrapper;
  return (
    <>
      <ButtonsWrapper>{buttons}</ButtonsWrapper>
      {children}
    </>
  );
}

export default Tabs;
