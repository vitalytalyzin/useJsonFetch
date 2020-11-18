import { useState, useEffect } from 'react';

export const useJsonFetch = (url, opts) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRequest = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/${url}`, opts);

        if (!response.ok) {
          setError(`code ${response.status}, ${response.statusText}`);
        } else {
          const data = await response.json();
          setData(data);
        }
      } catch (e) {
        console.log('error:', e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRequest();
  }, [opts, url]);

  return [data, isLoading, error];
};

export default useJsonFetch;
