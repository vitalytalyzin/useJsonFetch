import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';

const Error = () => {
  const [,, error] = useJsonFetch('error');

  return (
    <div>
      {error}
    </div>
  );
};

export default Error;
