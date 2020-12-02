import React from 'react';

function Title() {
  console.log('Rendering the title');
  return (
    <div>
      <h2>use callBack Hook</h2>
    </div>
  );
}

export default React.memo(Title);
