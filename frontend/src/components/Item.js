import React from 'react';

const Item = ({ name }) => {
  return <li>{name}</li>;
};

export default React.memo(Item);
