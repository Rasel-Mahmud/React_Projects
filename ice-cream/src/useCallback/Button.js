import React from 'react';

function Button({ clickhandle, children }) {
  console.log(`Rendering ${children}`);
  return <button onClick={clickhandle}>{children}</button>;
}

export default React.memo(Button);
