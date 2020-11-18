import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';

const Data = () => {
  const [data, loading] = useJsonFetch('data');
  const content = loading ? (
    <span>...Loading</span>
  ) : (
    <span>{data.status}</span>
  )

  return (
    <div>{content}</div>
  );
};

export default Data;
