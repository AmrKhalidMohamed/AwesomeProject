import React, { useState, useEffect } from 'react';
import axios from 'axios';

const baseUrl = 'https://7e5f-154-178-181-57.ngrok-free.app'; 

const useFetch = (endPoint) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    url: `${baseUrl}/api/${endPoint}`,
    method: 'get',
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data);
    } catch (error) {
      setError(error);
      alert('There was an error');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); 

  return { data, isLoading, error };
};

export default useFetch;
