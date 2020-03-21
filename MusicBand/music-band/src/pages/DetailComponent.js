import React from 'react';

const DetailComponent = ({match}) => {
  return (
    <div>{match.params.id}</div>
  );
}

export default DetailComponent;