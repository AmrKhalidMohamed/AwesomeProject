import  { useState, useEffect } from 'react';
import axios from 'axios';

const baseUrl = 'https://9197-45-242-217-28.ngrok-free.app'; 

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
      console.log(response.data)
      setData(response.data.data);
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
