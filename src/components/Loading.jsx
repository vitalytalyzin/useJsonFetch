import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';

const Loading = () => {
  const [ , loading] = useJsonFetch('loading');

  const content = loading ? (
    <div>...Loading</div>
  ) : null;

  return (
    <div>
      {content}
    </div>
  );
};

export default Loading;
